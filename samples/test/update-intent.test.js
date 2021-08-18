// Copyright 2021 Google LLC
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
const {describe, before, it, after} = require('mocha');
const DLP = require('@google-cloud/dlp');
const execSync = require('child_process').execSync;
const uuid = require('uuid');
const dialogflow = require('@google-cloud/dialogflow-cx');
const exec = cmd => execSync(cmd, {encoding: 'utf8'});
const dlpClient = new DLP.DlpServiceClient();
const projectId = await dlpClient.getProjectId();
const intentId = [];
const location = 'global';
let agentId = '';
let agentPath = '';

describe('update intent', () => {
  const intentClient = new dialogflow.IntentsClient();
  const agentClient = new dialogflow.AgentsClient();
  const displayName = `fake_display_name_${uuid.v4().split('-')[0]}`;
  const agentDisplayName = `temp_agent_${uuid.v4().split('-')[0]}`;
  const parent = 'projects/' + projectId + '/locations/' + location;

  before('get intent ID and agent ID', async () => {
    // The path to identify the agent that owns the intents.

    const agent = {
      displayName: agentDisplayName,
      defaultLanguageCode: 'en',
      timeZone: 'America/Los_Angeles',
    };

    const request = {
      agent,
      parent,
    };

    const [agentResponse] = await agentClient.createAgent(request);

    agentPath = agentResponse.name;
    agentId = agentPath.split('/')[5];

    const intentRequest = {
      parent: agentPath,
    };

    const [response] = await intentClient.listIntents(intentRequest);
    response.forEach(intent => {
      intentId.push(intent.name.split('/')[7]);
    });
  });

  after('delete Agent', async () => {
    agentClient.deleteAgent({name: agentPath});
  });

  it('should update an intent using fieldmasks', async () => {
    const output = exec(
      `node update-intent.js ${projectId} ${intentId[0]} ${agentId} ${location} ${displayName}`
    );
    assert.match(output, displayName);
  });
});
