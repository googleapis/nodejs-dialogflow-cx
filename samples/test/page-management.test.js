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
const {describe, before, it, after} = require('mocha');
const uuid = require('uuid');
const execSync = require('child_process').execSync;
const exec = cmd => execSync(cmd, {encoding: 'utf8'});

describe('should test page management functions', () => {
  const location = "global"
  const projectId = process.env.GCLOUD_PROJECT;
  const flowId = "00000000-0000-0000-0000-000000000000"
  let pageName = ``
  let pageID = ""
  let agentID = "4e2cb784-012c-48b2-9d8c-a877d3be3437"

  before('get page name',async() =>{
    pageName = `temp_page_${uuid.v4()}`
  })
  
  it('should create a page', async () => {
    const cmd = 'node create-page.js';
    const output = exec(`${cmd} ${projectId} ${agentID} ${flowId} ${location} ${pageName}`);
    assert.include(output,pageName)
  });

  it('should list pages', async () => {
    const cmd = 'node list-page.js';
    const output = exec(`${cmd} ${projectId} ${agentID} ${flowId} global`);
    assert.include(output,pageName)
  });

  it('should delete a page', async () => {
    const {PagesClient, protos} = require('@google-cloud/dialogflow-cx');
    const pagesClient = new PagesClient();
    const listPageRequest =
      new protos.google.cloud.dialogflow.cx.v3.ListPagesRequest();

    listPageRequest.parent =
      'projects/' +
      projectId +
      '/locations/' +
      location +
      '/agents/' +
      agentID +
      '/flows/' +
      flowId;
    listPageRequest.languageCode = 'en';

    const response = await pagesClient.listPages(listPageRequest);

    for(var i = 0; i < response.length; i++){
        if(response[i].displayName == pageName){
          pageID = response[i].name.split("/")[9]
        }
    }

    const cmd = 'node delete-page.js';
    const output = exec(`${cmd} ${projectId} ${agentID} 00000000-0000-0000-0000-000000000000 ${pageID} global`);
    assert.equal(len(output),0)
  });

});
