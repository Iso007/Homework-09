// array of questions for user
const fs = require(`fs`);
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
Title, Description, TableOfContent, 
Installation, Usage, License, 
Contributing, Test, Questions
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
    try {
        const response = await promptUser();

        const readDMe = generateMarkdown(response);

        await fs.writeFileSync(`README.md`, readMe);
        console.log(`Success!`);
    }catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();