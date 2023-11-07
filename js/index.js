function myFunction(x) {
    x.classList.toggle("change");
    let topnav=document.querySelector('.topnav')
    let bar2=document.querySelector('.bar2')
    var header = document.querySelector('header'); 
    bar2.style.opicty='1'
    topnav.style.display = topnav.style.display === 'block' ? 'none' : 'block'
    let nav=document.querySelector('nav');
    nav.style.backgroundColor="rgba(249, 250, 253, 0.52)";
    topnav.style.backgroundColor="rgba(249, 250, 253, 0.52)";
    header.style.display = header.style.display === 'inline-block' ?'flex':'inline-block'
    
    
  }


  window.onscroll = () => {
    const nav = document.querySelector('header');
    if(this.scrollY <= 10) nav.className = '';
     else nav.className = 'scroll';
  };
  
  
  
  
