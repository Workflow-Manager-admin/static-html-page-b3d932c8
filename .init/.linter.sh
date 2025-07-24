#!/bin/bash
cd /home/kavia/workspace/code-generation/static-html-page-b3d932c8/frontend_react_js
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

