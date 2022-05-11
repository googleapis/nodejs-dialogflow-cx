#!/bin/bash

# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# nodejs-storage's system tests require additional project and
# system test key

export AGENT_ID="b1808233-450b-4065-9492-bc9b40151641"
export TEST_ID="38b15996-92fc-4b42-bbd4-41742a394cb0"

export TRAINING_PHRASE_AGENT_ID="b1808233-450b-4065-9492-bc9b40151641"
export TRAINING_PHRASE_INTENT_ID="04e47c8c-69d9-4208-8262-67fc2069a283"

trap EXIT
