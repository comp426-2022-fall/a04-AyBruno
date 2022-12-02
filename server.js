import {roll} from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const args = minimist(process.argv.slice(2));

let port = 5000;

if(args.port){
    port = args.port;
}

function main(){
    let sides;
    let dice;
    let rolls;


    app.get('/app', (req, res) => {
        res.status(200).send('200 OK\n');
    });

    app.get('/app/roll', (req, res) => {
        sides = 6;
        dice = 2;
        rolls = 1;

        if(req.query.sides){
            sides = parseInt(req.query.sides);
        }
        if(req.query.dice){
            dice = parseInt(req.query.dice);
        }
        if(req.query.rolls){
            rolls = parseInt(req.query.rolls);
        }

        res.status(200).json(roll(sides, dice, rolls));
    });
   
    app.post('/app/roll/', (req, res) => {
        sides = 6;
        dice = 2;
        rolls = 1;
//        console.log(req.body);
        if(req.body.sides){
            sides = parseInt(req.body.sides);
        }
        if(req.body.dice){
            dice = parseInt(req.body.dice);
        }
        if(req.body.rolls){
            rolls = parseInt(req.body.rolls);
        }

        res.status(200).json(roll(sides, dice, rolls));
    });

    app.get('/app/roll/:sides/:dice?/:rolls?/', (req, res) => {
        sides = parseInt(req.params.sides);
        if(req.params.dice){
            dice = parseInt(req.params.dice);
        }else{
            dice = 2;
        }
        if(req.params.rolls){
            rolls = parseInt(req.params.rolls);
        }else{
            rolls = 1;
        }
        res.status(200).json(roll(sides, dice, rolls)); 
    });

    app.get('*', (req, res) => {
        res.status(404).send('404 NOT FOUND\n');
    });

    app.listen(port, () => {
        console.log('Roll app listening on port ' + port);
    });
}

main();
