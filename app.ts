//install express framework, using npm install --save express body-parser
//install express
//also install types for both node and express using npm install --save-dev @types/node, npm install --save-dev @types/express
// install TS and node dev, to run TS files without compling to JS first. npm install ts-node-dev typescript --save-dev
// npm install joi for testing

/* PART II
npm install --save sequelize
npm install --save pg pg-hstore (for postgres SQL)
npm install -g sequelize-cli   (for sequelize command line interface)
sequelize init
*/
import express, {Request, Response, NextFunction} from 'express'; //the first express allows you to create an instance of the express application
import Routes from './src/router/employeerouter';

const PORT = 3000;
const app = express();
app.use(express.json());

app.use('/api', Routes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
