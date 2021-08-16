const questions = require('./utils/questions.js')
const generateMarkdown = require('./utils/generateMarkdown.js')
const writeToFile = require('./utils/writeToFile.js')


function init() {
    questions()
    .then(questions => {
        return generateMarkdown(questions);
    })
    .then(markdown => {
        return writeToFile('readme.md', markdown);
    })
};

// Function call to initialize app
init();
