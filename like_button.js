


const LikeBtn = {
  count: 0,
}

const Calculator = {
  display: "",
  input: 0,
  calcTmp: 0,
  calcTmp2: null,
  neg: false,
  plus: false,
  minus: false,
  mult: false,
  div: false,
  sign: false,
  Eq: false,
  dec: false,
};

let updateCalcDisp = function(calcTmp) {
  let opDisp = "";
  if (Calculator.plus === true) {opDisp = "+"; }
  else if (Calculator.minus === true) {opDisp = "-"; }
  else if (Calculator.mult === true) {opDisp = "*"; }
  else if (Calculator.div === true) {opDisp = "/"; }
  Calculator.calcTmp = calcTmp;
  Calculator.display = Calculator.calcTmp + opDisp;
  if (Calculator.calcTmp2 !== null) {
    Calculator.display = "" + Calculator.calcTmp2 + opDisp + Calculator.calcTmp;
  }
  document.querySelector("#CalcDisplay").innerText = Calculator.display;
}

let calcInput = function(calcIn) {
  if (Calculator.Eq === true) {
    Calculator.calcTmp = 0;
    Calculator.Eq = false;
  } 

  if (Calculator.dec === true) {
    tmp = Calculator.calcTmp  + (calcIn * .1);
    updateCalcDisp(tmp);
  } else {
    tmp = (Calculator.calcTmp * 10) + calcIn;
    updateCalcDisp(tmp);
  }
}

let calcInput1 = function(eventObject) {
  calcInput(1); 
}

let calcInput2 = function(eventObject) {
  calcInput(2); 
}

let calcInput3 = function(eventObject) {
  calcInput(3); 
}

let calcInput4 = function(eventObject) {
  calcInput(4); 
}

let calcInput5 = function(eventObject) {
  calcInput(5); 
}

let calcInput6 = function(eventObject) {
  calcInput(6); 
}

let calcInput7 = function(eventObject) {
  calcInput(7); 
}

let calcInput8 = function(eventObject) {
  calcInput(8); 
}

let calcInput9 = function(eventObject) {
  calcInput(9); 
}

let calcInput0 = function(eventObject) {
  calcInput(0); 
}

let calcInputMinus = function(eventObject) {
  if (Calculator.minus === true) {return;}
  Calculator.calcTmp2 = Calculator.calcTmp;
  Calculator.calcTmp = "";
  Calculator.minus = true;
  Calculator.dec = false;
  updateCalcDisp(Calculator.calcTmp)
}

let calcInputPlus = function(eventObject) {
  if (Calculator.plus === true) {return;}
  Calculator.calcTmp2 = Calculator.calcTmp;
  Calculator.calcTmp = "";
  Calculator.plus = true;
  Calculator.dec = false;
  updateCalcDisp(Calculator.calcTmp)
}

let calcInputMult = function(eventObject) {
  if (Calculator.mult === true) {return;}
  Calculator.calcTmp2 = Calculator.calcTmp;
  Calculator.calcTmp = "";
  Calculator.mult = true;
  Calculator.dec = false;
  updateCalcDisp(Calculator.calcTmp)
}

let calcInputDiv = function(eventObject) {
  if (Calculator.div === true) {return;}
  Calculator.calcTmp2 = Calculator.calcTmp;
  Calculator.calcTmp = "";
  Calculator.div = true;
  Calculator.dec = false;
  updateCalcDisp(Calculator.calcTmp)
}

let calcInputEquals = function(eventObject) {
  Calculator.Eq = true;
  Calculator.dec = false;
  if (Calculator.minus === true) {
    Calculator.calcTmp = Calculator.calcTmp2 - Calculator.calcTmp;
    Calculator.calcTmp2 = null;
    Calculator.minus = false;
    updateCalcDisp(Calculator.calcTmp);
  }
  if (Calculator.plus === true) {
    Calculator.calcTmp = Calculator.calcTmp2 + Calculator.calcTmp;
    Calculator.calcTmp2 = null;
    Calculator.plus = false;
    updateCalcDisp(Calculator.calcTmp);
  }
  if (Calculator.mult === true) {
    Calculator.calcTmp = Calculator.calcTmp2 * Calculator.calcTmp;
    Calculator.calcTmp2 = null;
    Calculator.mult = false;
    updateCalcDisp(Calculator.calcTmp);
  }
  if (Calculator.div === true) {
    Calculator.calcTmp = Calculator.calcTmp2 / Calculator.calcTmp;
    Calculator.calcTmp2 = null;
    Calculator.div = false;
    updateCalcDisp(Calculator.calcTmp);
  }
}

let calcInputNeg = function(eventObject) {
  if (Calculator.plus === true) {
    alert("going nowhere")
    Calculator.plus = false;
    Calculator.minus = true;
    updateCalcDisp(Calculator.calcTmp)
  } else if (Calculator.minus === true) {
    alert("going somewhere")
    Calculator.minus = false;
    Calculator.plus = true;
    updateCalcDisp(Calculator.calcTmp)
  } else if (Calculator.mult === true || Calculator.div === true) {
    alert("going dumb")
    Calculator.calcTmp2 *= -1;
    updateCalcDisp(Calculator.calcTmp);
  } else {
    Calculator.calcTmp *= -1;
    updateCalcDisp(Calculator.calcTmp);
  }
}

let calcInputClear = function(eventObject) {
    Calculator.calcTmp = "";
    updateCalcDisp(Calculator.calcTmp);
}

let calcInputAllClear = function(eventObject) {
  Calculator.calcTmp2 = null;
  Calculator.calcTmp = "";
  Calculator.plus,Calculator.minus,Calculator.mult,Calculator.div = false;
  Calculator.display = "";
  document.querySelector("#CalcDisplay").innerText = Calculator.display;
}

let calcInputDec = function(eventObject) {
  Calculator.dec = true;
}

//document.querySelector("#CalcDisplay").innerText = calcTmp;  

var likeHandler = function(eventObject) {
  console.log(eventObject);
  LikeBtn.count++;
  document.querySelector("#likes").innerText = "Likes: " +  LikeBtn.count;             //displays likes on html page
}
document.querySelector("#like_button").addEventListener("click",likeHandler);

document.querySelector("#calc1").addEventListener("click",calcInput1);
document.querySelector("#calc2").addEventListener("click",calcInput2);
document.querySelector("#calc3").addEventListener("click",calcInput3);
document.querySelector("#calc4").addEventListener("click",calcInput4);
document.querySelector("#calc5").addEventListener("click",calcInput5);
document.querySelector("#calc6").addEventListener("click",calcInput6);
document.querySelector("#calc7").addEventListener("click",calcInput7);
document.querySelector("#calc8").addEventListener("click",calcInput8);
document.querySelector("#calc9").addEventListener("click",calcInput9);
document.querySelector("#calc0").addEventListener("click",calcInput0);
document.querySelector("#calcEquals").addEventListener("click",calcInputEquals);
document.querySelector("#calcMinus").addEventListener("click",calcInputMinus);

document.querySelector("#calcDiv").addEventListener("click",calcInputDiv);
document.querySelector("#calcPlus").addEventListener("click",calcInputPlus);
document.querySelector("#calcMult").addEventListener("click",calcInputMult);
document.querySelector("#calcNeg").addEventListener("click",calcInputNeg);
document.querySelector("#calcDec").addEventListener("click",calcInputDec);
document.querySelector("#calcClear").addEventListener("click",calcInputClear);
document.querySelector("#calcAllClear").addEventListener("click",calcInputAllClear);





