// let result = 5 * (10 - 3) ** 2;
// console.log(result);

// let likes = 10;


    let price = document.getElementById('amount');
    let time = document.getElementById('time');
    let rate = document.getElementById('rate');



function Calculate() {
    let p = price.value;
    let t = time.value;
    let r = rate.value;

    let SI = (p * t * r) / 100;

    document.getElementById('si').innerHTML = "The Total Simple Intrest Is: " + SI;
}