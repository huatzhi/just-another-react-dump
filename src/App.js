import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { login } from './store/auth/action';


const initialState = {
  email: "",
  password: ""
}
function App() {
  const [FormData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log('auth', auth)

  const submitForm = () => {
    dispatch(login(FormData))

  }

  return (
    <div className="App">
      <header className="App-header">
        <label>E-mail</label>
        <input type="email" value={FormData.email} onChange={(e) => { setFormData({ ...FormData, email: e.target.value }) }}></input>
        <label>Password</label>
        <input type="password" value={FormData.password} onChange={({ target: { value } }) => { setFormData({ ...FormData, password: value }) }}></input>


        <button onClick={submitForm}>Submit</button>

        <span>{JSON.stringify(auth, null, 2)}</span>
      </header>
    </div>
  );
}

export default App;
