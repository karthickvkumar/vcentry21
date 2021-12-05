import React, {useState, useEffect} from "react";

const StateLess = () => {
  let [message, displayMessage] = useState("");
  let [form, formDate] = useState({
    username: '',
    age : ''
  })


  const updateText = () =>{
    displayMessage("Hello there.. Im printing...");
  }

  const onSubmitForm = () => {
    console.log(form)
  }

  const onHandleInput = (event) => {
    // console.log(event.target.value, event.target.name)
    formDate({
     ...form, [event.target.name] : event.target.value
    })
  }

  useEffect(() => {
    console.log("It will work like a component did mount")
  },[])

  return (
    <div>
      <h1>This is a StateLess Component </h1>
      <h1>{message}</h1>
      <button onClick={() => updateText()}>Change Text</button>
      <div>
        <label>Enter Name :</label>
        <input type="text" placeholder="Enter your name..."
        name="username" onChange={onHandleInput}/>
      </div>
      <div>
        <label>Enter Age :</label>
        <input type="text" placeholder="Enter your age..." 
        name="age" onChange={onHandleInput}/>
      </div>
      <button onClick={() => onSubmitForm() }>Submit</button>
      <h1>{form.username}</h1>
      <h1>{form.age}</h1>
    </div>
  )
}

export default StateLess;