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
  // [START dialogflow_v3beta1_generated_Changelogs_ListChangelogs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The agent containing the changelogs.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   */
  // const parent = 'abc123'
  /**
   *  The filter string. Supports filter by user_email, resource, type and
   *  create_time. Some examples:
   *    1. By user email:
   *         user_email = "someone@google.com"
   *    2. By resource name:
   *         resource = "projects/123/locations/global/agents/456/flows/789"
   *    3. By resource display name:
   *         display_name = "my agent"
   *    4. By action:
   *         action = "Create"
   *    5. By type:
   *         type = "flows"
   *    6. By create time. Currently predicates on `create_time` and
   *       `create_time_epoch_seconds` are supported:
   *         create_time_epoch_seconds > 1551790877 AND create_time <=
   *         2017-01-15T01:30:15.01Z
   *    7. Combination of above filters:
   *         resource = "projects/123/locations/global/agents/456/flows/789"
   *           AND user_email = "someone@google.com"
   *           AND create_time <= 2017-01-15T01:30:15.01Z
   */
  // const filter = 'abc123'
  /**
   *  The maximum number of items to return in a single page. By default 100 and
   *  at most 1000.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value returned from a previous list request.
   */
  // const pageToken = 'abc123'

  // Imports the Cx library
  const {ChangelogsClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new ChangelogsClient();

  async function listChangelogs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await cxClient.listChangelogsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listChangelogs();
  // [END dialogflow_v3beta1_generated_Changelogs_ListChangelogs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
