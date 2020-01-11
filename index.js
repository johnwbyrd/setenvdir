const core = require('@actions/core');
const github = require('@actions/github');

try {
  const inputPath = core.getInput('path');
  outputPath = inputPath;
  outputPath = str.replace(/\\/g, inputPath);
  core.setOutput('path', outputPath);
  core.exportVariable('CMAKE_INSTALL_DIR', outputPath.concat('/install');
} catch (error) {
  core.setFailed(error.message);
}