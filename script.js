$(".input").on('input',function() {

    var price = document.getElementById('price').value;
    price = parseFloat(price);

    var asianPrice = document.getElementById('asian-price').value;
    price = parseFloat(asianPrice);

    document.getElementById('max-price').value = (asianPrice/(asianPrice-1)).toFixed(2);

    var priceOdds = document.getElementById('priceOdds').value;
    priceOdds = parseFloat(priceOdds);

    var margin = document.getElementById('margin').value;
    margin = parseFloat(margin);

    document.getElementById('second-price').value = (1/(margin-(1/priceOdds))).toFixed(2);
});