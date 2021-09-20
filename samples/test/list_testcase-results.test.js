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
const execSync = require('child_process').execSync;
const exec = cmd => execSync(cmd, {encoding: 'utf8'});
const dialogflow = require('@google-cloud/dialogflow-cx');

describe('Test filtering results', async () => {
  const cmd = 'node list-testcase-results.js';
  const agentId = 'be66a5a2-4602-4f8c-a3f3-046896904362';
  const testId = '9ebddb66-c49e-455b-bacc-24c0538ece01';
  const agentClient = new dialogflow.AgentsClient();
  const projectId = await agentClient.getProjectId();

  it('should return filtered test results', async () => {
    const output = exec(`${cmd} ${projectId} ${agentId} ${testId} ${location}`);
    assert.include(output, testId);
  });
});
