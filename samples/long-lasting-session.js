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

const cx = require('@google-cloud/dialogflow-cx');

function main() {
  const uuid = require('uuid');

  const sessionsClient = new cx.SessionsClient();
  const flowsClient = new cx.FlowsClient();

  const projectId = 'python-docs-samples-tests';
  const location = 'global';
  const agentId = 'c253b3a4-48a8-46a9-97ef-f08db93f4777';

  // Create Dialogflow clients:
  // const clientOptions = {
  //   apiEndpoint: 'global-dialogflow.googleapis.com',
  // };

  // const agent_name = 'c253b3a4-48a8-46a9-97ef-f08db93f4777';

  // Create a function that can marshal the current session state to JSON:
  function marshalSession(responses) {
    const sessionRestartData = {
      currentPage: responses.queryResult.currentPage.name,
      parameters: responses.queryResult.parameters,
    };
    // console.log( `Restart Data: ${JSON.stringify(sessionRestartData.parameters)}`);
    return sessionRestartData;
  }

  // Marshal the current state:
  // let sessionId = uuid.v4();

  async function callDetectIntent() {
    const sessionId = uuid.v4();
    const sessionPath = sessionsClient.projectLocationAgentSessionPath(
      projectId,
      location,
      agentId,
      sessionId
    );

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
          text: 'Hello!',
        },
        languageCode: 'en',
      },
    };

    const [responses] = await sessionsClient.detectIntent(request);
    console.log('Detected Intent');

    const sessionStateDict = marshalSession(responses);

    // Unmarshal the saved state:
    const currentPage = sessionStateDict['currentPage'];
    const parameters = sessionStateDict['parameters'];

    const queryParams = {
      current_page: currentPage,
      parameters: parameters,
    };

    const secondSessionId = uuid.v4().toString;
    const secondRequest = {
      session: sessionsClient.projectLocationAgentSessionPath(
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

    const [secondResponses] = await sessionsClient.detectIntent(secondRequest);
    console.log(secondResponses);
  }

  callDetectIntent();
  // [END dialogflow_v3beta1_generated_Sessions_DetectIntent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
