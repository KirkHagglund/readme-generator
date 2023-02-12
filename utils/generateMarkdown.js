// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  console.log(license);
  if (license === 'MIT') {
    licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT';
  }
  else if (license === 'Apache-2.0') {
    licenseBadge = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0';
  }
  else if (license === 'GPL-3.0') {
    licenseBadge = 'https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0';
  }
  else if (license === 'BSD-2-Clause') {
    licenseBadge = 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause';
  }
  else { 
    licenseBadge = '';
}
console.log(licenseBadge + 'test');
return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  return `This project is protected by a standard ${data.license} License.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges
  ![](${renderLicenseBadge(data.license)})

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
  ${renderLicenseSection(data)}
  
  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  [Github Account](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
