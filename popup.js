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
    
  }
}
