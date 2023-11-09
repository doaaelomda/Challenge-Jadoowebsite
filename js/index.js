// Responsive  on nav bar
function myFunction(x) 
{

    x.classList.toggle("change");
    var topnav=document.querySelector('.topnav')
    var bar2=document.querySelector('.bar2')
    var header = document.querySelector('header'); 
    bar2.style.opicty='1'
    topnav.style.display = topnav.style.display === 'block' ? 'none' : 'block'
    var nav=document.querySelector('nav');
    nav.style.backgroundColor="rgba(249, 250, 253, 0.52)";
    topnav.style.backgroundColor="rgba(249, 250, 253, 0.52)";
    header.style.display = header.style.display === 'inline-block' ?'flex':'inline-block'
    
    
  }

  // appere card when hovering heart image 
  function heartfun(){
    var heartcard=document.getElementById('heart-card')
    heartcard.style.display=heartcard.style.display === 'block' ? 'none' : 'block'
  }

  // Scrolling Change Background Color 
  window.onscroll = () => {
    const nav = document.querySelector('header');
    if(this.scrollY <= 10) nav.className = '';
     else nav.className = 'scroll';
  };
  

  //slidw up down In Comments 
  function upimage(){
    var card2=document.getElementById('card2');
    card2.style.zIndex=5;

  }
 
  
