const a = document.querySelector('.a');
const b = document.querySelector('.b');
const ia = document.querySelector('.ia')
const ib = document.querySelector('.ib')

a.addEventListener('click',()=>{
    a.classList.add('selected')
    b.classList.remove('selected')

    b.classList.add('notSelected')
    a.classList.remove('notSelected')

    ia.classList.add('iSelected')
    ib.classList.remove('iSelected')
})
b.addEventListener('click',()=>{
    b.classList.add('selected')
    a.classList.remove('selected')

    a.classList.add('notSelected')
    b.classList.remove('notSelected')

    ib.classList.add('iSelected')
    ia.classList.remove('iSelected')
})
ia.addEventListener('click',()=>{
    ia.classList.add('iSelected')
    ib.classList.remove('iSelected')
    showSelect()
})
ib.addEventListener('click',()=>{
    ib.classList.add('iSelected')
    ia.classList.remove('iSelected')
    showSelect()
})
let selectSet = document.querySelector('.select')
selectSet.addEventListener('click',()=>{
    selectSet.classList.remove('show')
})
let cancel = document.querySelector('#cancel');
cancel.addEventListener('click',()=>{
    selectSet.classList.remove('show')
})

function insert(num){
    let input = document.querySelector('.selected')
    input.value += num
}
function clean(){
    a.value = "";
    b.value = "";
}
function back(){
    let input = document.querySelector('.selected');
    input.value = input.value.substring(0, input.value.length-1)
}
function showSelect(){
    let selectSet = document.querySelector('.select');
    selectSet.classList.toggle('show')
}
function innerValue(value){
    let input = document.querySelector('.iSelected').firstChild;
    input.textContent="";
    input.textContent = value
}