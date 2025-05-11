function fishTank(l,w,h, percent){
let volume = l * w * h;
let volumeLiters = volume / 1000;
let lithium = percent / 100;
let neededLiters = volumeLiters * (1 - lithium);

console.log(neededLiters);
    
    //обем на аквариумa: 85 * 75 * 47 = 299625 см3
     //обем в литри: 299625 * 0.001 или 299625 / 1000 => 299.625 
     //литра заето пространство: 17% = 0.17 
    //нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра
}
fishTank(85,75,47,17);
fishTank(105, 77, 89, 18.5);