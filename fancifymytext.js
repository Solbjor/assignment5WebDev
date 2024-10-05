function bigger() {
    document.getElementById("text").style.fontSize = "24pt";
}

function updateTextF(){
    var text = document.getElementById("text");
    if (document.getElementById("blingF").checked){
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    }
}

function updateTextB(){
    var text = document.getElementById("text");
    if (document.getElementById("blingB").checked){
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function moo() {
    var text = document.getElementById("text");
    var parts = text.value.split(".");
    parts = parts.filter(part => part.trim() !== "");
    text.value = parts.join("-Moo.") + "-Moo";
}