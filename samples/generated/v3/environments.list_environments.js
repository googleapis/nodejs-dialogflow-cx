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

function main(parent) {
  // [START dialogflow_v3_generated_Environments_ListEnvironments_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The [Agent][google.cloud.dialogflow.cx.v3.Agent] to list all environments for.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of items to return in a single page. By default 20 and
   *  at most 100.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value returned from a previous list request.
   */
  // const pageToken = 'abc123'

  // Imports the Cx library
  const {EnvironmentsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new EnvironmentsClient();

  async function listEnvironments() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await cxClient.listEnvironmentsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listEnvironments();
  // [END dialogflow_v3_generated_Environments_ListEnvironments_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));