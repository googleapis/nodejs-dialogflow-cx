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
const uuid = require('uuid');
const execSync = require('child_process').execSync;
const exec = cmd => execSync(cmd, {encoding: 'utf8'});

describe('should test page management functions', () => {
  const pageName = `temp_page_${uuid.v4().split('-')[0]}`;
  const projectId = process.env.GCLOUD_PROJECT;
  let pageID = ""
  let agentID = ""

  it('should create agent', async () => {
    const cmd = 'node create-agent.js';
    const agentName = `temp_agent_${uuid.v4().split('-')[0]}`;
    const output = exec(`${cmd} ${projectId} ${agentName}`);
    const response = JSON.stringify(output)
    assert.equal(response, "")
  });

  
  it('should create a page', async () => {
    const cmd = 'node create-page.js';
    const flowId = "00000000-0000-0000-0000-000000000000"
    const location = "global"
    const output = exec(`${cmd} ${projectId} ${agentID} ${flowId} ${location} ${pageName}`);
    const response = JSON.stringify(output)
    pageID = response["name"].split("/")[9]
    assert.include(output,pageName)
  });

  // it('should list pages', async () => {
  //   const cmd = 'node list.js';
  //   const output = exec(`${cmd} ${projectId} ${agentID} 00000000-0000-0000-0000-000000000000 global`);
  //   assert.include(output,pageName)
  // });

  // it('should delete a page', async () => {
  //   const cmd = 'node delete.js';
  //   const output = exec(`${cmd} ${projectId} ${agentID} 00000000-0000-0000-0000-000000000000 ${pageID} global`);
  //   assert.equal(len(output),0)
  //});
});
