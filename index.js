const clock = document.createElement("div");
clock.classList.add("clock_extension");

document.body.append(clock);

setInterval(updateClock, 1000);

chrome.storage.local.get(["display"], (result) => {
  if (result.display) {
    clock.classList.remove("hide");
  }
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  clock.classList.toggle('hide') 
  console.log(changes)
})


document.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    console.log(event);
    chrome.storage.local.set({
      display: clock.classList.contains("hide"),
    });
  }
});

function updateClock() {
  const date = new Date();

  const time = new Intl.DateTimeFormat("ru-Ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date);

  clock.innerText = time;
}
