import axios from '../axios'; // axios coming from axios file which is modified 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateUser = () => {

  let navigator = useNavigate()

  let [state, setState] = useState({
    firstname: "",
    lastname: "",
    age: "",
    city: "",
  });

  let { firstname, lastname, age, city } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let payload = { firstname, lastname, age, city }
    axios.post("/candidate", payload)
    navigator("/showusers")
    toast.success("User has been created")
  }

  return (
    <main className="form-content">
      <section className="inner-content">
        <h1>Create User</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>FirstName</label>
            <input type="text" placeholder="Enter Firstname" name="firstname" value={firstname} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>LastName</label>
            <input type="text" placeholder="Enter lastname" name="lastname" value={lastname} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input type="text" placeholder="Enter age" name="age" value={age} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="Enter city" name="city" value={city} onChange={handleChange} />
          </div>

          <div className="form-group">
            <button onClick={handleSubmit}>Create User</button>
          </div>

        </form>
      </section>
    </main>

  )
}

export default CreateUser