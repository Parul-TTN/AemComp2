document.addEventListener("DOMContentLoaded", function(event) {
   let subBtn = document.querySelector(".cq-dialog-submit");

   if(subBtn!=null){

       subBtn.addEventListener("click",(event)=>{

           let competency =  document.querySelector("[name='./name']");

        if(competency.value.length<6){
event.preventDefault();
               alert("Enter minimum 6 characters");
               return false;

        }
        else{
return true;
           }
    },true);
   }

});

