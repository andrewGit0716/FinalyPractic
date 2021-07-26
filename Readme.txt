    //UI Auto tests
    How to run

Create new project direcktory with comand '$ mkdir' and pull the file 'PBmainPage.spec.js'

Do comand on terminal '$ npm init -y' for add 'packaje.json' file

installing Cypress by using comand '$ npm cypress install --save-dev'

Check your cypress version in 'packaje.json' file or do comand '$ npm cypress -v'

Run comand '$ ./node_modules/.bin/cypress verify' or 'npx cypress verify' on terminal to check ability runing cypress of
terminal by comand '$ ./node_modules/.bin/cypress open' or 'npx cypress run'

Base url for autotesting: 'https://next.privat24.ua/'



    //API Auto tests

Create new project direcktory with comand '$ mkdir' and pull the file 'API_collection.postman_collection.json'

Import the file into your workspace in 'Postman'. Create new enviroment with next parameters

VARIABLE = 'id'
CURRENT VALUE = '761'

installing Newman and check your newman version do comand '$ newman --version'

Run API collection with comand '$ newman run API_collection.postman_collection.json'

Base url for API autotesting: 'https://reqres.in/'
