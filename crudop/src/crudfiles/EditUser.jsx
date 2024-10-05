import { useEffect, useState } from 'react'
import axios from '../axios'
import { useParams, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const EditUser = () => {

  let navigate = useNavigate()

  // let obj = useParams()
  // console.log(obj)

  // let{id} = obj;

  let { id } = useParams();

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

  useEffect(() => {
    axios.get(`/candidate/${id}`).then((response) => {
      console.log(response.data);
      setState({ ...state, firstname: response.data.firstname, lastname: response.data.lastname, age: response.data.age, city: response.data.city, });
    });
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    let payload = { firstname, lastname, age, city }
    axios.put(`/candidate/${id}`, payload)
    navigate("/showusers")
    toast.success("Data has been updated")
  }
  return (
    <main className="form-content">
      <section className="inner-content">
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>FirstName</label>
            <input type="text" placeholder="Enter Firstname" name="firstname"
              value={firstname} onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>LastName</label>
            <input type="text" placeholder="Enter lastname" name="lastname"
              value={lastname} onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input type="text" placeholder="Enter age" name="age"
              value={age} onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="Enter city" name="city"
              value={city} onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button>Edit User</button>
          </div>

        </form>
      </section>
    </main>

  )
}

export default EditUser