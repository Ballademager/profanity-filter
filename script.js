const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let textGood = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";
document.querySelector("p").textContent = textGood;
console.log(textGood);
// let textGood;

const filter_btn = document.querySelector("#bullshit");

filter_btn.addEventListener("click", klik);

function klik() {
  if (isItsafe()) {
    console.log("***** It is safe ******");
    document.querySelector("dialog").showModal();
  } else {
    filter();
  }
}
function isItsafe() {
  return !curseWords.some((item) => textGood.includes(item.bad));
}

function filter() {
  console.log("original is:", textGood);

  curseWords.forEach((word) => {
    textGood = textGood.replace(word.bad, `<span>${word.good}</span>`);
    document.querySelector("p").innerHTML = textGood;
    console.log("new is:", textGood);
  });
}
