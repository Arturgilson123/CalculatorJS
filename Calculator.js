function Click(value){
    document.getElementById('result').innerHTML += value;
}
function Equal(){
    try{    
        var CurrentValue = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = eval(CurrentValue).toFixed(2);
    }
    catch(error){
        error = 'Error!';
        document.getElementById('result').innerHTML = error;
    }
}
function ClearAll(){
    document.getElementById('result').innerHTML = '';
}
function Clear(){
    var OutPut = (document.getElementById('result').innerHTML).slice(0,-1);
    document.getElementById('result').innerHTML= OutPut;
}