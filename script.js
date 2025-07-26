const app = document.getElementById("app");

function showStartScreen() {
  app.innerHTML = `
    <h2>👉Tap the Love button!👈</h2>
    <h3>🎀 Madam Ji 🎀</h3>
    <button onclick="showSecondPage()">Love</button>
  `;
}
function showSecondPage() {
  app.innerHTML = `
    <h2>Hello Madam Ji 😊</h2>
    <p>I want to ask you something...</p>
    <button onclick="showThirdPage()">👉Click here👈</button>
  `;
}

function showThirdPage() {
  app.innerHTML = `
    <h2>Are you Alone right now?</h2>
    <button id="yesBtn" onclick="showFourthPage()">Yes😍</button>
    <button id="noBtn" onclick="handleNo()">No❌</button>
  `;
}

let noClickCount = 0; // Counter to track "No" button clicks

function handleNo() {
  const noBtn = document.getElementById("noBtn");
  noClickCount++;

  // Rotate button by 15 degrees each time
  const rotation = 15 * noClickCount;
  noBtn.style.transform = `rotate(${rotation}deg)`;

  if (noClickCount === 3 || noClickCount === 6) {
    setTimeout(() => {
      alert("Just be alone for now 😉");
    }, 300);
  }
  // Reload the page on 4th click
  if (noClickCount === 4) {
    setTimeout(() => {
      location.reload();
    }, 300); // Optional delay before reload
  }
}
// ------------ for typing text ----------------

function typeTextWithHTML(element, html, callback) {
  let index = 0;
  let temp = "";

  function typeChar() {
    if (index < html.length) {
      if (html.slice(index, index + 4) === "<br>") {
        temp += "<br>";
        element.innerHTML = temp;
        index += 4;
        setTimeout(typeChar, 50);
      } else {
        temp += html.charAt(index);
        element.innerHTML = temp;
        index++;
        setTimeout(typeChar, 50);
      }
    } else if (callback) {
      callback();
    }
  }

  typeChar();
}

function showFourthPage() {
  const app = document.getElementById("app");
  const firstText = `<h2>Yayyy!!😍 Same here, I'm also alone 😌</h2>`;
  const secondText = `<h2>Now that we're both alone😉,<br>How about we date instead? 😄💞</h2>`;

  typeTextWithHTML(app, firstText, () => {
    setTimeout(() => {
      typeTextWithHTML(app, secondText, () => {
        const buttons = `
          <button onclick="showFinalMessage()">Let's go 💘</button>
          <button onclick="showNoResponse()">No 😢</button>
        `;
        app.insertAdjacentHTML("beforeend", buttons);
      });
    }, 800); // pause between messages
  });
}

function showNoResponse() {
  alert(
    "Aww 😢 You broke my little pixel heart 💔...\n\nBut it's okay! I’ll be right here if you change your mind 😉"
  );
}
// --------------------------------------

function showFinalMessage() {
  const app = document.getElementById("app"); // Ensure this is defined
  const now = new Date();

  // Format the time as hh:mm:ss
  const timeString = now.toLocaleTimeString();
  // Format the date as dd.mm.yyyy
  const dateString = now.toLocaleDateString("en-GB");

  app.classList.add("love-bg");
  app.innerHTML = `
    <div>
      <h2>Yay! Thank you Madam Ji for agreeing to be my partner, hehe 😍</h2>
      <p>Current date & time: <strong>${dateString} - ${timeString}</strong></p>
    </div>
  `;
}

// Initialize
showStartScreen();

// -------------- for heart float -------------------
function spawnHearts() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(spawnHearts, 600); // One heart every 800ms
