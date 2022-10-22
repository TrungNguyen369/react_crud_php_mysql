import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost/api/user/save", inputs).then((responese) => {
      console.log(responese.data);
      navigate("/");
    });
    console.log(inputs);
  };
  return (
    <div className="">
      <h1 className="">Create Users</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label htmlFor="">Name: </label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="">Email: </label>
              </th>
              <td>
                <input type="text" name="email" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="">Phone: </label>
              </th>
              <td>
                <input type="text" name="phone" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
