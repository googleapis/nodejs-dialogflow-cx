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

function main(version, updateMask) {
  // [START cx_v3beta1_generated_Versions_UpdateVersion_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The version to update.
   */
  // const version = ''
  /**
   *  Required. The mask to control which fields get updated. Currently only `description`
   *  and `display_name` can be updated.
   */
  // const updateMask = ''

  // Imports the Cx library
  const {VersionsClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new VersionsClient();

  async function updateVersion() {
    // Construct request
    const request = {
      version,
      updateMask,
    };

    // Run request
    const response = await cxClient.updateVersion(request);
    console.log(response);
  }

  updateVersion();
  // [END cx_v3beta1_generated_Versions_UpdateVersion_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
