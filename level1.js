const correctOrder = ["3", "5", "1", "2", "4"]; // Replace this with the actual correct data-id order

let user = [];

document.querySelectorAll('.joker').forEach(el => {
  el.addEventListener('click', () => {
    user.push(el.dataset.id);

    if (user.length === 5) {
      if (JSON.stringify(user) === JSON.stringify(correctOrder)) {
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
