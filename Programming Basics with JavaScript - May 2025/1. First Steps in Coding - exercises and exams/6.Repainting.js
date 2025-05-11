function repainting(nailon,boya,razreditel,hours){
    let priceNailon = (nailon + 2) * 1.50;
    let priceBoya = (boya + (boya * 0.10)) * 14.50;
    let priceRazreditel = razreditel * 5;
    let sumTorba = 0.40;
    let totalSum = priceNailon + priceBoya + priceRazreditel + sumTorba;
    let sumRazhod = (totalSum * 0.30) * hours;
    let total = totalSum + sumRazhod;

    console.log(total);
}

repainting(10,11,4,8);
//Сума за найлон: (10 + 2) * 1.50 = 18 лв. 
//Сума за боя: (11 + 10%) * 14.50 = 175.45 лв.
//Сума за разредител: 4 * 5.00 = 20.00 лв. 
//Сума за торбички: 0.40 лв.
 //Обща сума за материали: 18 + 175.45 + 20.00 + 0.40 = 213.85 лв.

//Сума за майстори: (213.85 * 30%) * 8 = 513.24 лв. 
//Крайна сума: 213.85 + 513.24 = 727.09 лв