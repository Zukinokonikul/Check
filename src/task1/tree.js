function drawTree(h) {
    for(var i=0; i<=h; i++){
        var star = '';
        //Changed to start high then decrease
        for(var k = 1; k <= h - i; k++){
            //shortened to one space
            star += " ";
        }
        for(var j=0; j<=i; j++) {
            //Added space so there is an odd number
            //of symbols and the star above fits
            //the space
            star += " *";
        }
        //Moved into the loop
        console.log(star);
    }
}

drawTree(10);

function drawLog(size) {
    for(var a = 0; a < 3; a++){
        var starS = '        ';
        for(var l = 0; l < size; l++){
            starS += "* ";
        }

        console.log(starS)
    }
}


drawLog(3)