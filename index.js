const core = require('@actions/core');
const github = require('@actions/github');

try {
  const inputPath = core.getInput('path');
  outputPath = inputPath.replace(/\\/g, '/');
  core.setOutput('path', outputPath);
  console.log(outputPath);
} catch (error) {
  core.setFailed(error.message);
}