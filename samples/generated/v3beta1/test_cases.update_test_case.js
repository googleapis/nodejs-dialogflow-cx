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

function main(testCase, updateMask) {
  // [START dialogflow_v3beta1_generated_TestCases_UpdateTestCase_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The test case to update.
   */
  // const testCase = ''
  /**
   *  Required. The mask to specify which fields should be updated. The
   *  [`creationTime`][google.cloud.dialogflow.cx.v3beta1.TestCase.creation_time] and
   *  [`lastTestResult`][google.cloud.dialogflow.cx.v3beta1.TestCase.last_test_result] cannot be updated.
   */
  // const updateMask = ''

  // Imports the Cx library
  const {TestCasesClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new TestCasesClient();

  async function updateTestCase() {
    // Construct request
    const request = {
      testCase,
      updateMask,
    };

    // Run request
    const response = await cxClient.updateTestCase(request);
    console.log(response);
  }

  updateTestCase();
  // [END dialogflow_v3beta1_generated_TestCases_UpdateTestCase_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
