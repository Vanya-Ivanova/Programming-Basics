//Цена на пакетите химикали => 2 * 5.80 = 11.60 лв. 
//Цена на пакетите маркери => 3 * 7.20 = 21.60 лв. 
//Цена на препарата => 4 * 1.20 = 4.80 лв. 
//Цена за всички материали => 11.60 + 21.60 + 4.80 = 38.00 лв. 25% = 0.25
 //Цена с намаление = 38.00 – (38.00 * 0.25) = 28.50 лв.

 //Пакет химикали - 5.80 лв.
// Пакет маркери - 7.20 лв.
 //Препарат - 1.20 лв (за литър)

 //Брой пакети химикали - цяло число в интервала [0...100]
//Брой пакети маркери - цяло число в интервала [0...100]
//Литри препарат за почистване на дъска - цяло число в интервала [0…5]
function suppliesForScool(countPisec, countMarker, litriPreparat,perccent){
    let pricePisec = countPisec * 5.80;
    let priceMarcer = countMarker * 7.20;
    let pricePreparat = litriPreparat * 1.20;
    let price = pricePisec + priceMarcer + pricePreparat;
    let pricePercent = price - (price * perccent / 100);
    console.log(pricePercent);


}

suppliesForScool(2,3,4,25);