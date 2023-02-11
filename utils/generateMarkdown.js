// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  /*let licenseBadge = '';
  if (data.license == 'MIT') {
    licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT';
  }
  if (data.license == 'Apache-2.0') {
    licenseBadge = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0';
  }
  if (data.license == 'GPL-3.0') {
    licenseBadge = 'https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0';
  }
  if (data.license == 'BSD-2-Clause') {
    licenseBadge = 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause';
  }
  else { 
    licenseBadge = '';
}*/
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges
  [![](${renderLicenseBadge(data.license)})]

  ## Description
  ${data.description}

  ## Table of Contents
  
  • Installation${'\n'}
  • Usage${'\n'}
  • License${'\n'}
  • Contributions${'\n'}
  • Tests${'\n'}
  • Questions

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  
  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
