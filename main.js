//input nilai angka
//ambil nilai
//eksekusi dengan logic perulangan
//tiap perulangan merubah tampilan element could
//perulangan selesai couldwon selesai bernilai 0

//get element html
let inputNumber = document.getElementById('angka');
let elementNumber = document.getElementById('number');
let Start = document.querySelector('button');
//start event couldown
Start.addEventListener("click",function(){
   //get value element an input
    let number = parseInt(inputNumber.value);  
      let n = Math.abs(number);
   let time =  setInterval(() => {
        //update value elamentnumber
        elementNumber.innerHTML = n--;
    
        //stop interval 
        if(parseInt(elementNumber.innerHTML) <= 0 ){
            clearInterval(time);
        }

    }, 1000); 
});

