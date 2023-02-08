const button = document.getElementsByClassName("btn");
const thanks = document.querySelector("thanks-state");
let ratingSpan = document.querySelectorAll('.ratingSpan');
const container = document.querySelector(".container");
const rates = document.querySelectorAll(".btnnum");
const start = document.querySelector("state-start")


 

button.addEventListener("click", () => {
    thanks.classList.remove("hide")
    start.style.display = "none";
      
})


    
 

/* for(let i = 0; i<ratings.length; i++){
 ratings [i].addEventListener('click'){
    let rating = ratings[i].innerHTML;

    rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        console.log(rates.innerHtml)
    })

    thanks.classList.remove("hide")
        container.style.display = "none"
});

 }

button.addEventListener('click' , () => {
    if(div.style.display === none) {
        div.style.display == block;
    } else {
        div.style.display = none;
    }
}
})*/
