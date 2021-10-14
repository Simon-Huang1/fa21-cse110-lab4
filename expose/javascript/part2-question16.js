let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2

};

let printOddAndRs = function(statistics) {
    for (let item in statistics) {
        if (String(item)[0] == 'r' || statistics[item] % 2 == 1) {
            console.log(statistics[item]);
        }
    }
};

printOddAndRs(statistics);