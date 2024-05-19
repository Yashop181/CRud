import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Delete = () => {
  const [studata, setStuData] = useState([]);

  const loadData = () => {
    axios.get("http://localhost:8000/studisplay").then((res) => {
      setStuData(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const myDel = (id) => {
    axios.get(`http://localhost:8000/studelete/${id}`).then((res) => {
      loadData();
      toast.success("Data Deleted!!")
    });
  };

  const myData = studata.map((key) => {
    return (
      <tr key={key._id}>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
        <td>
          <button className="delete-button" onClick={() => { myDel(key._id) }}>
            <img src='https://cdn.iconscout.com/icon/free/png-512/free-delete-2902143-2411575.png?f=webp&w=256' alt='Delete' />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="delete-container">
      <h2 className="delete-title">Delete Records</h2>
      <table className='delete-table'>
        <thead>
          <tr>
            <th>Roll </th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myData}
        </tbody>
      </table>
    </div>
  );
};

export default Delete;
