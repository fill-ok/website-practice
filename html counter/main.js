let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let count = 8;

plus.addEventListener('click', function() {
    count++;
    document.querySelector(".counter p").innerHTML = count;   
}) 

minus.addEventListener('click', function() {
    if (count > 0){
        count--;
        document.querySelector(".counter p").innerHTML = count;
    }
}) 