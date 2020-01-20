// Your code goes here

//Mouseover 
let logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('mouseover', (e) => {
  e.target.style.color = 'blue'
});

//Keydown
document.addEventListener('keydown', (event) => {
  console.log(event);
  const keyName  = event.key;
  console.log('keydown event\n\n' + 'key:' + keyName);
  alert('Hello There');
});

//Wheel 
// let inverseContent = document.querySelector('.inverse-content .text-content')
//   inverseContent.addEventListener('wheel', (e) => {
//     e.target.style.color = 'green';
//   });
const wheelScroll = window.addEventListener('wheel', (event) => {
  document.querySelector(".main-navigation .nav-container .logo-heading").style.visibility = "hidden";
});


//Drag And Drop
let image2 = document.querySelector('.rounded')
image2.addEventListener('dragend',function(event){
    event.preventDefault();
    event.target.style.transform = 'scale(2)'
    console.log(`dragend: ${event.target}`)
});


//Load
window.addEventListener('load', (e) => {
  console.log(`the page is loaded`)
});


//Focus
document.addEventListener('focus', (event) => {
  document.querySelector('.home .intro .content-section').style.background = 'yellow';
});


//Re-Size
window.addEventListener('resize', () => {
  const busImg = document.querySelector('.bus-image')
  busImg.src = 'img/adventure.jpg'
});


//Scroll
window.addEventListener('scroll', (event) => {
  console.log(`Destination ${event.target}`)
});


//Select
const input = document.querySelector('.footer');
  input.addEventListener('select', (event) => {
    const selection  = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(`you selected: ${selection}`);
});
// document.addEventListener('select', (event) => {
//   alert('Im Here!')
// });


//Double Click
let headerTwo = document.querySelectorAll('h2')
  headerTwo.forEach(element => element.addEventListener('dblclick', (e) => {
    e.target.style.color = 'orange';
  }));


//Stop Navigation From Refreshing
let navBar = document.querySelector('.nav')
navBar.addEventListener('click', (e) => {
  event.preventDefault()
  console.log('cant load')
});


//Stop Propagation
const body = document.querySelector('body');
body.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'green';
  console.log('end');
});

const textContent = document.querySelector('.text-content');
  textContent.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue';
    event.stopPropagation();
    console.log('middle');
});

const contentPick = document.querySelector('.content-pick');
  contentPick.addEventListener('click', (event) => {
    event.stopPropagation();
    contentPick.style.backgroundColor = 'violet';
    console.log('start');
  });




