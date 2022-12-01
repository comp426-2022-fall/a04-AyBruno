import {roll} from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const app = express();
const args = minimist(process.argv.slice(2));
let port = 5555;
//console.log(roll(3,4,5));

function main(){
    //port = 8888;    
    let sides;
    let dice;
    let rolls;

    app.get('/', (req, res) => {
        res.status(404).send('Not found');
    });

    app.get('/roll/:sides/:dice/:rolls/', (req, res) => {
        sides = req.params.sides;
        dice = req.params.dice;
        rolls = req.params.rolls;
        res.json(roll(sides, dice, rolls)); 
    });

    app.get('/roll', (req, res) => {
        sides = 6;
        dice = 2;
        rolls = 1;
        res.json(roll(sides, dice, rolls)); 
    });

    //app.get('/roll', (req, res) => {
    //    res.json(roll(3, 2, 4)); 
    //});

    app.listen(port, () => {
        console.log('Roll app listening on port ' + port);
    });
}

main();
