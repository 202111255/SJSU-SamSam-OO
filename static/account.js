function openTab(event, tabId) {
    var i, tabContent, tabButtons;
  
    // Hide all tab contents
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.add("hidden");
      tabContent[i].classList.remove("active");
    }
  
    // Remove the "active" class from all tab buttons
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active");
    }
  
    // Show the current tab and add "active" class to the button that opened the tab
    document.getElementById(tabId).classList.remove("hidden");
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
  }
  
  // Initialize the first tab as active
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.tab-button').click();
  });
  