let vendingMachine = {};
let payAmount = 2.7;
let productNum = 6;
const click = () => {
    if (vendingMachine == false){
        console.log("Turning it off...");
        vendingMachine = true;
    }
    else {
        console.log("Turning on...");
        console.log("Prices are: $2.5 for sodas, $3.2 for Energy");
        vendingMachine = false;
    }
}
const prChoose = () => {
    switch(productNum) {
        case 1:
            console.log("Sprite chosen");
            break;
        case 2:
            console.log("Coke chosen");
            break;
        case 3:
            console.log("Fanta chosen");
            break;
        case 4:
            console.log("Monster chosen");
            break;
        case 5:
            console.log("DrPepper chosen");
            break;
        case 6:
            console.log("Red Bull chosen");
            break;
    }
}
const payment = () => {
    if (productNum == 1 && payAmount >= 2.5){
        console.log("Thank You for your Purchase");
    }
    else if (productNum == 2 && payAmount >= 2.5){
        console.log("Thank You for your Purchase");
    }
    else if (productNum == 3 && payAmount >= 2.5){
        console.log("Thank You for your Purchase");
    }
    else if (productNum == 4 && payAmount >= 3.2){
        console.log("Thank You for your Purchase");
    }
    else if (productNum == 5 && payAmount >= 2.5){
        console.log("Thank You for your Purchase");
    }
    else if (productNum == 6 && payAmount >= 3.2){
        console.log("Thank You for your Purchase");
    }
    else {
        console.log(`$${payAmount} is not enough, you BROKE ASS`)
    }
}
click();
prChoose();
payment();
click();