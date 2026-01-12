const d20Dice = document.getElementById("D20-div");
async function rollDice(img, max) {
  const randomRotation = 360 * Math.floor(Math.random() * 4 + 3);
  var animationLength = 0.3 * (randomRotation / 360); // .3s per full rotation
  const diceNumberSpan = d20Dice.querySelector(".dice-number");
  diceNumberSpan.textContent = "";

  img.style.transition = `transform ${animationLength}s ease`;
  img.style.transform = `rotate(${randomRotation}deg)`;

  await waitForDiceRollAnimation(animationLength);

  img.style.transition = "transform 0s";
  img.style.transform = `rotate(0deg)`;

  const roll = Math.floor(Math.random() * max) + 1;
  diceNumberSpan.textContent = roll;
}
async function waitForDiceRollAnimation(animationLength) {
  return new Promise((resolve) => setTimeout(resolve, animationLength * 1000));
}
d20Dice.addEventListener("click", () =>
  rollDice(document.getElementById("d20-img"), 20)
);
