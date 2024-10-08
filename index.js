document.getElementById("delivery").addEventListener("click", function () {
    switchActive("delivery", "pickup");
  });
  
  document.getElementById("pickup").addEventListener("click", function () {
    switchActive("pickup", "delivery");
  });
  
  function switchActive(activeId, inactiveId) {
    document.getElementById(activeId).classList.add("inactive");
    document.getElementById(activeId).classList.remove("active");
  
    document.getElementById(inactiveId).classList.remove("inactive");
    document.getElementById(inactiveId).classList.add("active");
  }