const inquirer = require(`inquirer`);
const fs = require(`fs`);
const util = require(`util`);

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt([
        {
            type: `input`,
            message: `What is your github username? `,
            name: `username`
        },
        {
            type: `input`,
            message: `What is your email address? `,
            name: `email`
        },
        {
            type: `input`,
            message: `What is is your projects's name? `,
            name: `title`
        },
        {
            type: `input`,
            message: `Please write a short description of your project `,
            name: `description`
        },
        {
            type: `input`,
            message: `What kind of license should your project have? `,
            choices: [
                `MIT`,
                `APACHE 2.0`,
                `GPL 3.0`,
                `BSD 3`,
                `None`
            ],
            name: `license`
        },
        {
            type: `input`,
            message: `what command should be run to install dependencies? `,
            name: `contribution`
        },
        {
            type: `input`,
            message: `what command should be run to run tests? `,
            name: `tests`
        },
        {
            type: `input`,
            message: `What does the user need to know about using the repo? `,
            name: `questions`
        },
        {
            type: `input`,
            message: `What does the user need to know about contributing to the repo? `,
            name: `questions`
        },
    ])
}