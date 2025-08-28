
// heart funtionalities

let hearts = document.querySelectorAll(`.heart`);
let heartCount= 0 ;
let heartpoint= document.getElementById(`heartpoint`);

hearts.forEach(heart =>{
    heart.addEventListener(`click`, function(){
        if( heart.classList.contains(`text-red-600`)){
            heart.classList.remove(`text-red-600`);
            heartCount--;

        }
        else{
            heart.classList.add(`text-red-600`);
            heartCount++;

        }
        heartpoint.innerText= heartCount;
    })
});


// call functionalities
let calls= document.querySelectorAll(`.callfunction`);
let token= document.querySelector(`#calltoken`);
let SidesectionDiv = document.querySelector(`#Sidesectiondiv`);
let maindiv= document.querySelector(`#maindiv`);
function newdib( heading , number){
     let now = new Date();
        let div = document.createElement(`div`);
         
        
        div.classList.add("px-3","py-3","flex","items-center","justify-between","bg-[#fafafa]","rounded-md","mt-3","min-h-[60px]");


        div.innerHTML= `

                     <div class="">
                     <h3 class="text-2xl font-semibold"> ${heading} </h3>
                     <p>${ number}</p>
                     </div>

                     <div>

                     <p>${now.toLocaleTimeString()} </p>
                     </div>


        `
        console.log(div);

        SidesectionDiv.appendChild(div)
};

 
let calltoken= Number(token.innerText);


calls.forEach(call=>{
    call.addEventListener(`click`,function(){
        if( calltoken<20){
            alert(`You do not have Enough token`);
            
        }
        else{
        let card= call.parentNode.parentNode;
        let headtitle= card.querySelector(`.cardtitle`);
        let cardnumber= card.querySelector(`.cardnumber`);
        alert(` Calling ${headtitle.innerText} ${cardnumber.innerText}..`);
         calltoken = calltoken - 20;
        token.innerText= calltoken;
        newdib( headtitle.innerText , cardnumber.innerText );

        
       

        }
    })
});

let clearAll =document.querySelector(`#clearall`);

clearAll.addEventListener(`click`, function(){

   SidesectionDiv.innerHTML=``;
    
});

let copybtn= document.querySelectorAll(`.copybtn `);
let copyresult = document.querySelector(`#copyresult`);

let copy= Number(copyresult.innerText);

copybtn.forEach(clear =>{
    clear.addEventListener(`click`, function(){
        alert(`Copied To Clipbord`);
        copy= copy+3;
        copyresult.innerText = copy;

    })
});

let cardnumber = document.querySelectorAll(`.cardnumber`);

cardnumber.forEach(copiednumber =>{
    copiednumber.addEventListener(`click`, function(){
        let copytext= copiednumber.innerText;
        navigator.clipboard.writeText(copytext)
        .then(() => {
        
        alert('Text copied to clipboard!');
      })
      .catch(err => {
        
        console.error('Failed to copy text: ', err);
      });

    });
});




