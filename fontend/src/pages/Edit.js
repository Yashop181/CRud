import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Edit = () => {
  const [studata, setstuData] = useState([]);
  const [mydata, setMydata] = useState({});

  const loadData = () => {
    axios.get("https://crud-lc27.onrender.com/studisplay").then((res) => {
      setstuData(res.data);

    });
  };

  useEffect(() => {
    loadData();
    
  }, []);

  const myEdit = (id) => {
    axios.get(`https://crud-lc27.onrender.com/stuedit/${id}`).then((res) => {
      setMydata(res.data);


    });
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setMydata(values => ({ ...values, [name]: value }));
  };

  const editSave = () => {
    axios.post(`https://crud-lc27.onrender.com/editsave/${mydata._id}`, mydata)
      .then((res) => {
        loadData();
        toast.success("Data edit Successfully")
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
          <button className="edit-button" onClick={() => { myEdit(key._id) }}>
            <img src='https://w7.pngwing.com/pngs/424/1008/png-transparent-pen-pen-tool-adobe-illustrator-tool-illustrator-icon-thumbnail.png' alt='Edit' className="edit-icon" />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="edit-container">
      <h1 className="edit-title">Edit Record</h1>
      <table className="edit-table">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {myData}
        </tbody>
      </table>

      <div className="form-containere">
        <h2 className="form-title">Edit Student Records</h2>
        <div className="form-group">
          <label>Edit Roll No</label>
          <input type='text' value={mydata.rollno || ''} name='rollno' onChange={handleInput} className="form-input" />
        </div>
        <div className="form-group">
          <label>Edit Name</label>
          <input type='text' value={mydata.name || ''} name='name' onChange={handleInput} className="form-input" />
        </div>
        <div className="form-group">
          <label>Edit City</label>
          <input type='text' value={mydata.city || ''} name='city' onChange={handleInput} className="form-input" />
        </div>
        <div className="form-group">
          <label>Edit Fees</label>
          <input type='text' value={mydata.fees || ''} name='fees' onChange={handleInput} className="form-input" />
        </div>
        <button onClick={editSave} className="form-button">Update Data!</button>
      </div>
    </div>
  );
};

export default Edit;
