// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

async function main(projectId, intentId, agentId, location, displayName) {
  // [START dialogflow_cx_update_intent]

  //await updateIntent("valiant-marker-319718","8dcfc58a-7fc3-4469-ae60-77402e98c933","a02e8272-a62d-4bf5-b235-b365ce4c4137","global","testFieldMask");
  const {IntentsClient} = require('@google-cloud/dialogflow-cx');

  const intentClient = new IntentsClient();

  const agentPath = intentClient.projectPath(projectId);
  const intentPath =
    agentPath +
    '/locations/' +
    location +
    '/agents/' +
    agentId +
    '/intents/' +
    intentId;

  const intent = await intentClient.getIntent({name: intentPath});
  intent[0].displayName = displayName;
  const updateMask = {
    paths: ['display_name'],
  };

  const updateIntentRequest = {
    intent: intent[0],
    updateMask: updateMask,
    languageCode: 'en',
  };

  //Send the request for update the intent.
  const result = await intentClient.updateIntent(updateIntentRequest);
  console.log(result);
  // [END dialogflow_cx_update_intent]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
