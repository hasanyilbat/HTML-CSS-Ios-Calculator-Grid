const btns = document.querySelector(".btns");
const reset = document.querySelector(".reset");
let resultScr = document.querySelector(".result");
let result = "";
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiple = document.querySelector(".multiple");

// console.log(resultScr.textContent);
btns.addEventListener("click", (e) => {
  let buttonText = e.target.innerText;

  if (e.target.classList.contains("btn-num")) {
    resultScr.textContent += buttonText;
    result += buttonText;
    resultScr.style.display = "block";
    reset.textContent = "C";
    plus.style.opacity = "1";
    minus.style.opacity = "1";
    divide.style.opacity = "1";
    multiple.style.opacity = "1";
  }

  if (e.target.innerText == "AC" || e.target.innerText == "C") {
    resultScr.textContent = "";
    result = "";
    reset.textContent = "AC";
    plus.style.opacity = "1";
    multiple.style.opacity = "1";
    divide.style.opacity = "1";
    minus.style.opacity = "1";
  }
  if (e.target.innerText == "x") {
    resultScr.style.display = "none";
    resultScr.textContent = "";
    result += "*";
    e.target.style.opacity = "0.4";
    plus.style.opacity = "1";
    divide.style.opacity = "1";
    minus.style.opacity = "1";
  }
  if (e.target.innerText == "+") {
    e.target.style.opacity = "0.4";
    resultScr.style.display = "none";
    resultScr.textContent = "";
    result += "+";
    minus.style.opacity = "1";
    divide.style.opacity = "1";
    multiple.style.opacity = "1";
  }
  if (e.target.innerText == "-") {
    e.target.style.opacity = "0.4";
    resultScr.style.display = "none";
    resultScr.textContent = "";
    result += "-";
    plus.style.opacity = "1";
    multiple.style.opacity = "1";
    divide.style.opacity = "1";
  }
  if (e.target.innerText == "÷") {
    e.target.style.opacity = "0.4";
    resultScr.style.display = "none";
    resultScr.textContent = "";
    result += "/";
    plus.style.opacity = "1";
    multiple.style.opacity = "1";
    minus.style.opacity = "1";
  }
  if (e.target.innerText == ".") {
    resultScr.textContent += ".";
    result += ".";
  }

  if (e.target.innerText == "%") {
    result = eval(result) / 100;
    resultScr.innerHTML = eval(result);
  }
  if (e.target.innerText == "±") {
    resultScr.innerHTML = -1 * resultScr.innerHTML;
    result = "-" + result;
  }
  if (e.target.innerText == "=") {
    let sonuc = 0;
    sonuc = eval(result).toFixed(2);
    console.log(typeof sonuc);
    if (sonuc.includes(".00")) {
      sonuc = sonuc.slice(0, sonuc.length - 3);
    }
    resultScr.innerHTML = sonuc;
  }
});
