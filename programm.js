const settingsBtn = document.querySelector('.settings');
let settingsMenu = document.querySelector('.settingsMenu');
let settingsSet = document.querySelector('.settingsMenuset');
settingsBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    settingsMenu.classList.toggle('showSm')
    settingsSet.classList.toggle('showSm')
})


settingsSet.addEventListener('click',()=>{
        settingsMenu.classList.remove('showSm')
        settingsSet.classList.remove('showSm')
})