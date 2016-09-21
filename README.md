# Minimal skeleton Karma, Jasmine   
This will be be project on and on accumulation. I will try to add more cases and see how it will be

## Setup
After npm init project or on existing project

* install karma `npm install karma –save-dev`
* install dependencies `npm install jasmine-core karma-jasmine karma-chrome-launcher -save-dev`
* we also need cli `npm install –g karma-cli`
* run command to init karma config `karma init` then we can fill in the rest of config


## Run

* simple cli `karma start` in watch mode 
* put in script inside package.json

```
      ...
      "scripts": {
        "test": "karma start --singleRun",
        "watch:test": "karma start"
      },
      ...
```
  