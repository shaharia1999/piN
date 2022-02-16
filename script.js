document.getElementById("createPin").addEventListener('click',function(){
    const math=Math.round(Math.random()*1000+1000);
   const input= document.getElementById("pinInpute");
   const inputValue=input.ariaValueMax;
   input.value=math;

})



document.getElementById("delegate").addEventListener('click',function(event){

        let number= event.target.innerText;
        let calculator=document.getElementById("calulator");
        if(isNaN(number)){
            if(number=='C')
            {
                calculator.value='';
            }
          
        }
        else{
        
        let prevCal=calculator.value;
        console.log(prevCal);
        let newCal=prevCal +number;
        const ubdateCal=calculator.value=newCal;
        }

});
document.getElementById("submit").addEventListener('click',function(){
    let inputValueChack= document.getElementById("pinInpute").value;
    let calculatorvaluechack= parseFloat( document.getElementById("calulator").value);
    if( inputValueChack==calculatorvaluechack){
        document.getElementById("right").style.display='block';
      document.getElementById("wrong").style.display='none';
    }
    else{
        document.getElementById("right").style.display='none';
        document.getElementById("wrong").style.display='block';
    }
    
})