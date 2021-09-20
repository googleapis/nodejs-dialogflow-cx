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

async function main(project_id, agent_id, test_id, location) {
  const parent =
    'projects/' +
    project_id +
    '/locations/' +
    location +
    '/agents/' +
    agent_id +
    '/testCases/' +
    test_id;

  const {TestCasesClient, protos} = require('@google-cloud/dialogflow-cx');

  const client = new TestCasesClient({
    apiEndpoint: 'global-dialogflow.googleapis.com',
  });
  const req =
    new protos.google.cloud.dialogflow.cx.v3.ListTestCaseResultsRequest();

  req.parent = parent;
  req.filter = 'environment=draft';

  const res = await client.listTestCaseResults(req);

  console.log(res);
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
