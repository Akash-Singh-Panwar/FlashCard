import react, { useState, useEffect } from "react";
import Task from "../Task.js";
import Card from "../Card/cardDesign1.js";

const Note = () => {
  const [oldArray, newArray] = useState(Task);
  const [count, setCount] = useState(0);
  const [defaultTitle, newTitle] = useState("");
  const [defaultDescription, newDescription] = useState("");
  
  useEffect(() => {
    rendering();
  }, [count]);

  function deleteTask(id) {
    console.log("delete was triggred");
    console.log(id);
    console.log("Before "+oldArray.length);

    // newArray((oldArray) => {
    //   return oldArray.filter((taskItem, index) => {
    //     return index !== id;
    //   });
    // });
    
    oldArray.splice(id,1);
    console.log("After "+oldArray.length);
    newArray(oldArray);
    setCount(() => count + 1);
    rendering();

  }

  // function createCard(Work) {
  //   // console.log("card created");
  //   return <Card key={Work.id} id={Work.id} task={Work.task} defination={Work.description} onDelete={deleteTask}/>;
  // }

  /*
  I have to save the current state of the note then,
  1. grab the values and print it on console ---> done
  2. now I have to add these value in task array, when I will click add
  3. change the useState of array as well; done
  4. use File handling to add all the newly added task in task.js file
  */
 
  // function rendering() {
  //   // console.log("wrking");
  //   return oldArray.map(createCard);
  // }

  function rendering() {
    // console.log("wrking");
    return oldArray.map((Work, index) => {
      return (
        <Card
          key={index}
          id={index}
          task={Work.task}
          defination={Work.description}
          onDelete={deleteTask}
        />
      );
    });
  }

  function titleChange(event) {
    newTitle(event.target.value);
  }
  function descriptionChange(event) {
    newDescription(event.target.value);
  }

  function click() {
    let length = Task.length;
    if (defaultTitle.length > 0 && defaultDescription.length > 0) {
      Task.push({
        id: length + 1,
        task: defaultTitle,
        description: defaultDescription,
      });
      newTitle("");
      newDescription("");
      newArray(Task);
      // console.log(oldArray);
      setCount(() => count + 1);
    }
  }


  return (
    <div id="box">
      <input
        name="title"
        placeholder="Title"
        id="title"
        value={defaultTitle}
        onChange={titleChange}
      />
      <textarea
        name="content"
        placeholder="Take a note..."
        rows="3"
        id="description"
        columns="3"
        value={defaultDescription}
        onChange={descriptionChange}
      />
      <button id="add" onClick={click}>
        Add
      </button>
      {/* <div id="trial">{oldArray.map(createCard)}</div> */}
      <div id="trial">
        {oldArray.map((Work, index) => {
          return (
            <Card
              key={index}
              id={index}
              task={Work.task}
              defination={Work.description}
              onDelete={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Note;
