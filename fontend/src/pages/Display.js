import { useState, useEffect } from 'react';
import axios from 'axios';


const Display = () => {
  const [studata, setstuData] = useState([]);

  const loadData = () => {
    axios.get("https://crud-lc27.onrender.com/studisplay").then((res) => {
      setstuData(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const myData = studata.map((key, index) => (
    <tr key={index}>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
    </tr>
  ));

  return (
    <div className="display-container">
      <h1 className="display-title">Display Records</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {myData}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
