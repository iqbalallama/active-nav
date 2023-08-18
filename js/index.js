document.getElementById('navv').addEventListener('click',function(e){
    const nav  = document.getElementsByClassName('nav');
    for(let i = 0 ; i<nav.length; i++){
    if(nav[i] === e.target){
        nav[i].classList.add('active')
    }else{
        nav[i].classList.remove('active')
    }
}
})