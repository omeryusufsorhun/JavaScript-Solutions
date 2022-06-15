const txtInput=document.querySelector(".container input");
checkBtn=document.querySelector(".btn1 button ");

checkBtn.addEventListener("click",()=>{
    let reverseInput=filterInput.split("").reverse().join("");
    if(filterInput!=reverseInput){
        return console.log("not palindrome");
    }
    console.log("palindrome");

});

txtInput.addEventListener("keyup",()=>{
    let filterInput=txtInput.value.replace(/[^A-Z0-9]/ig, "");
    if(filterInput){
    return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
});
