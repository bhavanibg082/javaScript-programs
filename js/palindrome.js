function palindrome(){

var str= document.getElementById("txtInput").value;
    var mid=Math.floor(str.length/2);
    var isPalindrome = true;
    for(var i=0,j=str.length-1;i<=mid;i++,j--)
    {
           if(str[i]!=str[j])
            {
                isPalindrome=false;
                break;
            }
        }


    if(isPalindrome){
        alert("it is a palindrome");

    }else
    {
        alert("it is not a palindrome");
    }

}