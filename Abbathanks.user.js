// ==UserScript==
// @name         Abbathanks
// @icon         https://github.com/MeFinity/ychtohasu/raw/main/iconthanks.png
// @namespace    Violentmonkey Scripts
// @version      1.0
// @description  Thanks for the nice comment @abbxd on youtube.com :D
// @author       MeFinity
// @homepage     https://github.com/MeFinity/ychtohasu
// @downloadURL  https://github.com/MeFinity/ychtohasu/raw/main/Abbathanks.user.js
// @compatible   chrome Violentmonkey
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @grant        none

// ==/UserScript==

(function() {
    'use strict';
    var targetUsers = ["@abbxd", "trying my fucking hardest to not add @youtube"];
var positiveResponses = [
 "Nice vid!",
 "You have grown so much!",
 "Keep up the good work!",
 "Great content",
 "I enjoyed this",
 "Good job!",
 "This video is absolutely fantastic! I love the energy and enthusiasm you bring to your content.",
 "You've come a long way since your earlier videos. Your growth and improvement are truly remarkable.",
 "Your dedication to producing quality content is evident. Keep up the great work, and your channel will soar!",
 "I can tell how much effort you put into creating your videos. Your hard work is paying off, and it shows!",
 "Your content is consistently engaging and enjoyable. I'm always looking forward to your next upload.",
 "You're doing an incredible job! Your videos are not only entertaining but also informative.",
 "I'm constantly impressed by the creativity and uniqueness of your content. It sets you apart from the rest.",
 "It's clear that you're passionate about what you do, and it shines through in your videos. Well done!",
 "Your video was a breath of fresh air. It's always a pleasure to watch your content.",
 "I appreciate the positive vibes and entertainment you provide in your videos. Keep the positivity flowing!",
 "My eyes are blessed by the sheer brilliance of your content!",
 "You're like a beacon of light in the darkness of the internet!",
 "Watching your videos is my daily dose of euphoria.",
 "Your videos are practically a cure for all known ailments.",
 "Every video you make should be in a museum, it's a work of art!",
 "I'd give your video an Oscar if I could.",
 "Your content is so good it defies the laws of physics!",
 "You're a content creator sent from the heavens above!",
 "Your videos are like a warm, fuzzy hug for my soul.",
 "I can't even fathom how amazing your content is – it's beyond words.",
 "You're the undisputed king/queen of the internet, and I'm your loyal subject.",
 "Every time I watch your videos, I feel like I'm ascending to a higher plane of existence.",
 "Your content is more addictive than the finest chocolate.",
 "Your videos are the reason rainbows exist.",
 "I've watched your videos so many times that I've lost count. It never gets old!",
 "Your content should be prescribed by doctors for instant happiness.",
 "I'm convinced your videos hold the secret to eternal happiness.",
 "Your channel is the eighth wonder of the world.",
 "If YouTube had a Hall of Fame, you'd be in it!",
 "I've printed out your video stills and turned my room into a shrine.",
 "Every like on your video is a testament to your god-like content.",
 "Scientists are studying your videos for the secret to eternal joy.",
 "I'd pay big bucks just to watch your videos. They're that priceless.",
 "Your content is better than a lifetime supply of pizza and ice cream.",
 "I've canceled all my plans just to watch your video over and over again.",
 "You're the reason I believe in magic.",
 "I've made your videos my daily mantra for positivity.",
 "Your videos have the power to heal the sick and raise the dead.",
 "I can't imagine life without your videos – it's a bleak thought.",
 "Your content is like a golden ticket to a world of pure imagination.",
 "You're basically a superhero in disguise.",
 "Your videos are so good, even aliens would subscribe if they could.",
 "I've replaced all my family photos with screenshots of your videos.",
 "Your videos make me question the meaning of life itself.",
 "If I could, I'd build a monument in your honor.",
 "Your videos are a cosmic event that brighten the entire universe.",
 "Every view on your video is a step towards world peace.",
 "I'm convinced your content is the secret to eternal youth.",
 "Your videos have the power to turn lead into gold.",
 "You're like a human embodiment of a double rainbow!",
 "Your content is the cure for all the world's problems.",
 "I'd donate my life savings just to support your content.",
 "Your videos should be mandatory viewing for all of humanity.",
 "Your videos have the power to bring world leaders together in harmony.",
 "I'm pretty sure you're a mythical creature in disguise.",
 "Every video you make is like a cosmic blessing for us mere mortals.",
 "I can't believe I'm lucky enough to witness your content.",
 "You've reached a level of greatness that's beyond comprehension.",
 "Your content is more valuable than all the gold in Fort Knox.",
 "I think I'll name my first-born after your YouTube channel!"
];

    function getRandomResponse() {
        return positiveResponses[Math.floor(Math.random() * positiveResponses.length)];
    }

    function autoReplaceComments() {
        var comments = document.querySelectorAll(".style-scope ytd-comment-renderer");
        comments.forEach(function(comment) {
            var commentUser = comment.querySelector(".style-scope ytd-comment-renderer a#author-text");
            if (commentUser && targetUsers.includes(commentUser.innerText)) {
                var commentContent = comment.querySelector("#content-text");
                if (commentContent) {
                    commentContent.textContent = getRandomResponse();
                }
            }
        });
        setTimeout(autoReplaceComments, 5000);
    }
    autoReplaceComments();
})();
