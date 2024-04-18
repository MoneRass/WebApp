function showTime() {
    const newTime = new Date();
    setTimeout("showTime()", 1000);
    postMessage(newTime);
}

showTime();