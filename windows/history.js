window.onload=()=>{
    view()
}
function view(){
    if(localStorage.getItem('historyData') != null){

            JSON.parse(localStorage.getItem('historyData')).forEach(element => {

                let vv = document.querySelector('.historyVv');
                let newElement = document.createElement('p');

                newElement.innerHTML = element;
                vv.append(newElement);
            });
       
    }
    else{
        pass
    }
    if(localStorage.getItem('inputData') != null){

        let foot = document.querySelector('.footer')
        foot.value += localStorage.getItem('inputData')

    }
}
function clean(){
    if(localStorage.getItem('data') != null){
        localStorage.setItem('data','[]')
    }
    if(localStorage.getItem('historyData') != null){

        let vv = document.querySelector('.historyVv');

        localStorage.setItem('historyData','[]')
        vv.remove()
    }
    if(localStorage.getItem('inputData') != null){
        localStorage.setItem('inputData','')

        let foot = document.querySelector('.footer')
        foot.value = ""
    }
}