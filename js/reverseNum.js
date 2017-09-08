



function reverseNum1(){
    var total = 0;

    var num= document.getElementById("txtInput").value;
   // var num=1234;
    while(num > 0){
        total = total*10 + num%10;
        num = Math.floor(num/10);
    }

   alert( total);

}