chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "checkPhishing") {
        const url = message.url;
        const isPhishing = url.includes("phish");

        sendResponse({ isPhishing });
    }
    return true;
});