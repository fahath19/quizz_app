let question=[
      {
         qizz:"Who is the Father of our Nation?",
         a:"Mahatma Gandhi",
         b:" Jawaharlal Nehru ",
         c:"Bahath Singh",
         d:"Ambedkar",
         ans:"a "
  
      },
      {
          qizz:"Where was India’s first national Museum opened?",
          a:"Delhi",
          b:"Hyderabad",
          c:"Rajasthan",
          d:"Mumbai",
          ans:"d"
   
       },    {
          qizz:"The world’s nation 5G mobile network was launched by which country?",
          a:"Japan",
          b:"Asia",
          c:"Malaysia",
          d:"South Korea",
          ans:"d"
   
       },
       {
          qizz:"The green planet in the solar system is?",
          a:"Mars",
          b:"Uranus",
          c:"Venus",
          d:"Earth"
          ,
          ans:"b"
   
       },
       {
          qizz:" Why is the color of papaya yellow?",
          a:"Lycopene",
          b:"Papain",
          c:"Carotene",
          d:"Caricaxanthin",
          ans:"d"
   
       },
  ]
let span=document.querySelector('span');
let nbtn=document.querySelector('.nbtn');
let ques=document.querySelector('.ques')
let s1=document.querySelector('.s1');
let s2=document.querySelector('.s2');
let s3=document.querySelector('.s3');
let s4=document.querySelector('.s4');

currentquestion=0
function load(index){
   let data=question[index];
    ques.innerHTML=`${index+1}.${data.qizz}`;
     s1.innerText=`${data.a}`;
     s2.innerText=`${data.b}`;
     s3.innerText=`${data.c}`;
     s4.innerText=`${data.d}`;

     
}
load(currentquestion);
nbtn.addEventListener('click',()=>{
   currentquestion++;
   load(currentquestion)
});