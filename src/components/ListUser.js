import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get("http://localhost/api/user/").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  const deteleUser = (id) =>{
    axios.delete(`http://localhost/api/user/${id}/delete`).then((responese) => {
      console.log(responese.data);
      getUsers();
    });
  }

  return (
    <div className="">
      <h1 className="">List User</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, key) => 
              <tr key={key}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`user/${user.id}/edit`}>Edit</Link>
                  <button onClick={()=> deteleUser(user.id)}>Delete</button>
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}
