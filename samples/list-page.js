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

const {PagesClient, protos} = require('@google-cloud/dialogflow-cx');


async function main(projectId, agentId, flowId, location)  {
    /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'my-project';
  // const agentId = 'my-agent';
  // const flowId = 'my-flow';
  // const location = 'global';

  // [START dialogflow_cx_list_page_sample]
  async function listPages(project_id, agent_id, flow_id, location) {
    const pagesClient = new PagesClient();
    const listPageRequest =
      new protos.google.cloud.dialogflow.cx.v3.ListPagesRequest();

    listPageRequest.parent =
      'projects/' +
      project_id +
      '/locations/' +
      location +
      '/agents/' +
      agent_id +
      '/flows/' +
      flow_id;
    listPageRequest.languageCode = 'en';

    const response = await pagesClient.listPages(listPageRequest);
    console.log(response);
  }
  // [END dialogflow_cx_list_page_sample]

  await listPages(
    projectId,
    agentId,
    flowId,
    location
  );
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exitCode = 1;
});

main(...process.argv.slice(2));