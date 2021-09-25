var seenum = document.getElementById("see");
seenum.addEventListener('click',check_palyndrome_html,true);


var base  = search_palindromenumbase(num);
console.log(base);
//subsequent divission to convert a number into a base
 //position 0 in the array
// is the bit with the less significance  
//return the converted number
function subsequent_div(num, base){
    let resuldiv =[];
    var Residual = base +1;
    if(num>=base){  
        do{
            
            Residual = num % base;
            num =  Math.trunc((num/base));
            resuldiv.push(Residual);
            if(num< base){
                resuldiv.push(num);
            }
                
        }while(num>=base);
    }
    else{
        resuldiv = num;
    }
    return resuldiv;
}
//Check if the number in the elected base is palyndrome
//return only if  its true palyndrom number or not
function check_palindromebase(num,base){
    var ispalindrom;
  
    let basednum = subsequent_div(num,base);
    if(num>=base){
        for(var i =0;i<basednum.length;i++){
            if(basednum[i]!==basednum[basednum.length-1-i]){
                i = basednum.length;
                ispalindrom = false;
            }
            else {
                ispalindrom = true;
            }
        }
    }
    else{
        ispalindrom= true;
    }
    return ispalindrom;
}
//search for the base where the number is palyndrome
function search_palindromenumbase(num){
    var palindrome_found = false;
    base = 1;
    
        do{
            base++;
            palindrome_found = check_palindromebase(num,base);                
         }while(!palindrome_found);
    
    return base;
}
//Call all the above functions to be implemented on the HTML page
function check_palyndrome_html(){
    var numimp  =  document.getElementById("number");
    var num = numimp.value; 
    var base =search_palindromenumbase(num);
    var cont = document.getElementById("result");
    cont.innerHTML= `<p> The base where the number is palyndrom is ${base}<p>`

}
