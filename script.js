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

  if (noClickCount === 3) {
    setTimeout(() => {
      alert("Just be alone for now 😉");
    }, 300);
  }
}


function showFourthPage() {
  app.innerHTML = `
    <h2>Yayyy!!😍 Same here, I'm also alone 😌</h2>
  `;
  setTimeout(() => {
    app.innerHTML = `
      <h2>Now that we're both alone😉,<br>How about we date instead? 😄💞</h2>
      <button onclick="showFinalMessage()">Let's go 💘</button>
      <button onclick="showNoResponse()">No 😢</button>
    `;
  }, 2500);
}

function showNoResponse() {
  alert("No? 😢 Okay... I'll wait.");
}


function showFinalMessage() {
  app.classList.add("love-bg");
  app.innerHTML = `
    <div>
      <h2>Yay! Thank you Madam Ji for agreeing to be my partner, hehe 😍</h2>
      <p>Mark the date: <strong>10.06.2025</strong></p>
    </div>
  `;
}

// Initialize
showStartScreen();

