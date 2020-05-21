
import {Router} from 'express';
import * as grammar from '../grammar/grammar';
import * as bodyParser from "body-parser";
import * as Node from '../tree/Node';

class IndexRoutes{


    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{

        this.router.get('/', (req,res)=>{
            res.send('Hello');
        });
        this.router.post('/analizador', (req, res)=>{
            var entrada=req.body.text;
            var resultado=parser(entrada);
            var json = JSON.stringify(resultado,null,2);
            json = json.split('lexema').join('text').split('lstNodo').join('children');
            console.log(json)
            this.tree(resultado)
            res.send(json);

        });
    }

    tree(temporal:Node.Nodo):void{
        if (temporal!=null) {
            if (temporal.lstNodo!=null && temporal.lstNodo.length>0) {
                for (let index = 0; index < temporal.lstNodo.length; index++) {
                        console.log(temporal.lexema+" -> "+temporal.lstNodo[index].lexema)
                    
                    this.tree(temporal.lstNodo[index])
                }
            }
        }
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;