// THIS IS A SIMPLE JAVASCRIPT PROGRAM

const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;
var taxBoolean;
var salesCounter = 1;



function getPrices(taxBoolean) {
    for (dish of dishData) {
        var finalPrice;
        if(taxBoolean){
            finalPrice = dish["price"]*tax;
        }
        else if(taxBoolean==false){
            finalPrice = dish["price"];
        }
        else{
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log(`# Dish: ${dish["name"]}"Price: $"${finalPrice}\n`);
    }
}



function getDiscount(taxBoolean, guests) {
    console.log(`||sale number: ${salesCounter}||\n`);
    if(typeof(guests)!="number"){
        try{
            guests=Number(guests);
        }
        catch(err){
         console.log(err);
         console.log("The number of guests should be number !!!");
         return;   
        }
    }
    if(guests>0 && guests<30){
        getPrices(taxBoolean);
        var discount = 0;
        if(guests<5){
            discount = 5;
        }
        else{
            discount = 10;
        }
        console.log(`Discount is: ${discount}\n____________________`);
    }
    else{
        console.log("***** the sale failed *****")
        console.log("The number of guests must be a number between 0 and 30\n____________________");
    }
    salesCounter += 1;
}



// You can call the function `getDiscount(a Boolean value, a Number value)`.
// The Boolean value used for tax calculation. (true/false)
// The Number value used for the number of guests for discount calculation. (that should be a number between 0 and 30)
    getDiscount(true, 8);
    getDiscount(false, 4);