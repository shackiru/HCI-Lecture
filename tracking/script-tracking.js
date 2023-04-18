const activeButton = document.getElementById("active-order");
const historyButton = document.getElementById("history-order");
const statusButton = document.getElementById("status");
const statusButton1 = document.getElementById("status2");
const descButton = document.getElementById("desc");
const descButton1 = document.getElementById("desc2");

historyButton.onclick = function(){
    activeButton.style.color = "#000000";
    historyButton.style.color = "#FFD74B";
    statusButton.style.opacity = "0";
    statusButton1.style.opacity = "100";
    descButton.style.opacity = "0";
    descButton1.style.opacity = "100";
}

activeButton.onclick = function () {
    activeButton.style.color = "#FFD74B";
    historyButton.style.color = "#000000";
    statusButton.style.opacity = "100";
    statusButton1.style.opacity = "0";
    descButton.style.opacity = "100";
    descButton1.style.opacity = "0";
}