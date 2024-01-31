let modalBtn = document.querySelector(".modalBtn");
let modalContainer = document.querySelector(".modalContainer")
let cancelBtn = document.querySelector(".modal img")
let content = document.querySelector(".content")

modalBtn.addEventListener('click',()=>{
    //display modal
    modalContainer.style.display = "flex";
    content.style.webkitFilter= "blur(2px)";
       
        //cancel btn
        cancelBtn.addEventListener('click',()=>{
            modalContainer.style.display = "none";
            content.style.webkitFilter= "blur(0px)";
        })

        //clicking outside modal to close
        modalContainer.addEventListener('click', ()=>{
            modalContainer.style.display = "none";
            content.style.webkitFilter= "blur(0px)";
        })

})

