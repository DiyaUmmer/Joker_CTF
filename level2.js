const correctHash = "62d9a0417248090a201042a912ebd2ff";

document.body.addEventListener('click', function revealGame() {
  const gameArea = document.createElement('div');
  gameArea.style.position = "absolute";
  gameArea.style.top = "50%";
  gameArea.style.left = "50%";
  gameArea.style.transform = "translate(-50%, -50%)";
  gameArea.style.color = "#fff";
  gameArea.style.textAlign = "center";

  gameArea.innerHTML = `
    <p>I forgot my sweetheart's name. Do you remember that?</p>
    <input type="text" id="answer" placeholder="Type your answer..." style="padding:10px; font-size:16px;" />
    <br><br>
    <button onclick="checkAnswer()" style="padding:10px; font-size:16px;">Submit</button>
  `;

  document.body.appendChild(gameArea);
  document.body.style.cursor = "default";
  document.body.removeEventListener('click', revealGame);
});

window.checkAnswer = function () {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const inputHash = CryptoJS.MD5(input).toString();

  if (inputHash === correctHash) {
    alert("🎉 HAHAHA!!! YOU GOT IT! Here is your Flag: flag{joker_catch3d_you}");
  } else {
    alert("❌ Wrong answer. You can't do this to me.");
  }
};
