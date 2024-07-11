#!/bin/bash

# Navigate to frontend and build
cd frontend
yarn install
yarn build

# Navigate to backend and build
cd ../backend
yarn install
yarn build