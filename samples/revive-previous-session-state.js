// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

async function main(projectId, location, agentId, query, languageCode) {
  // [START dialogflow_revive_previous_session_state_async]

  // projectId = 'my-project';
  // location = 'global';
  // agentId = 'my-agent';
  // query = 'Hello!';
  // languageCode = 'en';

  // Imports the Google Cloud Dialogflow CX API library
  const {SessionsClient} = require('@google-cloud/dialogflow-cx');

  /**
   * Example for regional endpoint:
   *   const location = 'us-central1'
   *   const client = new SessionsClient({apiEndpoint: 'us-central1-dialogflow.googleapis.com'})
   */
  const client = new SessionsClient();
  const uuid = require('uuid');

  // Create a function that can marshal the current session state to JSON:
  function marshalSession(responses) {
    const sessionRestartData = {
      currentPage: responses.queryResult.currentPage.name,
      parameters: responses.queryResult.parameters,
    };
    return sessionRestartData;
  }

  // Marshal the current state:
  async function revivePreviousSessionState() {
    const sessionId = uuid.v4();
    const sessionPath = client.projectLocationAgentSessionPath(
      projectId,
      location,
      agentId,
      sessionId
    );
    console.info(sessionPath);

    // Send request:
    const request = {
      session: sessionPath,
      queryParams: {
        parameters: {
          fields: {
            firstName: {kind: 'stringValue', stringValue: 'John'},
            lastName: {kind: 'stringValue', stringValue: 'Doe'},
          },
        },
      },
      queryInput: {
        text: {
          text: query,
        },
        languageCode,
      },
    };
    const [response] = await client.detectIntent(request);
    console.log(`User Query: ${query}`);
    for (const message of response.queryResult.responseMessages) {
      if (message.text) {
        console.log(`Agent Response: ${message.text.text}`);
      }
    }
    if (response.queryResult.match.intent) {
      console.log(
        `Matched Intent: ${response.queryResult.match.intent.displayName}`
      );
    }
    console.log(
      `Current Page: ${response.queryResult.currentPage.displayName}`
    );

    // Unmarshal the saved state:
    const sessionStateDict = marshalSession(response);
    const currentPage = sessionStateDict['currentPage'];
    const parameters = sessionStateDict['parameters'];

    const queryParams = {
      curentPage: currentPage,
      parameters: parameters,
    };

    const secondSessionId = uuid.v4().toString;
    const secondRequest = {
      session: client.projectLocationAgentSessionPath(
        projectId,
        location,
        agentId,
        secondSessionId
      ),
      queryInput: {
        text: {
          text: 'Hello 60 minutes later!',
        },
        languageCode: 'en-US',
      },
      queryParams: queryParams,
    };

    const [secondResponse] = await client.detectIntent(secondRequest);
    console.log(` Revived Session Parameters:
      ${JSON.stringify(secondResponse.queryResult.parameters)}`);
    console.log(` Revived Session Query Text:
      ${JSON.stringify(secondResponse.queryResult.text)}`);
  }

  revivePreviousSessionState();
  // [END dialogflow_revive_previous_session_state_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
