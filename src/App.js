import './App.css';
import {db} from './Firebase'
import {collection, getDocs, addDoc, updateDoc, doc,deleteDoc} from 'firebase/firestore'
import { useState, useEffect } from 'react'; 

function App() {
  const[newName, setNewName] = useState("")
  const[newAge, setNewAge] = useState("")
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users")

  const getUsers = async()=>{
    const data = await getDocs(usersCollectionRef)
    console.log(data)
    setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
  }

  const createUser = async () =>{
    await addDoc(usersCollectionRef, {name:newName, age: Number(newAge)});
    getUsers();
    setNewName("")
    setNewAge("") 
  }

  const updateUser = async (id, age) =>{
    const userDoc= doc(db, "users",id)
    const newField= {age: age + 1}
    await updateDoc(userDoc, newField)
    getUsers()
  }

  const deleteUser = async (id) =>{
    const userDoc= doc(db, "users",id)
    await deleteDoc(userDoc)
    getUsers();
  }

  useEffect(() => {
    getUsers()
  }, []); 

  return (
    <div className="App">

      <div className="form-card">
        <h2>Add New User</h2>
          <input placeholder="Name" 
          onChange={(event)=>{
            setNewName(event.target.value)
          }} />
          <input type="number" placeholder="Age"
          onChange={(event)=>{
            setNewAge(event.target.value)
          }}
          />
          <button onClick={createUser}>Add user</button> 
      </div>

      <div className="user-table">
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=>{
            return (<tr> 
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
              <button onClick={()=>{updateUser(user.id,user.age)}}>Increment Age</button>
              <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
              </td>
              </tr>
              )
          })}
          </tbody>
        </table>
      </div>

  </div>
  );
}

export default App;