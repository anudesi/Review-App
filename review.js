const arrObjects =[
    {bgColor:"img1.jpg", profession:"Web designer",reviewText:"Lorem-red ipsum dolor sit amet consectetur adipisicing elit. Delectus consequatur ipsam non, quod labore blanditiis est voluptatum at nihil vel cupiditate alias iste aperiam repellat dolor neque, inventore quos. Dolore sint praesentium quisquam? "},
    {bgColor:"img2.jpg", profession:"Web Developer",reviewText:"Dolor sit amet consectetur adipisicing elit. Delectus consequatur ipsam non, quod labore blanditiis est voluptatum at nihil vel cupiditate alias iste aperiam repellat dolor neque, inventore quos. Dolore sint praesentium quisquam? "},
    {bgColor:"img3.jpg", profession:"graphic designer",reviewText:"ipsum dolor sit amet consectetur adipisicing elit. Delectus consequatur ipsam non, quod labore blanditiis est voluptatum at nihil vel cupiditate alias iste aperiam repellat dolor neque, inventore quos. Dolore sint praesentium quisquam? "},
    {bgColor:"img4.jpg", profession:"UI designer",reviewText:"sit amet consectetur adipisicing elit. Delectus consequatur ipsam non, quod labore blanditiis est voluptatum at nihil vel cupiditate alias iste aperiam repellat dolor neque, inventore quos. Dolore sint praesentium quisquam? "},
    {bgColor:"img5.jpg", profession:"Adobe expert",reviewText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequatur ipsam non, quod labore blanditiis est voluptatum at nihil vel cupiditate alias iste aperiam repellat dolor neque, inventore quos. Dolore sint praesentium quisquam? "},

]
let counter = 0
let imgRev = document.querySelector(".img-box")
let professionRev=document.querySelector("h1")
let revTextRev = document.querySelector("p")
const nextRev = document.getElementsByTagName("h4")
console.log("nextRev", nextRev);

let imgpath ="url('./images/"+arrObjects[counter].bgColor+"')";

/* let counter = Math.floor(Math.random()* arrObjects.length)*/
revTextRev.innerHTML = arrObjects[counter].reviewText
imgRev.style.backgroundImage=  imgpath
professionRev.innerHTML = arrObjects[counter].profession   
/* document.body.style.backgroundImage = "url('image.png')"; */

nextRev[1].addEventListener("click", nextArticle)
function nextArticle(){
        
   if(counter >= arrObjects.length-1){
       counter = 0
   }else { counter = counter+ 1}
    imgpath ="url('./images/"+arrObjects[counter].bgColor+"')";
    revTextRev.innerText = arrObjects[counter].reviewText
    imgRev.style.backgroundImage = imgpath
    professionRev.innerText =arrObjects[counter].profession  

}

nextRev[0].addEventListener("click", previousArticle)
function previousArticle(){
    if(counter <= 0){
        counter = arrObjects.length-1
    }else { counter = counter -1}
    imgpath ="url('./images/"+arrObjects[counter].bgColor+"')";
    revTextRev.innerText = arrObjects[counter].reviewText
    imgRev.style.backgroundImage = imgpath
    professionRev.innerHTML = arrObjects[counter].profession  

}