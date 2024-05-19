import { useState } from "react";
import axios from "axios";
import StuDisplay from "./StuDisplay";


const Search = () => {
  const [rollno, setRollno] = useState("");
  const [stuData, setStuData] = useState([]);

  const handleSubmit = () => {
    axios.post("https://crud-lc27.onrender.com/stusearch", { rollno: rollno })
      .then((res) => {
        setStuData(res.data);
      });
  };

  const myData = stuData.map((key) => (
    <StuDisplay
      key={key.rollno}
      rno={key.rollno}
      nm={key.name}
      ct={key.city}
      fs={key.fees}
    />
  ));

  return (
    <div className="search-container">
      <h1 className="search-title">Search Records</h1>
      <div className="search-input-container">
        <label htmlFor="rollno">Enter Roll No:</label>
        <input
          type="text"
          id="rollno"
          className="search-input"
          name="rollno"
          value={rollno}
          onChange={(e) => { setRollno(e.target.value) }}
        />
        <button className="search-button" onClick={handleSubmit}>Search</button>
      </div>
      <br />
      <br />
      <br />
      <table className="student-table">
        <thead>
          <tr>
            <th>Roll No</th>
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

export default Search;
