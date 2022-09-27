const btnProduct = document.getElementById('product');

function toggleMenu(){
    const ulNav = document.getElementById('ulNav');
    ulNav.classList.toggle('active');
}

btnProduct.addEventListener('click', toggleMenu)
//-------------------------------------------------
const btnProduct2 = document.getElementById('product2');

function toggleMenu2(){
    const ulNav2 = document.getElementById('ulNav2');
    ulNav2.classList.toggle('active2');
}

btnProduct2.addEventListener('click', toggleMenu2)
//--------------------------------------------------------
const btnProduct3 = document.getElementById('product3');

function toggleMenu3(){
    const ulNav3 = document.getElementById('ulNav3');
    ulNav3.classList.toggle('active3');
}

btnProduct3.addEventListener('click', toggleMenu3)
//botão menu Mobile ------------>
const btnMobile = document.getElementById('btnMobile');

    function menuMobile(){
        var valor =  btnMobile.getAttribute('src')
        if(valor === '/images/icon-hamburger.svg'){
            btnMobile.setAttribute('src','/images/icon-close.svg')
        }else{
            btnMobile.setAttribute('src','/images/icon-hamburger.svg')
        }
        
        
    }

btnMobile.addEventListener('click', menuMobile);
//open menu ----------->
const btnMobile2 = document.getElementById('btnMobile');

    function openMenuMobile(){
      const menuM = document.getElementById('menuM');
      menuM.classList.toggle('openMenu')  
    }
btnMobile2.addEventListener('click', openMenuMobile)