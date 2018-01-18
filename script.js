
    var txt = Array.prototype.slice.apply(this); //.join("")
    var newArray = [];
 
    for(var i = 0; i < txt.length; i++){
        newArray[i] = txt[i].toUpperCase();
    }
 
    return newArray.join("-");
