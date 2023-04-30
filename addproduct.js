import { postCategory } from "./script.js";

let form = document.querySelector("form")
let inputTitle = document.querySelector("#title")
let inputText = document.querySelector("#text")



// let error = document.createElement("span")
// error.classList.add("form-text")
// error.style.color = "red"
// error.textContent = "Please add Input!!"
// nese.append(error)

let error = document.querySelector(".msg")
error.style.display="none"


    form.addEventListener("submit", async (e)=> {
        e.preventDefault()
        if (inputText.value.trim() == "" || inputTitle.value.trim() == "") {                    
        error.style.display="block"
        
        }

       else{
           error.style.display="none"
        const supply = {
            name: inputTitle.value,
            description: inputText.value
        }
        inputTitle.value = ""
        inputText.value = ""

        await postCategory(supply)
        window.location.href = "http://127.0.0.1:5500/index.html"

       }

    })



inputTitle.addEventListener("mousemove", function () {
    inputTitle.style.backgroundColor = "#eeddaf"

})
inputText.addEventListener("mousemove", function () {
    inputText.style.backgroundColor = "#eeddaf"

})
