localStorage.getItem("point") || insertName();

let point = () => {
  if (localStorage.getItem("point")) {
    return +localStorage.getItem("point");
  } else {
    localStorage.setItem("point", 1);
    return 1;
  }
};

function insertName() {
  const name = prompt("What is your name?");
  console.log(name);
}

function refresh() {
  document.querySelector(".game-text").innerText = `Guess a number from 1-${
    point() ? point() + 1 : 2
  }`;
  point && (document.querySelector(".stage").innerText = `Stage ${point()}`);
}

refresh();
document.querySelector(".input-wrap").addEventListener("submit", submit);

function reset() {
  point = () => 1;
  localStorage.setItem("point", 1);
  refresh();
}

function submit(e) {
  e.preventDefault();
  var inputNum = document.getElementById("number").value;
  var decimal = 10; // One d.p
  var randomNum = Math.round((Math.random() * point() + 1) * decimal) / decimal;
  console.log(randomNum);
  if (inputNum != randomNum) {
    alert("Wrong input");
  } else {
    console.log("Right input " + point());
    localStorage.setItem("point", +localStorage.getItem("point") + 1);
    refresh();
  }
}
