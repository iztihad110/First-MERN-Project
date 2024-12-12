import React, { useState } from "react";
import axios from "axios";
function App()
{
  let [formData, setFormData] = useState({
    name: "",
    age: "",
    email: ""
  })

  let handleChange = (e) => {
    let {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try{
      let response = await axios.post("http://localhost:3000/user", formData);
      alert(response.data.message);
    }
    catch(error){
      console.error("Error Submitting Data: ",error);
      alert("failed to submit data");
    }
  }

  return (
    <div>
      <h1 className="px-5">User Info Form</h1>
      <form action="" id="user_form" name="user_form" onSubmit={handleSubmit}>
        <div className="row_for_name px-5">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" value={formData.name} className="form-control mb-3" id="name" name="name" onChange={handleChange}/>
        </div>
        <div className="row_for_age px-5">
          <label htmlFor="age" className="form-label">Age:</label>
          <input type="text" value={formData.age} id="age" name="age" className="form-control mb-3" onChange={handleChange}/>
        </div>
        <div className="row_for_email px-5">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="text" value={formData.email} id="email" name="email" className="form-control mb-3" onChange={handleChange}/>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary " type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default App;