//require both fs and inquirer
const fs = require('fs')
const inquirer = require('inquirer');

//inquirer asks the questions to the terminal user
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
            choices: ['public domain', 'Apache', 'BSD', 'MIT', 'no licence'],
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
    //once all of the data has been collected from the user, use it to create the readme
    .then((data) => {
        //empty variables to allow for the different licence options
        let licencing = ""
        let licenseBadge = ""
        let copywrite = ""

        //a switch statement that selects the proper licence based on the user input
        switch (data.license) {
            case 'public domain':
                licencing = `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.
                
In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.
                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
                
For more information, please refer to [http://unlicense.org/](http://unlicense.org/)`

                licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`

                break;
            case 'Apache':
                licencing = `Copyright 2021 ${data.githubUser}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
             
http://www.apache.org/licenses/LICENSE-2.0
             
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`

                licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
                copywrite = `© 2021 ${data.githubUser}. Confidential and Proprietary. All Rights Reserved.`

                break;
            case 'BSD':
                licencing = `Copyright 2021 ${data.githubUser}

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
                
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
                
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
                
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
                
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`

                licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
                copywrite = `© 2021 ${data.githubUser}. Confidential and Proprietary. All Rights Reserved.`

                break;
            case 'MIT':
                licencing = `Copyright 2021 ${data.githubUser}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`

                licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
                copywrite = `© 2021 ${data.githubUser}. Confidential and Proprietary. All Rights Reserved.`

                break;
            case 'no licence':
                licencing = `Copyright 2021 ${data.githubUser}
I am not offering any license for this product. This work is under exclusive copyright. No copy, distribution, or modification is allowed.`
                licenseBadge = `[![License: MIT](https://img.shields.io/badge/NoLicense-None-red.svg)]`
                copywrite = `© 2021 ${data.githubUser}. Confidential and Proprietary. All Rights Reserved.`
                break;

        }

        //This is the template for the readme. All user input is input using template literals
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


${copywrite}
`

        //then the file is written into the directory. Any existing readme file will be overwritten.
        fs.writeFile('./out/README.md', readmeTemplate, (err) =>
            err ? console.log(err) : console.log('Success!')
        );

    }
    );
