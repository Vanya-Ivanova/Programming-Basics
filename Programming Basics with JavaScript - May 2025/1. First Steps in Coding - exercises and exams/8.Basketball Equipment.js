function basketballEquipment(taksa){
    let priceKecove = taksa - (taksa * 0.40);
    let priceEkip = priceKecove - (priceKecove * 0.20);
    let priceTopka = (priceEkip * 1/4) ;
    let priceAksesoari = priceTopka * 1/5 ;
    let totalPrice =  taksa + priceKecove + priceEkip + priceTopka + priceAksesoari ;
    console.log(totalPrice);

    
}

basketballEquipment(365);

    //Цена на тренировките за година: 365
     //Цена на баскетболните кецове: 365 – 40% = 219 
     //Цена на баскетболен екип: 219 – 20% = 175.20 
     //Цена на баскетболна топка: 1 / 4 от 175.20 = 43.80 
    // Цена на баскетболни аксесоари: 1 / 5 от 43.80 = 8.76 
//Обща цена за екипировката: 365 + 219 + 175.20 + 43.80 + 8.76 = 811.76