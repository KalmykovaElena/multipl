const first = document.querySelector(".first-number"),
  second = document.querySelector(".second-number"),
  result = document.querySelector(".result"),
  checkAll = document.querySelector(".all"),
  right = document.querySelector(".right"),
  wrong = document.querySelector(".wrong"),
  firstDisplay = document.querySelector(".hello"),
  winner = document.querySelector(".winner"),
  textBefore = document.querySelector(".textBefore"),
  rigtAnswer = document.querySelector(".rigtAnswer"),
  numAns = document.querySelector(".numAns")
  

document.querySelector(".start").addEventListener("click", () => {
  if (
    Array.from(document.querySelectorAll(".inp")).some(
      (el) => el.checked == true
    )
  ) {
    // console.log(arr);
    
    getNumber();
    result.focus()
  }
});
function getNumber() {
  let arr = document.querySelectorAll("input.inp:checked");
  checkedValues = Array.from(arr).map((el) => +el.value);
  first.innerHTML =
    checkedValues[Math.floor(Math.random() * checkedValues.length)];
  //   console.log(checkedValues)
  second.innerHTML = Math.floor(Math.random() * 10);
}
countRight = 0;
countWrong = 0;
countGame = 0;
function checkNumber() {
  if (countGame == 9) {
    firstDisplay.style.display = "none";
    getWinner();
  } else {
    countGame += 1;
    answer = first.innerHTML * second.innerHTML;

    if (answer == result.value) {
      countRight += 1;
      right.innerHTML = countRight;
    } else {
      countWrong += 1;
      wrong.innerHTML = countWrong;
      numAns.innerHTML=answer
      firstDisplay.style.display='none'
      rigtAnswer.style.display='block'
      window.addEventListener("click", () => {
        firstDisplay.style.display='block'
      rigtAnswer.style.display='none'
    });
    window.addEventListener("keydown", (event) => {
      if (event.keyCode == 13) {
        firstDisplay.style.display='block'
        rigtAnswer.style.display='none'
      }
    });
    }
    result.value = null;
    getNumber();
  }
}
function getWinner() {
  winner.style.display = "block";
  if (countRight > countWrong) {
    winner.innerHTML = "Умница";
  } else if (countRight < countWrong) {
    winner.innerHTML = "Ой ты проиграла";
  }
  window.addEventListener("click", () => {
    location.reload()
});
window.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
  location.reload()
  }
});
}


window.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    if (
      Array.from(document.querySelectorAll(".inp")).some(
        (el) => el.checked == true
      )
    ) {
      checkNumber();
      getNumber();
      result.focus()
    }
  }
  
  
});

checkAll.addEventListener("click", () => {
  let arr = document.querySelectorAll(".inp");
  //    Array.from(arr).map((el)=>{
  if (Array.from(arr).every((el) => el.checked == true))
    Array.from(arr).map((el) => (el.checked = false));
  else Array.from(arr).map((el) => (el.checked = true));
});
// result.addEventListener("")
