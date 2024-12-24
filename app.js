let box=document.querySelectorAll(".box")
let reset=document.querySelector("#reset");
let newgame=document.querySelector(".newbtn")
let msgcontener=document.querySelector(".msgcontener");
let msg=document.querySelector("p");
let moode=document.querySelector("#moode");
let changemood=true;
let body=document.querySelector("body");
let turnO=true; // playerx ,playerO

const winPatten= [

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let  dark =()=>{
if(changemood){


   
  
  console.log(changemood);
  body.style.backgroundColor ="black";
  body.style.color="white";
  
  changemood=false;
  

}
else{

  
  body.style.backgroundColor ="#548687";
  body.style.color="black";
  changemood=true;
  
  
}

}




box.forEach((box)=>{

           box.addEventListener("click",()=>{

       

            console.log("button was clicked");
              if(turnO){


                box.innerHTML="X";
                
                turnO=false;
                box.classList.add("blue");
                box.classList.remove("black");
                
              }
              else{

                box.innerHTML="O";
                turnO=true;
                box.classList.add("black");
                box.classList.remove("blue");
              }
              box.disabled=true;




                 checkWinner();
           });



});



const resetgame =()=>{
   
  turnO=true;
  enablebox();
  msgcontener.classList.add("hide");


}





const enablebox=()=>{

  for(let val of box){


    val.disabled=false;
     val.innerHTML="";
  };
 



};


const disabledbox=()=>{

for(let val of box){


  val.disabled=true;
}

}


const showwiiner=(winner)=>{

msg.innerHTML=`congratulations, winner is ${winner} `;
msgcontener.classList.remove("hide");
disabledbox();

}
const checkWinner=()=>{
     
   for(let patten of winPatten){
 
    
   let po1val=box[patten[0]].innerText;
   let po2val=box[patten[1]].innerText;
   let po3val=box[patten[2]].innerText;



   if(po1val!=""&& po2val!="" && po3val!=""){


    if(po1val==po2val && po2val==po3val){
       
    console.log("winner is ",po1val);
    
      
    showwiiner(po1val);

    }
   }
   
   }




}

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
moode.addEventListener("click",dark);
