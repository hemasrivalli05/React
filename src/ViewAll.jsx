import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CSVLink } from 'react-csv'
import { NavLink } from 'react-router-dom'

const ViewAll = () => {

  let [employee, setEmployee] = useState([])

  let fetchData = async () => {
    let { data } = await axios.get('http://localhost:5000/employee');
    // console.log(data);
    setEmployee(data);

  }

  //!changing tittle
  useEffect(() => {
    document.title = "View All Employee"
  }, [])

  console.log(employee)
  //! managing sideEffect inside useEffect()
  //?[] --> componentDidMount() --> only once
  useEffect(() => {
    try {
      fetchData()
    } catch (e) {
      console.log(e);
    }
  }, [])
  //!
  let deleteEmployee = (id) => {
    console.log(id);
    axios.delete("http://localhost:5000/employee/" + id);
    window.location.assign("/viewall")
    // window.onload()
  }
  return (
    <>
      <h1>INFORMATION OF ALL EMPLOYEES</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>EMPLOYEE-NAME</th>
            <th>EMPLOYEE-EMAIL</th>
            <th colSpan={3}>MORE-OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((val) => {
            // console.log(val);//object
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.ename}</td>
                <td>{val.email}</td>
                <td>
                  <NavLink to={`/singleemp/${val.id}`}>
                    <button>VIEW-EMPLOYEE</button>
                  </NavLink>
                </td>
                <td>
                  <NavLink to={`/edit/${val.id}`}>
                    <button>UPDATE EMPLOYEE</button>
                  </NavLink>
                </td>
                <td><button onClick={() => deleteEmployee(val.id)}>DELETE EMPLOYEE</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <CSVLink data={employee} filename='emp-detail'>
          <button>EXPORT TO EXCEL SHEET </button>
        </CSVLink>
      </div>
    </>
  )
}

export default ViewAll
//!export excel sheet --> "react-csv"--> npm install react-csv