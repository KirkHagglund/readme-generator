// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your README title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Create a description.',
        name: 'description',
    },
    /*{
        type: 'checkbox',
        message: 'List your table of contents items.',
        name: 'contents',
        choices: ['Installation', 'Usage', 'License', 'Contributions', 'Tests', 'Questions']
    },*/
    {
        type: 'input',
        message: 'Add installation details.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Create usage section.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Pick your License',
        name: 'license',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause'],
    },
    {
        type: 'input',
        message: 'Lay out guidelines for future oustide contributions.',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'What are your testing details?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    process.chdir('newReadMe');
    return fs.writeFileSync(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else console.log('README Successfully Generated!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function(data) {
            writeToFile('README.md', generateMarkdown(data));
        });
};

// Function call to initialize app
init();

