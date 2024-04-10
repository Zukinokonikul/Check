// Draw a kwadrat, prostokąt, trójkąt, choinkę za pomocą symbolu "*" w konsoli

function NStarStringGen(size){
    var StarSequence="";
    for (let i = 0; i < size; i++){
        StarSequence += "*   "
    }

    console.log(StarSequence)
}

for (let j = 0; j < 5; j++){
    NStarStringGen(j)
}

for (let k = 0; k < 5; k++){
    NStarStringGen(k)
}
for (let l = 0; l < 5; l++){
    NStarStringGen(l)
}