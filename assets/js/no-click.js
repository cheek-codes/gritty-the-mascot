const myElement = document.getElementById("no");

myElement.addEventListener("click", () => {
  // Get a random position for the element
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  // Set the position of the element
  myElement.style.position = "absolute";
  myElement.style.left = x + "px";
  myElement.style.top = y + "px";
});