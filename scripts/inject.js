function insertButton() {
  const $button = document.getElementById("linkNamu");
  if ($button) {
    return;
  }

  const button = document.createElement("button");
  button.id = "linkNamu";
  button.textContent = "LinkNamu";
  button.style.position = "fixed";
  button.style.bottom = "50px";
  button.style.left = "50px";
  button.style.padding = "10px";
  button.style.background = "#ffffff";
  button.style.color = "#4f4f4f";
  button.style.border = "1px solid";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.addEventListener("click", function () {
    window.location.href = "https://kc709aacd7d14a.user-app.krampoline.com/";
  });

  let $body = document.querySelector("body");
  $body.appendChild(button);
}

function removeButton() {
  const $button = document.getElementById("linkNamu");
  if ($button) {
    $button.remove();
  }
}

function handle(message) {
  if (message === "ON") {
    insertButton();
  } else if (message === "OFF") {
    removeButton();
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  handle(request.message);
});

chrome.storage.local.get(["turn"], function (result) {
  handle(result.turn);
});
