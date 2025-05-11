function depositCalculator(depositSum,mesecDeposit,anualPercent){
    
    //1. Изчисляваме натрупаната лихва: 200 * 0.057 (5.7%) = 11.40 лв.
    // 2. Изчисляваме лихвата за 1 месец: 11.40 лв. / 12 месеца = 0.95 лв.
     //3. Общата сума е: 200 лв. + 3 * 0.95 лв. = 202.85 лв.


    

    
     let sum = depositSum * anualPercent / 100;
     let mesecSum = sum / 12;
    let totalSum = depositSum + mesecDeposit * mesecSum
    console.log(totalSum);
}
depositCalculator(200,3,5.7);