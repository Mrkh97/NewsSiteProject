import { useState,useEffect } from "react/cjs/react.development"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Login(props) {
    const navigate=useNavigate();
    const [user,setUser]=useState('');
    const [pass,setPass]=useState('');
    function handleClick(){
        axios.post('https://localhost:7207/api/Login', {
            user: user,
            pass: pass
          })
          .then(function (response) {
            if(response.status===200){
              navigate('/admin')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return <div className="flex flex-col absolute h-full w-full items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className=" flex flex-col items-center justify-center">
            <input className="p-3 bg-transparent border-2 border-solid rounded-md text-white-100 focus:outline-none" placeholder="username" type="text" onChange={(event)=>setUser(event.target.value)}/>
            <input className="mt-3 p-3 bg-transparent border-2 border-solid rounded-md text-white-100 focus:outline-none" placeholder="password" type="password" onChange={(event)=>setPass(event.target.value)}/>
            <button className=" border-2 px-4 py-2 rounded-md mt-5 text-white-100 hover:text-gray-900 hover:bg-white-100" onClick={handleClick}>Login</button>
        </div>
    </div>
}