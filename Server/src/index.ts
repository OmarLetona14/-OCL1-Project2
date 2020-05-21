import express, {Application} from 'express';
import * as cors from "cors";
import * as bodyParser from "body-parser";
import indexRoutes from './routes/indexRoutes';
class Server{
    public app:Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.port || 3000);
        this.app.use(bodyParser.json());
        this.app.use(cors.default);
        this.app.use(bodyParser.urlencoded({ extended: true }));
        //var logger = require('morgan');
        //this.app.use(logger( 'dev'));

    }
    routes():void{
        this.app.use(indexRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server listening');
        });

    }

}

const server = new Server();
server.start();
