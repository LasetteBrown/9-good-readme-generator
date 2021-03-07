// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const fs = require('fs')
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
        },
        {
            type: 'password',
            message: 'What is your password?',
            name: 'password',
        },
        {
            type: 'password',
            message: 'Re-enter password to confirm:',
            name: 'confirm',
        },
    ])
    .then((data) => {
        const readmeTemplate = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="style.css" rel="stylesheet" type="text/css">
    
    
        <title>${data.title}</title>
    </head>
    
    <body>
    
        <header>
            <h1 class="center">${data.title}</h1>
        </header>
        <main class="main">
            <section class="about-info">
                <h3>About ${data.name}</h3>
                <p> ${data.description}
                </p>
            </section>
            <section class="card float-left">
            <iframe width="560" height="315" src="${data.projectLink}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
    
            <section class="card float-left">
                <a href="${data.projectLink}" target="blank"
                    class="a-button">See my Project Here</a>
            </section>
        </main>
        <script type="text/javascript" src="index.js"></script>
    
    </body>
    
    </html>`

        // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile('README.md', readmeTemplate, (err) =>
            err ? console.log(err) : console.log('Success!')
        );

    }
    );
