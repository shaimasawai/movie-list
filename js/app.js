'Use strict';

let form = document.getElementById('form');
let table_sction =document.getElementById('table_sction');
let clear =document.getElementById('clear');
let table =document.createElement('table');

if(localStorage.getItem('key')===null){
    localStorage.setItem('key',JSON.stringify([]));
}

let arrayimg =JSON.parse(localStorage.getItem('key'));


function Movie(name,imges,day){
    this.name=name;
    this.imges=imges;
    this.day=day;

    arrayimg.push(this);

    localStorage.setItem('key',JSON.stringify(arrayimg));


}


form.addEventListener('submit',formHandler);
function formHandler(event){
    event.preventDefault();
    let names=event.target.name.value;
    let imgee =event.target.img.value;
    let year =event.target.year.value;
    new Movie(names,imgee,year);
    rander();
    console.log(arrayimg);
}

// console.log(arrayimg);

clear.addEventListener('click',clearHandler);
function clearHandler(event){
    if(event.target.id==='clear'){
        localStorage.clear();
        arrayimg =[];
        table_sction.innerHTML='';
    }
}

// table.addEventListener('click',removeHandler);
// function removeHandler(event){
//     let target=event.target.innerText;
//     if(target=='Delet'){
//         let child=parseInt(event.target.parentElement.rowIndex)
//         event.target.parentElement.remove()
//         arrayimg.splice(child)
//         localStorage.key=JSON.setItem('key',arrayimg())
//     }
// }
// rander();


function rander(){

    table_sction.innerHTML='';

  table.setAttribute("id", "Table");  

table_sction.appendChild(table);

// let tr =document.createElement('tr');
// table.appendChild(tr);

for(let i=0 ; i<arrayimg.length ;i++){
    let tr =document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');
    let td4=document.createElement('td');

    td1.innerHTML='x';
    td2.innerHTML=arrayimg[i].names;
    td3.innerHTML=arrayimg[i].imgee;
    td4.innerHTML=arrayimg[i].year;

    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    // tr.appendChild(td4);


}
    
}

rander();

