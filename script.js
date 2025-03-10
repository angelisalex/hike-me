// JavaScript to open the modal
document.getElementById("openModalBtn").onclick = function () {
  document.getElementById("modal").style.display = "block";
};

// JavaScript to close the modal
document.getElementsByClassName("close").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};
