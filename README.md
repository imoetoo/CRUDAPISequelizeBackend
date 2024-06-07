<<<<<<< HEAD
# CRUDRESTAPI
Implementation of the API in Typescript, using expressJS framework. Also used ORM Sequelize 

#Specifiations: Checkout Employee.yml file
=======
# CRUDAPISequelize
Rebuilding CRUDAPI, now connected to the backend using Sequelize and PostgreSQL
>>>>>>> 2510a1ab59393ec78a2141df9657fe64e973cb3b
>>>>>>>

How to Run the Backend:
- [ ] First, create a config folder, then input the config.json file inside
Copy and paste:
  "development": {
    "username": "postgres",
    "password": “your password”,
    "database": “your db name”,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
- [ ] Then, create your DB and perform migration using :
- [ ] npx sequelize-cli db:create
- [ ] npx sequelize-cli db:migrate
- [ ] Ensure the server runs in port 3000, while the front end server runs in port 3001.
