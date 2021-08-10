
/* Grab elements from HTML and css files */
var billVal=document.getElementById("bill-price");
var people=document.getElementById("quatity");
var tipPerson=document.querySelector("#tip-person");
var tipTotal=document.querySelector("#tip-total");
var tipPercent=document.querySelector(".active");
var customNum=document.querySelector("#custom-num");
var txt=document.querySelector("#txt");
var root1=document.querySelector(":root");

// Get all elements have class ".main__select--tip"
var tips=document.querySelectorAll(".main__select--tip");

// loop through it
tips.forEach(tip=>{
    
//every child have a eventListener
    tip.addEventListener("click",addClass);
    function addClass(){


//Another way is loop through "parent" again for getting child removes class "active"
        tips.forEach(tip=>tip.classList.remove("active"));
 //After remove all class active adding it on "this " element
        tip.classList.add("active")
//Get value of Custom input Element
        if(tip.getAttribute("id")=="custom"){
//Change type of custom input from "text" => "number ""          
            customNum.setAttribute("value","");
            customNum.setAttribute("type","number")  ;
//Set tipPercent to customNum            
            tipPercent=customNum;
           
        }
//If "this" element is not custom input tipPercent is still get from active class 
        else{
            tipPercent=document.querySelector(".active");
        }
//After added class to tip element addEventlistener let it know where do to get tipPercent      
        document.getElementById("reset").addEventListener("click",showResult)

             
   
}})
document.getElementById("reset").addEventListener("click",showResult);

function showResult(){
    if(checkValid(billVal,people)){
        
        var tipAmount=0;
        
        if(tipPercent.textContent===""){
            

            tipAmount+=parseFloat(billVal.value)*parseFloat(tipPercent.value)/100;
        }else{
            
            tipAmount+=parseFloat(billVal.value)*parseFloat(tipPercent.textContent)/100;

        }
        
        tipPerson.textContent=(tipAmount/parseInt(people.value)).toFixed(2);
        tipTotal.textContent=(parseFloat(billVal.value)/parseInt(people.value)+parseFloat(tipPerson.textContent)).toFixed(2);
        
    }
}

// check validation of input value
function checkValid(price,quantity){  
    if(parseInt(price.value)>=0 && parseInt(quantity.value)>0){
        quantity.style.borderColor="hsl(172, 67%, 45%)";
        root1.style.setProperty("--display","none");

        return true;
    }else if(parseInt(quantity.value)==0){
        quantity.style.borderColor="red"
        root1.style.setProperty("--display","block");

        
    }
    
}
