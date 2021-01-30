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
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import {AgentsClient, EntityTypesClient, EnvironmentsClient, ExperimentsClient, FlowsClient, IntentsClient, PagesClient, SecuritySettingsServiceClient, SessionEntityTypesClient, SessionsClient, TransitionRouteGroupsClient, VersionsClient, WebhooksClient} from '@google-cloud/dialogflow-cx';

// check that the client class type name can be used
function doStuffWithAgentsClient(client: AgentsClient) {
  client.close();
}
function doStuffWithEntityTypesClient(client: EntityTypesClient) {
  client.close();
}
function doStuffWithEnvironmentsClient(client: EnvironmentsClient) {
  client.close();
}
function doStuffWithExperimentsClient(client: ExperimentsClient) {
  client.close();
}
function doStuffWithFlowsClient(client: FlowsClient) {
  client.close();
}
function doStuffWithIntentsClient(client: IntentsClient) {
  client.close();
}
function doStuffWithPagesClient(client: PagesClient) {
  client.close();
}
function doStuffWithSecuritySettingsServiceClient(client: SecuritySettingsServiceClient) {
  client.close();
}
function doStuffWithSessionEntityTypesClient(client: SessionEntityTypesClient) {
  client.close();
}
function doStuffWithSessionsClient(client: SessionsClient) {
  client.close();
}
function doStuffWithTransitionRouteGroupsClient(client: TransitionRouteGroupsClient) {
  client.close();
}
function doStuffWithVersionsClient(client: VersionsClient) {
  client.close();
}
function doStuffWithWebhooksClient(client: WebhooksClient) {
  client.close();
}

function main() {
  // check that the client instance can be created
  const agentsClient = new AgentsClient();
  doStuffWithAgentsClient(agentsClient);
  // check that the client instance can be created
  const entityTypesClient = new EntityTypesClient();
  doStuffWithEntityTypesClient(entityTypesClient);
  // check that the client instance can be created
  const environmentsClient = new EnvironmentsClient();
  doStuffWithEnvironmentsClient(environmentsClient);
  // check that the client instance can be created
  const experimentsClient = new ExperimentsClient();
  doStuffWithExperimentsClient(experimentsClient);
  // check that the client instance can be created
  const flowsClient = new FlowsClient();
  doStuffWithFlowsClient(flowsClient);
  // check that the client instance can be created
  const intentsClient = new IntentsClient();
  doStuffWithIntentsClient(intentsClient);
  // check that the client instance can be created
  const pagesClient = new PagesClient();
  doStuffWithPagesClient(pagesClient);
  // check that the client instance can be created
  const securitySettingsServiceClient = new SecuritySettingsServiceClient();
  doStuffWithSecuritySettingsServiceClient(securitySettingsServiceClient);
  // check that the client instance can be created
  const sessionEntityTypesClient = new SessionEntityTypesClient();
  doStuffWithSessionEntityTypesClient(sessionEntityTypesClient);
  // check that the client instance can be created
  const sessionsClient = new SessionsClient();
  doStuffWithSessionsClient(sessionsClient);
  // check that the client instance can be created
  const transitionRouteGroupsClient = new TransitionRouteGroupsClient();
  doStuffWithTransitionRouteGroupsClient(transitionRouteGroupsClient);
  // check that the client instance can be created
  const versionsClient = new VersionsClient();
  doStuffWithVersionsClient(versionsClient);
  // check that the client instance can be created
  const webhooksClient = new WebhooksClient();
  doStuffWithWebhooksClient(webhooksClient);
}

main();
