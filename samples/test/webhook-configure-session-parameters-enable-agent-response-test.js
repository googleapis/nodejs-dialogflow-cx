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

'use strict';

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

const {assert} = require('chai');
const {describe, it} = require('mocha');
const webhook = require('../webhook-configure-session-parameters-enable-agent-response');

describe('enable agent response', () => {
  it('should add orderNumber session parameter', async () => {
    const request = {
      body: {
        fulfillmentInfo: {
          tag: 'webhook-configure-session-parameters-enable-agent-response',
        },
      },
    };
    const temp = JSON.stringify(request);
    let response = '';

    const res = {
      send: function (s) {
        response = JSON.stringify(s);
      },
    };

    webhook.enableAgentResponse(JSON.parse(temp), res);
    assert.include(response, 'orderNumber');
  });
});
