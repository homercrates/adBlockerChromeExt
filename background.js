chrome.webRequest.onBeforeRequest.addListiner(
    function(details) {return {cancel: true}},
    { urls: ["*://*.zedo.com/*"]},
    ["blocking"]
)