function data(){
    let x = document.querySelector('.a').classList;
    let y = document.querySelector('.b').classList;
    let ia = document.querySelector('.ia').firstChild.textContent;
    let ib = document.querySelector('.ib').firstChild.textContent;
    let s = document.querySelector('.selected');
    let ns = document.querySelector('.notSelected');
    let ss = parseInt(s.value)
    let nss = parseInt(ns.value)

    if(x == 'a selected'){

        if(ia == "B" && ib == "KB"){
            ns.value = (ss / 1024)
        }
        else if(ib == 'B' && ia == 'KB'){
            s.value = nss * 1024
        }
    }
}
