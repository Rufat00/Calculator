let lastValue = [];
let cleanB = document.querySelector('#cleanBtn')

window.onload= ()=>{
    view()
    if(localStorage.getItem('inputData') != null){
        document.form.textview.value = localStorage.getItem('inputData')
    }
    if (document.form.textview.value == ""){
        cleanB.innerHTML="";
        cleanB.insertAdjacentText('beforeend','AC')
    }
    else{
        cleanB.innerHTML="";
        cleanB.insertAdjacentText('beforeend','C')
    }
}

function inputChange(){
    inputSave()
    if (document.form.textview.value == ""){
        cleanB.innerHTML="";
        cleanB.insertAdjacentText('beforeend','AC')
    }
    else{
        cleanB.innerHTML="";
        cleanB.insertAdjacentText('beforeend','C')
    }
}

function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}
function clean(){
    document.form.textview.value = ""; 
    localStorage.setItem('inputData','')
}
function aClean(){
    let vv = document.querySelector('.vv')
    vv.innerHTML = ""
    if(localStorage.getItem('data') != null){
        localStorage.setItem('data','[]')
    }
}
function rClean(){
    if (document.form.textview.value == ""){
        cleanB.innerHTML="";
        cleanB.insertAdjacentText('beforeend','AC')
        aClean();
    }
    else{
        cleanB.innerHTML="";
        cleanB.insertAdjacentText('beforeend','AC')
        clean();
    }
}
function back(){
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1)
    if (exp == ""){
        cleanB.innerHTML="";
        cleanB.insertAdjacentText('beforeend','AC')
    }
    else{
        cleanB.innerHTML="";
        cleanB.insertAdjacentText('beforeend','C')
    }
}
function sqrt(){
    document.form.textview.value = Math.sqrt(eval(document.form.textview.value));
}
function fact(n){
    let fac = 1
    while(n > 1){
        fac *= n
        n -= 1
    }
    document.form.textview.value = fac

}
function facto(){
    fact(+eval(document.form.textview.value))
}

function equal(){
    let exp = document.form.textview.value;
    let vv = document.querySelector('.vv')
    let newElement = document.createElement('p')
    if(exp){
        let exp1 = exp;
        exp1 = exp1.replaceAll('×','*');
        exp1 = exp1.replaceAll('÷','/');
        exp1 = exp1.replaceAll('^','**');
        exp1 = exp1.replaceAll('π','3.14159265');
        exp1 = exp1.replaceAll('e','2.71828182');
        exp1 = exp1.replaceAll('%','/100');
        lastValue.push(exp + " = " + eval(exp1));
        document.form.textview.value = eval(exp1);

        newElement.innerHTML = lastValue[lastValue.length-1]
        vv.append(newElement);
        save();
        historySave();
        if(document.form.textview.value == null){
            localStorage.setItem('inputData','')
        }
    }
    else{
        pass
    }
}

