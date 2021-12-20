import express, { response } from 'express';
import { request } from 'http';

const app=express();

app.use(express.json());

app.get("/",(request,response)=> {
    response.status(201).json("Hello aadsdsddsasds")
})

app.listen(3333, ()=> console.log("Server is running on port 3333"));
