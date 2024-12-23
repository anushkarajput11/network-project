document.getElementById("scan-button").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = tab.url;

    document.getElementById("status").textContent = "Scanning URL...";

    // Send the URL to background script for phishing check
    chrome.runtime.sendMessage({ type: "checkPhishing", url: url }, (response) => {
        if (response.isPhishing) {
            document.getElementById("status").textContent = "Warning! Potential phishing site.";
            document.getElementById("status").style.color = "red";
        } else {
            document.getElementById("status").textContent = "This site appears safe.";
            document.getElementById("status").style.color = "green";
        }
    });
});