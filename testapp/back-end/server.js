import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import Schema from './Schema.js';
import Cors from 'cors';


const app = express();

app.use(express.json());
app.use(Cors());

app.use('/books',graphqlHTTP({
    schema:Schema,
    graphiql:true,
}));

app.listen(4000, () => {
    console.log("Running on Port 4000")
});