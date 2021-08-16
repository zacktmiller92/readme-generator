const moment = require('moment');
const currentYear = moment().format('YYYY');
const dedent = require('dedent');

const generateLicense = (data) => {
  let licenseOption = {
    'Apache 2.0' : {
      link : 'http://www.apache.org/licenses/LICENSE-2.0',
      badge : `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)`,
      notice: function() {
        return `
        ## License


        Copyright ${currentYear} ${data.fullName}

        ${this.badge}

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
    
        ${this.link}
    
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`
      },
    },
    'GNU GPL v3' : {
      link: 'https://www.gnu.org/licenses/gpl-3.0',
      badge : `[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
      notice: function () {
        return `
        ## License


        Copyright (C) ${currentYear}  ${data.fullName}

        ${this.badge}
    
        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see ${this.link}
        `
      },
    },
    'MIT' : {
      link: 'https://opensource.org/licenses/MIT',
      badge : `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
      notice: function () {
        return `
        ## License 


        Copyright ${currentYear}  ${data.fullName}

        ${this.badge}

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

        ${this.link}
        `
      },
    },
    'None' : {
      notice: function () {
        return `
        ## License

        This codebase is not licensed.
        `
      },
    },
  };
  return licenseOption[data.licenses].notice();
};



function generateMarkdown(data) {

  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table Of Contents
  * [Install Instructions](#Install-Instructions)
  * [Usage Instructions](#Usage-Instructions)
  * [How To Contribute](#How-To-Contribute)
  * [Test Guidelines](#Test-Guidelines)
  * [Credits](#Credits)
  * [Questions](#Questions)
  * [License](#License)

  ## Install Instructions
  ${data.install}


  ## Usage Instructions
  ${data.usage}


  ## How To Contribute
  ${data.contribution}


  ## Test Guidelines
  ${data.tests}


  ## Credits
  ${data.credits}


  ## Questions
  For questions please contact ${data.fullName}:
  https://www.github.com/${data.github}

  email: ${data.email}


  ${dedent(generateLicense(data))}
`;
}

module.exports = generateMarkdown;
