const inquirer = require('inquirer');

const questions = () => {
    return inquirer.prompt([
        // basic questions
        {
            type: 'input',
            name: 'title',
            message: "What is your project's title?",
        },
        {
            type: 'input',
            name: 'description',
            message: "What is your project's description?",
        },
        {
            type: 'input',
            name: 'install',
            message: "Enter your project's install instructions.",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Enter your project's usage information.",
        },
        {
            type: 'input',
            name: 'contribution',
            message: "Enter your project's contribution guidelines.",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Enter your project's test guidelines.",
        },
        {
            type: 'input',
            name: 'credits',
            message: "Enter your project's credits.",
        },
        // license badges
        {
            type: 'list',
            name: 'licenses',
            message: 'What license do you want to use?',
            choices: ['Apache 2.0', 'GNU GPL v3', 'MIT']
            // https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
          },

        // questions section
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?",
        },
        {
            type: 'input',
            name: 'fullName',
            message: "What is your full name?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your github username?",
        },

    ]);
};

module.exports = questions;