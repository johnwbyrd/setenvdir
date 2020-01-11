const core = require('@actions/core');
const github = require('@actions/github');

try {
  const inputPath = core.getInput('path');
  outputPath = inputPath.replace(/\\/g, '/');
  core.setOutput('path', outputPath);
  installdir = outputPath.concat('/install');
  console.log(`CMAKE_INSTALL_DIR is about to be: ${installdir}`);
  core.exportVariable('CMAKE_INSTALL_DIR', outputPath.concat('/install'));
} catch (error) {
  core.setFailed(error.message);
}
