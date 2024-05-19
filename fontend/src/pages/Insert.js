import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
const Insert = () => {


  const [input, setInput]= useState({});

  const handleInput=(e)=>
  {
    let name=e.target.name;
    let value=e.target.value;

    setInput(values=>({...values,[name]:value}));
  }


  const handleSubmit=()=>
  {
    axios.post("http://localhost:8000/datasave" ,input)
    .then(toast.success("Data Saved Successful!!!!"));
  }



  return (
    <>
    <div className="container">
      
    <div className="form-container">
      <h2 >Insert Details</h2>

        <div className="form-group">
          <label for="rollno">Roll No:</label>
          <input type="text" id="rollno" name="rollno" value={input.rollno}  onChange={handleInput}  />
        </div>

        <div className="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" value={input.name}  onChange={handleInput} />
        </div>

        <div className="form-group">
          <label for="city">City:</label>
          <input type="text" id="city" name="city" value={input.city}  onChange={handleInput}  />
        </div>

        <div className="form-group">
          <label for="fees">Fees:</label>
          <input type="text" id="fees" name="fees" value={input.fees}  onChange={handleInput}  />
        </div>
        

        <input type="submit" value="Submit" onClick={handleSubmit}/>

    </div>
  </div>
    </>
  );
};

export default Insert;
