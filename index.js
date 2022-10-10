const result = document.querySelector('#result');

 function number(number){
    result.value += number
 }

 function equals(){
     let input = result.value;
     let output = eval(input)
     result.value = output
    
}

function cancel(){
   document.getElementById("result").value = ""
}