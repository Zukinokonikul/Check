// Draw a kwadrat, prostokąt, trójkąt, choinkę za pomocą symbolu "*" w konsoli

function NStarStringGen(size){
    var StarSequence="";
    for (let i = 0; i < size; i++){
        StarSequence = StarSequence+"*   "
    }

    return StarSequence
}

for (let j = 0; j < 5; j++){
    console.log(NStarStringGen(5))
}

