let quote= document.getElementById("quote")
let author= document.getElementById("author")
let btn= document.getElementById("btn")

 let url= "https://api.quotable.io/random"

 let getQuote= () =>{
fetch(url).then((response)=>{
     return response.json()
}).then((value)=>{
    console.log(value.content)
    console.log(value.author)
    quote.innerHTML= value.content
    author.innerHTML= value.author
})

 }

 window.addEventListener("load", getQuote)
 btn.addEventListener("click", getQuote)
 