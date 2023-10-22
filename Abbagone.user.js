// ==UserScript==
// @name         Abbagone
// @namespace    Violentmonkey Scripts
// @version      1.0
// @description  Hide @abbxd's youtube comments
// @author       MeFinity
// @homepage     https://github.com/MeFinity/ychtohasu
// @downloadURL  https://github.com/MeFinity/ychtohasu/raw/main/Abbagone.user.js
// @compatible   chrome Violentmonkey
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @grant        none

// ==/UserScript==

(function() {
    'use strict';
    var targetUsers = ["@abbxd", "trying my fucking hardest to not add @youtube"];

    function autoHideComments() {
        var comments = document.querySelectorAll(".style-scope ytd-comment-renderer");
        comments.forEach(function(comment) {
            var commentUser = comment.querySelector(".style-scope ytd-comment-renderer a#author-text");
            if (commentUser && targetUsers.includes(commentUser.innerText)) {
                comment.style.display = "none";
            }
        });
        setTimeout(autoHideComments, 5000);
    }
    autoHideComments();
})();
