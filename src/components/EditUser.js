import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const {id} = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios.get(`http://localhost/api/user/${id}`).then((response) => {
      setInputs(response.data);
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost/api/user/${id}/edit`, inputs).then((responese) => {
      console.log(responese.data);
      navigate("/");
    });
    console.log(inputs);
  };

  return (
    <div className="">
      <h1 className="">Edit Users</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label htmlFor="">Name: </label>
              </th>
              <td>
                <input value={inputs.name} type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="">Email: </label>
              </th>
              <td>
                <input value={inputs.email} type="text" name="email" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="">Phone: </label>
              </th>
              <td>
                <input value={inputs.phone} type="text" name="phone" onChange={handleChange} />
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
