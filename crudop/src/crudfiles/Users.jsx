import { useEffect , useState } from 'react'
import axios from 'axios'// axios coming from library
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const Users = () => {

    let [state, setState] = useState([])

    function getData() {
        axios.get('http://localhost:4000/candidate')
            .then(response => {
                console.log(response.data);
                setState(response.data)
            })
    }

    useEffect(() => {
        getData();
    }, [])

    let handleDelete = (id)=> {
        axios.delete(`http://localhost:4000/candidate/${id}`)
        .then(()=> {
            getData();
        })
    }
    return (
        <section className="userBlock">
            <article className='container'>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((value)=>{
                            return(
                                <tr key={value.id}>
                                    <td>{value.firstname}</td>
                                    <td>{value.lastname}</td>
                                    <td>{value.age}</td>
                                    <td>{value.city}</td>
                                    <td><Link to={`/edituser/${value.id}`}><MdModeEdit /></Link></td>
                                    <td><span onClick={()=>handleDelete(value.id)}><MdDelete /></span></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </article>
        </section>
    )
}

export default Users;