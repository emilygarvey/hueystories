/* global $ */
var config = {
    apiKey: "AIzaSyAzZFM6Haoa1iGsoof4AaQywX-xJsA6F9U",
    authDomain: "hueystories.firebaseapp.com",
    databaseURL: "https://hueystories.firebaseio.com",
    projectId: "hueystories",
    storageBucket: "hueystories.appspot.com",
    messagingSenderId: "1098654729439",
    };
firebase.initializeApp(config);
var database = firebase.database();

var storiesData = {};

let prompts = [
    "Tell a family story from when you were a child.",
    "What's the most important thing you learned from your parents?",
    "What's a family recipe that should be remembered?",
    "Describe a member of our family in your own words.",
    "Which annual family gathering do you enjoy the most? Why?",
    "Choose one word to describe Pau-Pau. Explain why.",
    "Share a story from a family vacation.",
    "Tell a story about a sibling.",
    "Explain a Chinese belief that you follow.",
    "What's your go-to dim sum order?",
    "What is the greatest act of kindness someone has ever done for you?",
    "If you had $1Bn and no limitations, what would you do with it?",
    "What's one experience you had that you'll never forget?",
    "What is one of your most embarassing moments?",
    "What's the hardest lesson you've ever had to learn?",
    "What's the last thing that surprised you?",
    "What is one of your most treasured memories?",
    "What do you consider your greatest accomplishment?",
    "What is one of your earliest memories?",
    "Who's the person in your life that makes you believe in good people? Why?",
    "What's the first job you ever had? What did you learn from it?",
    "Who is your hero? Why?",
    "What do you believe happens to you after you die?",
    "What is your personal mantra?",
    "What would consistute a perfect day for you?",
    "For what in your life do you feel most grateful?",
    "What is one quality you hope to pass on to your children?",
    "Who taught you how to drive? What was your first car?",
    "What's your favorite memory from 419 Long Ridge Road?"
    ];

let promptChoice = prompts[Math.floor(Math.random()*prompts.length)];

$("form").on('submit', function(e) {
    e.preventDefault();
    let storyInput = $("#story").val();
    storiesData.prompt = promptChoice;
    storiesData.name = $("#name").val();
    storiesData.story = $("#story").val();
    console.log("empty");
    if (storyInput === '') {
        alert("Please write a story before submitting");
    } else {
        $("#name").val('');
        $("#story").val('');
        var storiesReference = database.ref('stories');
        storiesReference.push(storiesData);
        $(".main").html("<h3>Thank you for submitting your story.<h3> <h4>Email Emily if you have a question you'd like to add.</h4>");
    }
});

  $("#random").click(function() {
    promptChoice = prompts[Math.floor(Math.random()*prompts.length)];
    $("#prompt").text(promptChoice);
  })