function show(){
    let sc = document.querySelector('.lastValues')
    sc.classList.toggle('showc')

    let main = document.querySelector('.keyboard');
    cleanB = document.querySelector('#cleanBtn')
    if (main.classList == 'keyboard'){
        main.innerHTML="";
        main.insertAdjacentHTML(
            'beforeend',
            `<div class="btn little" onclick="insert('^')">ⅹ^</div>
            <div class="btn little" >-</div>
            <div class="btn little" >-</div>
            <div class="btn little" onclick="insert('(')">(</div>
            <div class="btn little"onclick="insert(')')">)</div>
        
            <div class="btn little" onclick="sqrt()">√ⅹ</div>
            <div class="btn main" id="cleanBtn" onclick="rClean()">AC</div>
            <div class="btn main" onclick="back()">«</div>
            <div class="btn main" onclick="insert('%')" style="font-size: 25px;">%</div>
            <div class="btn main"onclick="insert('÷')">÷</div>

            <div class="btn little" onclick="facto()">ⅹ!</div>
            <div class="btn"onclick="insert('7')">7</div>
            <div class="btn"onclick="insert('8')">8</div>
            <div class="btn"onclick="insert('9')">9</div>
            <div class="btn main"onclick="insert('×')">×</div>

            <div class="btn little" onclick="insert('^(-1)')">⅟ⅹ</div>
            <div class="btn"onclick="insert('4')">4</div>
            <div class="btn"onclick="insert('5')">5</div>
            <div class="btn"onclick="insert('6')">6</div>
            <div class="btn main"onclick="insert('-')">-</div>

            <div class="btn little" onclick="insert('π')">π</div>
            <div class="btn"onclick="insert('1')">1</div>
            <div class="btn"onclick="insert('2')">2</div>
            <div class="btn"onclick="insert('3')">3</div>
            <div class="btn main"onclick="insert('+')">+</div>

            <div class="btn main" onclick="show()"><i class='bx bxs-grid-alt'></i></div>
            <div class="btn" onclick="insert('e')">e</div>
            <div class="btn"onclick="insert('0')">0</div>
            <div class="btn"onclick="insert('.')">,</div>
            <div class="btn mainM" onclick="equal()">=</div>`
        );
        cleanB = document.querySelector('#cleanBtn')
        main.classList.add('showM')
    }
    else{
        main.classList.remove('showM')
        main.innerHTML="";
        main.insertAdjacentHTML(
            'beforeend',
            `<div class="btn main" id="cleanBtn" onclick="rClean()">AC</div>
            <div class="btn main" onclick="back()">«</div>
            <div class="btn main" onclick="insert('%')" style="font-size: 25px;">%</div>
            <div class="btn main"onclick="insert('÷')">÷</div>

            <div class="btn"onclick="insert('7')">7</div>
            <div class="btn"onclick="insert('8')">8</div>
            <div class="btn"onclick="insert('9')">9</div>
            <div class="btn main"onclick="insert('×')">×</div>

            <div class="btn"onclick="insert('4')">4</div>
            <div class="btn"onclick="insert('5')">5</div>
            <div class="btn"onclick="insert('6')">6</div>
            <div class="btn main"onclick="insert('-')">-</div>

            <div class="btn"onclick="insert('1')">1</div>
            <div class="btn"onclick="insert('2')">2</div>
            <div class="btn"onclick="insert('3')">3</div>
            <div class="btn main"onclick="insert('+')">+</div>

            <div class="btn main" onclick="show()"><i class='bx bx-grid-alt'></i></div>
            <div class="btn"onclick="insert('0')">0</div>
            <div class="btn"onclick="insert('.')">,</div>
            <div class="btn mainM" onclick="equal()">=</div>`);
            cleanB = document.querySelector('#cleanBtn')
        }
        cleanB = document.querySelector('#cleanBtn')
}
function save(){
    let newData = lastValue;

    if(localStorage.getItem('data') == null){
        localStorage.setItem('data','[]')
    }
    let oldData = JSON.parse(localStorage.getItem('data'));
    oldData.push(newData[newData.length-1]);


     localStorage.setItem('data', JSON.stringify(oldData));
}
function view(){
    if(localStorage.getItem('data') != null){

            JSON.parse(localStorage.getItem('data')).forEach(element => {

                let vv = document.querySelector('.vv');
                let newElement = document.createElement('p');

                newElement.innerHTML = element;
                vv.append(newElement);
            });
       
    }
    else{
        pass
    }
}
function historySave(){

    if(localStorage.getItem('historyData') == null){
        localStorage.setItem('historyData','[]')
    }
    let historyData = JSON.parse(localStorage.getItem('historyData'));
    historyData.push(lastValue[lastValue.length-1]);

    if(historyData.length > 30){
        historyData.shift()
    }

    localStorage.setItem('historyData', JSON.stringify(historyData));
}


function inputSave(){

    let exp = document.form.textview.value

     if(localStorage.getItem('inputData') == null){
        localStorage.setItem('inputData','')
    }
    localStorage.setItem('inputData', exp)
}