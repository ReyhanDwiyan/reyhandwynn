const btn = document.getElementById("btn");
const img = document.getElementById("img");

btn.addEventListener("click", () => {
  const x = randInt(60),
    y = randInt(50);
  const question = `What is ${x} + ${y}`;
  const answer = x + y;
  const usrInput = Number(prompt(question));
  if (usrInput === answer) {
    img.src = "asset/background2.jpeg";
    btn.remove();
  }
});

function randInt(n) {
  return Math.floor(Math.random() * n);
}
