const clock = document.createElement("div");
clock.classList.add("clock_extension");

document.body.append(clock);

setInterval(updateClock, 1000);


document.addEventListener("keydown", event => {
  if(event.code === "Enter") {
    clock.classList.toggle('hide')
    
  }
})

function updateClock() {
  const date = new Date();

  const time = new Intl.DateTimeFormat("ru-Ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date);

  clock.innerText = time;
}
