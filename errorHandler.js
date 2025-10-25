function checkError(oColour, errMsg){
    // 6桁以外
    if(oColour.length!=6){
        alert(ERROR_6_DIGITS);
        return false;
    }

    // 16進法で使われない文字が入力されている
    const tmp = [];
    const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f"];
    for(let j=0; j<oColour.length; j++){
        tmp.push(oColour.substr(j, 1));
    }

    for(let i=0; i<oColour.length; i++){
        if(!hex.includes(tmp[i])){
            alert(INVALID_CHAR);
            return false;
        }
    }

    return true;
}