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

function main(name) {
  // [START dialogflow_v3beta1_generated_TransitionRouteGroups_DeleteTransitionRouteGroup_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the [TransitionRouteGroup][google.cloud.dialogflow.cx.v3beta1.TransitionRouteGroup] to delete.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/flows/<Flow ID>/transitionRouteGroups/<Transition Route Group ID>`.
   */
  // const name = 'abc123'
  /**
   *  This field has no effect for transition route group that no page is using.
   *  If the transition route group is referenced by any page:
   *  *  If `force` is set to false, an error will be returned with message
   *     indicating pages that reference the transition route group.
   *  *  If `force` is set to true, Dialogflow will remove the transition route
   *     group, as well as any reference to it.
   */
  // const force = true

  // Imports the Cx library
  const {TransitionRouteGroupsClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new TransitionRouteGroupsClient();

  async function deleteTransitionRouteGroup() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await cxClient.deleteTransitionRouteGroup(request);
    console.log(response);
  }

  deleteTransitionRouteGroup();
  // [END dialogflow_v3beta1_generated_TransitionRouteGroups_DeleteTransitionRouteGroup_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
