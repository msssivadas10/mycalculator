// var doneCalculation = false;

function clearInput(){
    document.getElementById("input").innerHTML = "";
    document.getElementById("input2").innerHTML = "";
}

function appendText(text){
    var input = document.getElementById("input");
    input.innerHTML += text;
}

function backspaceInput(){
    var input = document.getElementById("input");
    var inputLength = input.innerHTML.length;
    if ( inputLength > 0){
        input.innerHTML = input.innerHTML.slice(0, inputLength-1);
    }
}

function calculate(){
    var input1 = document.getElementById("input");
    var input2 = document.getElementById("input2");

    var expr = input1.innerHTML;

    input1.innerHTML = "";
    input2.innerHTML = expr;

    var expr2 = "";
    for (let i = 0; i < expr.length; i++){
        let x = expr[i];
        if ( x === '%' )
        {
            expr2 += "/100";
        }
        else {
            expr2 += x;
        }
    }

    console.log( expr2 );

    try{
        var out = eval( expr2 );
        out = Math.round( out * 1E+08 ) / 1E+08;
    }
    catch (err){
        out = "Error";
    }
    input1.innerHTML = out;

    // doneCalculation = true;
}