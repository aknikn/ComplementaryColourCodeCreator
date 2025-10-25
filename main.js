
document.getElementById("button").addEventListener("click", calc)

function calc(){
    const oColour = document.getElementById("oColour").value;
    const oRGB = [];
    const errMsg = document.getElementById("errMsg");
    const resMsg = document.getElementById("resMsg");
    //const rColour = document.getElementById("rColour");

    // Split the colour code into the cords for R, G and B.
    for(let i=0; i<oColour.length; i++){
        oRGB.push(oColour.substr(i*2, 2));
    }
    // Error check
    if(!checkError(oColour, errMsg)){
        return;
    }

    // Convert the entered hexadecimal code to decimal code
    const oR = hexToDec(oRGB[0]);
    const oG = hexToDec(oRGB[1]);
    const oB = hexToDec(oRGB[2]);

    // Converted the entered code to the complementary code
    const cR = createComplementaryColourCode(oR, oG, oB, oR);
    const cG = createComplementaryColourCode(oR, oG, oB, oG);
    const cB = createComplementaryColourCode(oR, oG, oB, oB);
    
    const rR = decToHex(cR);
    const rG = decToHex(cG);
    const rB = decToHex(cB);

    // Convert the created decimal code to hexadecimal code
    const rColour = rR+rG+rB;
    resMsg.textContent = `#${oColour}の補色は#${rColour}です`;
}

// Convert from Hexadecimal to Decimal
function hexToDec(num){
    return parseInt(num, 16);
}

// Convert from Decimal to Hexadecimal
function decToHex(num){
    let tmp = num.toString(16).toUpperCase();
    
    // If 0<the hexadecimal code<9, add a leading "0" 
    if(tmp==0||tmp==1||tmp==2||tmp==3||tmp==4||tmp==5||tmp==6||tmp==7||tmp==8||tmp==9)
        tmp = "0" + tmp;
    return tmp;
}

// Create Complementary Colour Code（R、G、B、return value）
function createComplementaryColourCode(numR, numG, numB, result){
    const minMax = Math.min(numR, numG, numB)+Math.max(numR, numG, numB);
    const compR = minMax-numR;
    const compG = minMax-numG;
    const compB = minMax-numB;

    if(result==numR){
        return compR;
    }else if(result==numG){
        return compG;
    }else{
        return compB;
    }
}