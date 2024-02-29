import { IClient } from "../model/interface";

var pg = require ('pg')

const client: IClient = new pg.Client({
  host: 'localhost',
  port: 5432,
  database: 'report',
  user: 'postgres',
  password: '12345',
})

async function init(){
    await client.connect();
}

module.exports.client = client;
module.exports.initClient = init;