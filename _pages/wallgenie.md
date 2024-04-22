---
layout: page
title: Wall Genie
permalink: /wallgenie
comments: false
---

### Announcing Wall•Genie! 
The easiest way to create unique, one-of-a-kind abstract wallpapers using the power of Generative AI.  

It works like magic ✨

**Coming Soon to the App Store!**
![WallGenie Samples](assets/images/WallGenie/promo2.png)  
**Images are real examples of wallpapers created using Wall•Genie*

---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>FAQ - Echodots</title>
    <style>
        .faq-question {
            cursor: pointer;
            color: #1b9963; /* Adjust the color to fit your design */
            margin-bottom: 5px;
        }

        .faq-question:hover {
            text-decoration: underline;
        }

        .faq-answer {
            display: none;
            margin-top: 5px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

<h4 id="faq">FAQ</h4>

<div class="faq-item">
    <h6 class="faq-question">What engine is being used for image generation?</h6>
    <p class="faq-answer">
        Wall•Genie is using the ChatGPT API to generate images using the latest DALL•E 3 engine.
    </p>
</div>

<div class="faq-item">
    <h6 class="faq-question">What prompt is Wall•Genie using, and can it be customized?</h6>
    <p class="faq-answer">
        Wall•Genie's prompt has been rigorously tested and refined to provide the best results using the variables you select during image generation.  This prompt is not publically available or editable. 
    </p>
</div>

<div class="faq-item">
    <h6 class="faq-question">What is the generated image resolution?</h6>
    <p class="faq-answer">
       Wall•Genie is generating images at the highest resolution that DALL•E allows for portait images which is 1024x1792.
    </p>
</div>

<div class="faq-item">
    <h6 class="faq-question">Does Wall•Genie allow for creating iPad and Desktop wallpapers?</h6>
    <p class="faq-answer">
       At this time, the app's primary focus is creating wallpapers for mobile.
    </p>
</div>

<div class="faq-item">
    <h6 class="faq-question">Can I change my subscription tier?</h6>
    <p class="faq-answer">
        To change your subscription tier, go to Info > Manage Subscription
    </p>
</div>

<div class="faq-item">
    <h6 class="faq-question">Does Wall•Genie support Family Sharing?</h6>
    <p class="faq-answer">
        Family Sharing is not supported at this time.
    </p>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    // Initially hide all answers
    var faqAnswers = document.querySelectorAll(".faq-answer");
    faqAnswers.forEach(function(answer) {
        answer.style.display = "none";
    });

    // Add click event listeners to questions
    var faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(function(question) {
        question.addEventListener("click", function() {
            var answer = this.nextElementSibling;
            answer.style.display = answer.style.display === "none" ? "block" : "none";
        });
    });
});

</script>

</body>
</html>

---
<h4 id="support">Support</h4>
**Supported Devices**: iPhone  
**Apple App ID**: 6496679681  
**Category**: Graphics & Design  
**Developer**: rakTech LLC  
**Contact**: support@raktech.app  