function allowDrop(ev){
  ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("text", ev.target.id);
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));


}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}



/*
<script>
  var originalData = document.getElementById("original-data");
  originalData.addEventListener("dragstart", function(event) {
    var copiedData = originalData.cloneNode(true);
    var newElement = document.createElement("div");
    newElement.appendChild(copiedData);
    newElement.innerHTML = copiedData.innerHTML;
  });
</script>*/


