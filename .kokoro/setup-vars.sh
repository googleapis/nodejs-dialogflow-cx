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

export AGENT_ID="be66a5a2-4602-4f8c-a3f3-046896904362"
export TEST_ID="9ebddb66-c49e-455b-bacc-24c0538ece01"

export TRAINING_PHRASE_AGENT_ID="5d23f659-cd71-43e9-8fb2-b69cd9896370"
export TRAINING_PHRASE_INTENT_ID="04e47c8c-69d9-4208-8262-67fc2069a283"

trap EXIT
