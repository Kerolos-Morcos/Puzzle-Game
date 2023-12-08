var draggedImage = document.getElementsByClassName('image');
var containerImg = document.getElementsByClassName('containerImg');


for (var j = 0; draggedImage.length > j; j++) {
    draggedImage[j].addEventListener('dragstart', dragstartFun)
}
function dragstartFun(event) {
    event.dataTransfer.setData("text", this.id);
}
for (var i = 0; containerImg.length > i; i++) {
    containerImg[i].addEventListener("dragover", dragoverFun);
    containerImg[i].addEventListener("drop", dropFun);
}

function dragoverFun(event) {
    event.preventDefault();
}

var audio_true = document.getElementById("true")
var audio_false = document.getElementById("false")
function dropFun(event) {

    var draggedImage = event.dataTransfer.getData("text");
    var select = document.getElementById(draggedImage)

    if(select.getAttribute("data") === event.target.id )
    {
        this.appendChild(document.getElementById(draggedImage))
        audio_true.play();
    }
    else
    {
        audio_false.play();

    }
}


