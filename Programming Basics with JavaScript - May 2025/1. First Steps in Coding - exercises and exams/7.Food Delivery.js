function foodDelivery(countChikenMenu, countFishMenu, countVeganMenu){
    let priceChikenMenu = countChikenMenu * 10.35;
    let priceFishMenu = countFishMenu * 12.40;
    let priceVeganMenu = countVeganMenu * 8.15;
    let priceMenu = priceChikenMenu + priceFishMenu + priceVeganMenu;
    let priceDessert = priceMenu * 0.20;
    let priceKurier = 2.50;
    let totalPrice = priceMenu + priceDessert + priceKurier;

    console.log(totalPrice);
    
    
 
    //Цена за пилешките менюта: 2 броя * 10.35 = 20.70 
    //Цена за менютата с риба: 4 броя * 12.40 = 49.60 
    //Цена за вегетарианските менюта: 3 броя * 8.15 = 24.45 
    //Обща цена на менютата: 20.70 + 49.60 + 24.45 = 94.75 
    //Цена на десерта: 20% от 94.75 = 18.95 
    //Цена на доставка: 2.50 (по условие)
     //Обща цена на поръчката: 94.75 + 18.95 + 2.50 = 116.20
}

foodDelivery(2,4,3);