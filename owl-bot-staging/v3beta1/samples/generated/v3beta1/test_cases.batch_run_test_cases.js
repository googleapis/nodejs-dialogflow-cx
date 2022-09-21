// Copyright 2022 Google LLC
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
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, testCases) {
  // [START dialogflow_v3beta1_generated_TestCases_BatchRunTestCases_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Agent name. Format: `projects/<Project ID>/locations/<Location ID>/agents/
   *  <AgentID>`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. If not set, draft environment is assumed. Format: `projects/<Project
   *  ID>/locations/<Location ID>/agents/<Agent ID>/environments/<Environment
   *  ID>`.
   */
  // const environment = 'abc123'
  /**
   *  Required. Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/testCases/<TestCase ID>`.
   */
  // const testCases = 'abc123'

  // Imports the Cx library
  const {TestCasesClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new TestCasesClient();

  async function callBatchRunTestCases() {
    // Construct request
    const request = {
      parent,
      testCases,
    };

    // Run request
    const [operation] = await cxClient.batchRunTestCases(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBatchRunTestCases();
  // [END dialogflow_v3beta1_generated_TestCases_BatchRunTestCases_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
