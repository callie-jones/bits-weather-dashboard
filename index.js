/**
Copyright 2017 LGS Innovations

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var path = require('path'),
    fs = require('fs'),
    filePath = path.join(__dirname, 'data.csv');


class ModuleApp {
  load(messageCenter) {
    console.log('Weather Dashboard!');
    fs.readFile(filePath, function(err, data)
        {
            if(err)
                console.log(err)
            else
                console.log(data.toString())
        });
  }

  unload() {
    console.log('Goodbye!');
  }
}

module.exports = new ModuleApp();
