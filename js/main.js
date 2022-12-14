
var outcomeIndex = 0;
var currentOutcome;

var input = document.getElementById('choice-input');
var messages = document.getElementById('story-messages');
var Story={};
$.getJSON('./Story.json', function(data) { 
  Story=data;
  messages.innerHTML += '<h1>' + Story.title + '</h1>';
  messages.innerHTML += '<p>' + Story.info + '</p>';
  updateOutcome();
  printOutcome();
}); 

//var Outcome = storyJson.Story.Outcome[0];

//const Story = JSON.parse(jsonData);
// Listen for the user to press enter in the input field
input.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    // If the user pressed enter, get the value from the input field
    var value = input.value;
    updateOutcome();
    checkChoice(value);
    updateOutcome();

    // Clear the input field
    input.value = '';
    
    // Add the message to the chatbox
    printOutcome();
    input.scrollIntoView();
  }
});
function updateOutcome(){
  currentOutcome = Story.Outcome[outcomeIndex];
  console.log(currentOutcome);
}
function printOutcome(){
  var sb = '<hr><p>' + currentOutcome.info+'<br>';
  for(let i = 0; i < currentOutcome.Choice.length; i++){
    sb += '<br>' + currentOutcome.Choice[i].info;
  }
  sb += '</p>';
  messages.innerHTML += sb;
}
function checkChoice(choice){
  var unknownID = true;
  for(let i = 0; i < currentOutcome.Choice.length; i++){
    if(currentOutcome.Choice[i].id==choice){
      outcomeIndex = currentOutcome.Choice[i].outcomePointer;
      unknownID = false;
      i = currentOutcome.Choice.length;
    }
  }
  if(unknownID){
    console.log("unknown choice");
  }
}
