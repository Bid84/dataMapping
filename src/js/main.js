
let csvArray = [
     {path:"./source.csv", list:"list0"},
     {path:"./target.csv", list:"list1"}

]
for (let i=0; i<csvArray.length;i++){
  fetch(csvArray[i].path).then(res=>{
    return res.text()
 }).then(data => {
   let result =data.split(/\r?\n|\r/).map(
     e=>{
       return e.split(",")
     }
   )
  
   result.forEach( e =>{
     let m = e.map(e =>{
      return `<li class="list-group-item"> ${e} </li>`;
     }).join(" ");
     let list = csvArray[i].list;
     let myUl = document.querySelector("#" +list);
     myUl.innerHTML =m;
   
 
   })
 })
}

 $(function() {
  $( "#list0" ).draggable({
    revert: true,
    opacity: 0.40
  });
}); 

$(document).ready(function (){
  $("#list0").selectable();
});

$(function(){
  $( "#list1" ).droppable();
   
});

$(document).ready(function(){
  $("button").click(function(){

  })
})

