
var outcomeIndex = 0;
var currentOutcome;
var aquiredItems = ['NO_ITEM'];

var bottomAnchor = document.getElementById('bottom-anchor');
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
function printOutcome(){
  console.log('hit');
  var sb = '<hr><p>' + currentOutcome.info+'<br>';
  for(let i = 0; i < currentOutcome.choices.length; i++){
    sb += '<br><a onclick = "handleChoiceClick('+i+')">'+currentOutcome.choices[i].info+'</a>';
  }
  sb += '</p><br>';

  messages.innerHTML += sb;
}
function printWarning(text){
  var sb = '<p>' + text +'<br></p>';
  messages.innerHTML += sb;
}
function handleChoiceClick(choice){
  updateOutcome();
  checkChoice(choice);
  updateOutcome();
  
  // Add the message to the chatbox
  printOutcome();
  bottomAnchor.scrollIntoView();
}

function updateOutcome(){
  currentOutcome = Story.outcomes[outcomeIndex];
}

function checkChoice(choice){
  var unknownID = true;

  for(let i = 0; i < currentOutcome.choices.length; i++){
    if(currentOutcome.choices[i].id==choice){
      printWarning('You entered <b>'+currentOutcome.choices[i].info+'</b>.');
      if(hasItem(currentOutcome.choices[i].requiredItem)){
        outcomeIndex = currentOutcome.choices[i].outcomePointer;
        if(hasItem(currentOutcome.choices[i].givenItem)==false){
          aquiredItems.push(currentOutcome.choices[i].givenItem);
          printWarning('You aquired a <b>'+currentOutcome.choices[i].givenItem+'</b>');
        }

        i = currentOutcome.choices.length;
      }else{
        printWarning('You lack the required item.');
      }
      
      unknownID = false;
    }
  }
  if(unknownID){
    printWarning('That choice does not exist.');
  }
}

function hasItem(requiredItem){
  for(let i = 0; i < aquiredItems.length; i++){
    if(aquiredItems[i]==requiredItem){
      return true;
    }
  }
  return false;
}
