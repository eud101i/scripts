// ==UserScript==
// @name         Dynamic Tab Titles for OpenAI Chat
// @namespace    http://your-namespace.com
// @version      0.1
// @description  Set the tab title dynamically for OpenAI Chat
// @author       Your Name
// @match        https://chat.openai.com/c/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to extract the chat title from the HTML
    function extractChatTitle() {
        var titleElement = document.querySelector('.relative.grow.overflow-hidden.whitespace-nowrap');
        if (titleElement) {
            // Extract the text content from the nested div
            var nestedDiv = titleElement.querySelector('.relative.grow.overflow-hidden.whitespace-nowrap div');
            if (nestedDiv) {
                return nestedDiv.innerText.trim();
            }
        }
        return null;
    }

    // Update the tab title with the extracted chat title
    function updateTabTitle() {
        var chatTitle = extractChatTitle();
        if (chatTitle) {
            document.title = chatTitle + ' - ChatGPT';
        }
    }

    // Update tab title on script execution
    updateTabTitle();

    // Optionally, you can set up an interval to update the title periodically
    // setInterval(updateTabTitle, 5000); // Uncomment and adjust the interval as needed
})();
