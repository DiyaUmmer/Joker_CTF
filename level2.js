const correctHash = "62d9a0417248090a201042a912ebd2ff";

document.body.addEventListener('click', function reveal() {
  const gameArea = document.getElementById('gameArea');
  gameArea.style.display = 'block';
  gameArea.innerHTML = `
    <p>I forgot my sweetheart's name. Do you remember that?</p>
    <input type="text" id="answer" placeholder="Type your answer..." />
    <br>
    <button id="submitBtn">Submit</button>
  `;
  document.body.style.cursor = 'default';
  document.body.removeEventListener('click', reveal);

  document.getElementById('submitBtn').addEventListener('click', checkAnswer);
});

function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const inputHash = CryptoJS.MD5(input).toString();

  if (inputHash === correctHash) {
    alert("🎉 HAHAHA!!! YOU GOT IT! Here is your Flag: flag{joker_catch3d_you}");
  } else {
    alert("❌ Wrong answer. You can't do this to me.");
  }
}
