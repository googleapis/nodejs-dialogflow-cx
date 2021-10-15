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

async function main(projectId, intentId, location, agentid) {
  console.log('Its working...');
  // [START dialogflow_list_training_phrases]
  const {IntentsClient} = require('@google-cloud/dialogflow-cx');

  // Create the intents client
  const intentClient = new IntentsClient();

  // Specify working intent
  const intentName = intentClient.intentPath(
    projectId,
    location,
    agentid,
    intentId
  );

  // Compose the get-intent request
  const getIntentRequest = {
    name: intentName,
    intentView: 'INTENT_VIEW_FULL',
  };

  const intent = await intentClient.getIntent(getIntentRequest);

  console.log(intent[0].trainingPhrases[0].parts[0].text);
  // [END dialogflow_list_training_phrases]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
