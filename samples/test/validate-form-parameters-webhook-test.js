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

const {assert} = require('chai');
const {describe, it} = require('mocha');
const execSync = require('child_process').execSync;
const exec = cmd => execSync(cmd, {encoding: 'utf8'});

describe('validate parameter', async () => {
  const cmd = 'node validate-form-parameters-webhook.js';

  it('should validate form parameter', async () => {
    const country = 'France';
    const projectId = process.env.GCLOUD_PROJECT;
    const agent = process.env.AGENT;

    const output = exec(`${cmd} ${country} ${projectId} ${agent}`);
    console.log('valid-output', output);
    assert.include(output, 'VALID');
  });

  it('should invalidate form parameter', async () => {
    const country = 'Candyland';
    const projectId = process.env.GCLOUD_PROJECT;
    const agent = process.env.AGENT;

    const output = exec(`${cmd} ${country} ${projectId} ${agent}`);
    console.log('invalid-output', output);
    assert.include(output, 'INVALID');
  });
});
