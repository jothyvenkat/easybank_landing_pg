const mobile=document.getElementById('mobile');
const drop_down=document.getElementById('myDropdown');
const bar=document.getElementById('menu_bar');

mobile.addEventListener('click',()=>
{
    drop_down.classList.toggle('active');
    if(drop_down.classList.contains('active')){
        bar.src='images/icon-close.svg';
    }else{
        bar.src='images/icon-hamburger.svg';
    }
});

