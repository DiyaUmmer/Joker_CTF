// SHA-256 hashing helper function
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// The known correct hash for the order "3,1,5,2,4"
const correctHash = "c6e6915c5a5787e90d0b41f5a8b0f66d51eb5c9be435440ab395ef8a228d521f";

let user = [];

document.querySelectorAll('.joker').forEach(el => {
  el.addEventListener('click', async () => {
    user.push(el.dataset.id);
    if (user.length === 5) {
      const userInputString = user.join(",");
      const userHash = await sha256(userInputString);
      if (userHash === correctHash) {
        alert("Oh oh, you got me, but can't catch me 😈");
        setTimeout(() => {
          window.location.href = "level2.html";
        }, 2000);
      } else {
        alert("Wrong order! Try again.");
        user = [];
      }
    }
  });
});
