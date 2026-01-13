const d20Dice = document.getElementById("D20-div");
const diceRollSound = new Audio("assets/sound_effects/dice_roll.mp3");
const nat1SoundEffect = new Audio("assets/sound_effects/sadTrombone.mp3");
const nat20SoundEffect = new Audio("assets/sound_effects/fanfare.mp3");

var isD20Rolling = false;
d20Dice.addEventListener("click", () => {
  if (isD20Rolling) return;
  rollDice(document.getElementById("d20-img"), 20);
});

async function rollDice(img, max) {
  isD20Rolling = true;
  const randomRotation = 360 * Math.floor(Math.random() * 4 + 3);
  var animationLength = 0.3 * (randomRotation / 360); // .3s per full rotation
  const diceNumberSpan = d20Dice.querySelector(".dice-number");
  diceNumberSpan.textContent = "";

  img.style.transition = `transform ${animationLength}s ease`;
  img.style.transform = `rotate(${randomRotation}deg)`;
  diceRollSound.play();

  await waitForDiceRollAnimation(animationLength);

  //Reset rotation
  img.style.transition = "transform 0s";
  img.style.transform = `rotate(0deg)`;

  //Reset Flag
  isD20Rolling = false;

  var rollResult = Math.floor(Math.random() * max) + 1;
  diceNumberSpan.textContent = rollResult;
  if (rollResult === 20) {
    nat20SoundEffect.play();
  } else if (rollResult === 1) {
    nat1SoundEffect.play();
  }
}
async function waitForDiceRollAnimation(animationLength) {
  return new Promise((resolve) => setTimeout(resolve, animationLength * 1000));
}
