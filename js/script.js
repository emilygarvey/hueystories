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
    "Explain a Chinese belief that you follow."
];

let promptChoice = prompts[Math.floor(Math.random()*prompts.length)];
$("#prompt").text(promptChoice);

$("form").on('submit', function(e) {
    e.preventDefault();
    storiesData.name = $("#name").val();
    storiesData.story = $("#story").val();
    $("#name").val('');
    $("#story").val('');
    var storiesReference = database.ref('stories');
    storiesReference.push(storiesData);
    $(".main").html("<h3>Thank you for submitting your story.</h3>");
  });