/* For Testing */
/* function Calculate() {
    document.getElementById("ResultBar").innerHTML = "Hello World";
  } */

  function Calculate() {
    var val1 = document.getElementById("InputNumber1");
    var val2 = document.getElementById("Operator");
    var optval = val2.value;
    var text = val2.options[val2.selectedIndex].text;
    var val3 = document.getElementById("InputNumber2");

    if (val1.value !== null && val1.value === "") {
        document.getElementById("ResultBar").innerHTML = "Input Number 1";
        document.getElementById("InputNumber1").focus();
        /* document.getElementById('ResultBar').style.color = "Yellow"; */   /* Text Color */
        document.getElementById('ResultBar').style.backgroundColor  = "#ffbf80";
    }
    else if (val2.value !== null && val2.value === "") {
        document.getElementById("ResultBar").innerHTML = "Select an Operator";
        document.getElementById("Operator").focus();
        document.getElementById('ResultBar').style.backgroundColor  = "#ffbf80";
    }
    else if (val3.value !== null && val3.value === "") {
        document.getElementById("ResultBar").innerHTML = "Input Number 2";
        document.getElementById("InputNumber2").focus();
        document.getElementById('ResultBar').style.backgroundColor  = "#ffbf80";
    }

    else if (optval === '+'){
        /* document.getElementById("ResultBar").innerHTML = + val1.value + + val3.value; */
        var output = parseInt(val1.value) + parseInt(val3.value);
        document.getElementById("ResultBar").innerHTML = "Result: " + output
        document.getElementById('ResultBar').style.backgroundColor  = "#adff2f";
    }
    else if (optval === '-'){
        var output = Number(val1.value) - Number(val3.value);
        document.getElementById("ResultBar").innerHTML = "Result: " + output
        document.getElementById('ResultBar').style.backgroundColor  = "#adff2f";
    }
    else if (optval === '*'){
        var output = Number(val1.value) * Number(val3.value);
        document.getElementById("ResultBar").innerHTML = "Result: " + output
        document.getElementById('ResultBar').style.backgroundColor  = "#adff2f";
    }
    else if (optval === '/'){
        var output = Number(val1.value) / Number(val3.value);
        document.getElementById("ResultBar").innerHTML = "Result: " + output
        document.getElementById('ResultBar').style.backgroundColor  = "#adff2f";
    }
        
    else {
        alert ('Thank you for being with us');
    }
  }