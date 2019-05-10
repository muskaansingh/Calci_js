function getHistory() {
    return document.getElementById('history-value').innerText;
}

function printHistory(num) {
     document.getElementById('history-value').innerText=num;
}
// printHistory(9*9);

function getOutput(){
    return document.getElementById('output-value').innerText;
}

function printOutput(num) {
    if(num=="")                         // if number is empty 
    {
        document.getElementById('output-value').innerText=num;
    }
    else{
        document.getElementById('output-value').innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num=="-")
    {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en") // this function separated the number by comas
    return value;
}
//  printOutput(8748759941);
function reverseNumberFormat(num){   // this function replace , with an empty character
    return Number(num.replace(/,/g,''));
}
// alert(reverseNumberFormat(getOutput()))
var opr = document.getElementsByClassName('operator');
for(var i=0 ; i<opr.length ; i++)
    opr[i].addEventListener('click' , function(){
        
      if(this.id == "clear")
      {
          printHistory("");
          printOutput("");
      }

      else if(this.id == "backspace")
      {
          var output = reverseNumberFormat(getOutput()).toString();
          if(output)                    // if output has a value
          {
              output = output.substr(0, output.length-1);/* this prints the number by
                                                            eliminating last digit*/
              printOutput(output);
          }
      }
      else{
      var out= getOutput();
      var his= getHistory();
        if(out=="" && his!="")
        {
            if(isNaN(his[his.length-1]))
            {
                his=his.substr(0,his.length-1);
            }
        }

      if(out!="" || his!="")
      {
          out=reverseNumberFormat(out);
          his=his+out;  //when operator is clicked number is added in the history
          if(this.id=="=")
          {
              var res = eval(his);
              printOutput(res);
              printHistory ("");
          }
          else{
              his=his+this.id;
              printHistory(his);
              printOutput("");
          }
      }
      }

    });

var num = document.getElementsByClassName('number');
    for( var i=0 ; i<num.length ; i++)
        num[i].addEventListener('click' , function(){
           var output = reverseNumberFormat(getOutput());
           if(output != NaN)                    // if output is a number
                output = output + this.id;
                printOutput(output);
        });
















