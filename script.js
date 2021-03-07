// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

const fs = require('fs')
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project'
        },
        {
            type: 'checkbox',
            message: 'Which badges would you like to include?',
            name: 'badges',
            choices: ['HTML', 'CSS', 'JavaScript', 'node.js'],
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter information about the usage of your product'
        },
        {
            type: 'list',
            message: 'Which license would you like to use?',
            name: 'license',
            choices: ['public domain', 'Apache', 'BSD', 'MIT', 'LGPL', 'GPL', 'no licence'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter the contribution guidelines for your product'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions for your product'
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'What is your git hub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },

    ])
    .then((data) => {
        let licencing = ""
        let licenseBadge = ""

        switch (data.license) {
            case 'public domain':
                licencing = ""
                break;
            case 'Apache':
                licencing = ""
                break;
            case 'BSD':
                licencing = ""
                break;
            case 'MIT':
                licencing = ""
                break;
            case 'LGPL':
                licencing = ""
                break;
            case 'GPL':
                licencing = ""
                break;
            case 'no licence':
                licencing = `I am not offering any license for this product. This work is under exclusive copyright. No copy, distribution, or modification is allowed. \n © 2021 ${data.githubUser}. Confidential and Proprietary. All Rights Reserved.`
                licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
                break;

        }
        console.log(data.badges)

        const readmeTemplate = `# ${data.title}

## Description
        
${data.description}
        
## Table of Contents
        
* [Badges](#badges)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
        
## Badges
        
${licenseBadge}
        
        
## Installation
        
${data.installation}
        
## Usage
        
${data.usage}        
        
## License
        
${licencing}

## Contributing

${data.contributing}

## Tests
        
${data.tests}
        
## Questions

If you have any questions feel free to contact me. Reach out to me on github at[${data.githubUser}](https://github.com/${data.githubUser}) or email me at [${data.email}](mailto:${data.email})



`

        // const filename = `${ data.name.toLowerCase().split(' ').join('') }.json`;

        fs.writeFile('README.md', readmeTemplate, (err) =>
            err ? console.log(err) : console.log('Success!')
        );

    }
    );
