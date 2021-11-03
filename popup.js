// Write JavaScript here 
//An array of puppy images. 0th index 
//is a pic with zero the dog, 6th index
//has a pic with multiple puppies

let dogImages = [ 
"https://images.app.goo.gl/YuUJb3yHBBqeJTDd9",
"https://images.app.goo.gl/JsiAFP7g1Fby2QyK9",
"https://images.app.goo.gl/kXj9d7q2dqNmToJJ7",
"https://images.app.goo.gl/AwwWh5qdZPECMaQn7",
"https://images.app.goo.gl/mtx7NnW5cViQPJYA8",
"https://images.app.goo.gl/zthP1MjpgDsFZTk98",
"https://images.app.goo.gl/EUDQP4wigFzk5DSP9"
];


//Definition of a task that a user submits

var numberOfTasks = 0;

let listOfTasks = [];
//key
//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

function setDogPic() {
    const dogTaskPic = document.getElementById("dogPicture")
    
    if(numberOfTasks > 0) {
        dogTaskPic = dogImages[numberOfTasks]
    }
};

 let addNewTask =(ev)=> {
  ev.preventDefault;
  let task = {
    id: Date.new(),
    task_Description: document.getElementById("task_Description").value,
    isCompleted: document.getElementById("isCompleted").value
  }
  
  listOfTasks.push(task);
  //hard coded value of form
  document.forms[0].reset()
  
  if (typeof window !== 'undefined') {
  localStorage.setItem('MyListOfTasks', JSON.stringify(listOfTasks));
  };
};

document.body.onload = Looper;
function Looper() {
var i=0;
var stop=listOfTasks.length;
for (i=0;i<stop;i++) {  
     var v = document.createElement("div");
     var content =         document.createTextNode(listOfTasks[i].task_Description);

    v.appendChild(content); document.getElementById('taskDisplay').appendChild(v);
  }
}
