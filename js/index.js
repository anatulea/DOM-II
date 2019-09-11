// Your code goes here
const travelImages = document.querySelectorAll('.img-content');

travelImages.forEach((image) => {
    image.addEventListener('mouseenter', (event) => {
      image.style.transform = 'scale(1.2)';
      image.style.transition = 'transform 0.5s';
    });
    
    image.addEventListener('mouseleave', (event) => {
      image.style.transform = 'scale(1.0)';
      image.style.transition = 'transform 0.5s';
    });
});

const lastTravelImage = document.querySelectorAll('.content-destination img');

lastTravelImage.forEach((image) => {
    image.addEventListener('mouseenter', (event) => {
      image.style.transform = 'scale(1.15)';
      image.style.transition = 'transform 0.5s';
    });
    
    image.addEventListener('mouseleave', (event) => {
      image.style.transform = 'scale(1.0)';
      image.style.transition = 'transform 0.5s';
    });
   
});

const firstTravelImage = document.querySelectorAll('.intro img');

firstTravelImage.forEach((image)=>{
    image.addEventListener('click', (event) => {
        image.src = 'img/fun-car.jpg';
        image.alt = 'Cars are fun too';
    });
});

const buttonLow = document.querySelectorAll('.destination .btn');

buttonLow.forEach((button)=>{
   // console.log('the button was doubleclicked');
    button.addEventListener('dblclick',  (e) =>{
    console.log('the button was doubleclicked');
    button.style.color = 'gold';
    button.classList.toggle('large');//to make this work I added a "large" class in home-page.less.
    });
});
 const navBar = document.querySelector('.nav-container');
 navBar.addEventListener('mousedown', (event)=>{
     navBar.style.backgroundColor ='#ADD8E6';
 })
 const navText =document.querySelectorAll('.nav .nav-link ')
    navText.forEach((text)=>{
        text.addEventListener('click', (event) =>{
        text.style.color ='#DAA520';
        text.style.fontSize = '1.9rem'
         });
});

 const logoText = document.querySelector('.logo-heading')
    logoText.addEventListener('mouseover', (event)=>{
        logoText.style.color ='#DAA520';
     logoText.style.fontWeight= 'bold';
    });

 function zoom(event) {
      //  event.preventDefault();
      
        scale += event.deltaY * -0.01;
      
        // Restrict scale
        scale = Math.min(Math.max(.125, scale), 2);
      
        // Apply scale transform
        el.style.transform = `scale(${scale})`;
 }

      let scale = 1;
      const el = document.querySelector('.intro h2');
      el.onwheel = zoom; 


//-------search box and button------>
const headerNewEl = document.querySelector('.nav-container');
   
    const newDiv = document.createElement('div');
        newDiv.className='search-container';
        newDiv.style.float= 'right';

        const newForm = document.createElement('form');
        newForm.action='/action_page.php';

            const imputForm = document.createElement('imput');
                imputForm.type ='text';
                imputForm.style.padding ='7px';
                imputForm.style.paddingRight='60px'
                imputForm.style.border ='1px solid #aaa';
                imputForm.placeholder='Search ';
                imputForm.name ='search';
                imputForm.textContent='Search destination...';
                imputForm.style.fontSize ='1.5rem';
            newForm.appendChild(imputForm);  

             const buttonForm = document. createElement('button')
                 buttonForm.type ='submit';
                 buttonForm.style.float ='right';
                 buttonForm.style.padding = '6px';
                 buttonForm.style.marginTop = '-10px';
                 buttonForm.style.marginRight='16px';
                 buttonForm.style.background='#ddd';
                 buttonForm.fontSize='17px';
                 buttonForm.style.border='none';
                 buttonForm.style.cursor= 'pointer';
                 buttonForm.style.fontSize ='2rem';
                 const searchIcon = document.createElement('i');
                     searchIcon.className = 'fa fa-search';
                 buttonForm.appendChild(searchIcon);
            newForm.appendChild(buttonForm);
       newDiv.appendChild(newForm);
    headerNewEl.appendChild(newDiv);

//-------search box and button------

imputForm.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

imputForm.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});


document.addEventListener('wheel', (event) => {
    event.target.style.color = "teal";
    event.target.style.backgroundColor= "yellow";
  }); 

  
 document.addEventListener('copy',cb);

 function cb(){
     alert("You can't copy this!!");
 } 