function Cal(){
    var num1 = document.getElementById('opr1').value;
    var num2 = document.getElementById('opr2').value;
    var opr  = document.getElementById('opr').value;
    if(opr == '+'){
        var res = parseInt(num1) + parseInt(num2);
     }
    if(opr == '-'){
        var res = parseInt(num1)-parseInt(num2);
    }
    if(opr == '*'){
        var res = parseInt(num1)*parseInt(num2);
    }
    if(opr == '/'){
        var res = parseInt(num1)/parseInt(num2);
    }
    document.getElementsByClassName('out')[0].innerHTML = res;
}