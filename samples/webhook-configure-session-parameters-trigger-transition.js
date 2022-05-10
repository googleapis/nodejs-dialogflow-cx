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

/**
 * Configures a webhook to trigger a page transition. This is a simple example.
 */

// [START dialogflow_cx_v3_webhook_configure_session_parameters_trigger_transition]

exports.triggerTransition = (request, response) => {
  // The target page to which to transition
  const targetPage = request.body.targetPage; // Must be format projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>

  // The value of the parameter used to trigger transition
  const orderNumber = 123;

  const jsonResponse = {
    target_page: targetPage,
    // Sets value of the session parameter
    session_info: {
      parameters: {
        orderNumber: orderNumber,
      },
    },
  };

  response.send(jsonResponse);
};
// [END dialogflow_cx_v3_webhook_configure_session_parameters_trigger_transition]
