function roll(num_sides, num_dice, num_rolls){

    let results_arr = [];
    for (let i = 0; i < num_rolls; i++){
        let sum = 0;
        for (let j = 0; j < num_dice; j++){
            sum += Math.floor(Math.random()*num_sides)+1;
        }
        results_arr.push(sum);
    }

    let object = {
        sides   : num_sides,
        dice    : num_dice,
        rolls   : num_rolls,
        results : results_arr,
    }
    return object;
}

export {roll}
