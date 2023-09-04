const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let text = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";
document.querySelector("p").textContent = text;
console.log(text);
let textGood;

const filter_btn = document.querySelector("#bullshit");

filter_btn.addEventListener("click", filter);

function filter() {
  filter_btn.removeEventListener("click", filter);
  textGood = text;
  console.log("original is:", text);

  curseWords.forEach((word) => {
    textGood = textGood.replace(word.bad, word.good);
    // word.good.style.background = "lightgreen";
  });

  console.log("new is:", textGood);
  document.querySelector("p").textContent = textGood;

  //   *** forsøg på at ændre de 3 ord
  if (textGood.includes("const")) {
    // textGood.replace("cosnt", "<b>" + "const");
    // textGood["const"].style.background = "red";
    // const highlight = textGood.split("const");
    // console.log(highlight);
    // textGood
    // document.querySelector("p").style.background = "red";
  }

  //   *** forsøg på alert ***
  //   if (textGood !== text && textGood !== "") {
  //     alert("Bullshit filter applied!");
  //   }
  filter_btn.addEventListener("click", filter);
}
