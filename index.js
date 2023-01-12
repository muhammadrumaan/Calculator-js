let buttons=document.querySelectorAll('button');
let input=document.querySelector('input');

Array.from(buttons).forEach((button) => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='='){
            let string=input.value.replace("÷","/");
            string=string.replace("×","*");
            try{
                input.value=eval(string);
            }catch(err){
                console.log(string);
                input.value="Syntax error!";
                setTimeout(function() { 
                    input.value="";   
                },1000);
               
            }
           
        }
        else if(e.target.innerHTML=='C'){
            input.value="";
        }else if(e.target.innerText=='<'){
            input.value=input.value.slice(0,input.value.length-1);
            
        }else{
            input.value+=button.innerHTML;
        }
        
    })
});
let tglbutton=document.querySelector('.tgl');
let content=document.querySelector('.container');
tglbutton.onclick=()=>{
    content.classList.toggle('dark');
}