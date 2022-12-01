import {roll} from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const app = express();
app.use(express.json());
const args = minimist(process.argv.slice(2));

let port = 5000;

if(args.port){
    port = args.port;
}

function main(){
    let sides;
    let dice;
    let rolls;

    app.get('/', (req, res) => {
        res.status(404).send('404 NOT FOUND\n');
    });

    app.get('/app', (req, res) => {
        res.status(200).send('200 OK\n');
    });

    app.get('/app/roll', (req, res) => {
        res.status(200).json(req.query);
    });
   
    app.post('/app/roll', (req, res) => {
        console.log(req);
        res.status(200).send(req.body);
    });
    app.get('/app/roll/:sides/:dice?/:rolls?/', (req, res) => {
        sides = req.params.sides;
        if(req.params.dice){
            dice = req.params.dice;
        }else{
            dice = 2;
        }
        if(req.params.rolls){
            rolls = req.params.rolls;
        }else{
            rolls = 1;
        }
        res.status(200).json(roll(sides, dice, rolls)); 
    });

    app.listen(port, () => {
        console.log('Roll app listening on port ' + port);
    });
}

main();
