import {useParams,useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
export default function Edit(props){
    const params=useParams();
    const navigate=useNavigate();
    const [news,setNews]=useState([])
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    useEffect(()=>{
        axios.get("https://localhost:7207/api/NewsItem/"+params.id)
        .then(res=>{
            setTitle(res.data.title);
            setText(res.data.text);
            setImgSrc(res.data.imgSrc);
        })
        .catch(err=>console.log(err));
        
    },[]);
    
    async function put(){
        await axios.put("https://localhost:7207/api/NewsItem",{id:params.id,title:title,text:text,imgSrc:imgSrc});
        navigate('/admin');
    }
    return <div className="flex flex-col justify-center items-center absolute w-full h-full p-20 bg-gradient-to-r from-sky-500 to-indigo-500">
            <h1>{params.id}</h1>
            <h3 className=' text-3xl text-white-100 mb-1'>Title</h3>
            <input value={title} className=" rounded-md w-full text-xl focus:outline-none mb-5 p-3" onChange={(event) => setTitle(event.target.value)} value={title} />
            <h3 className=' text-3xl text-white-100 mb-1'>Text</h3>
            <textarea value={text} rows={5} className=" rounded-md w-full text-xl focus:outline-none mb-5 p-3" onChange={(event) => setText(event.target.value)} value={text} />
            <h3 className=' text-3xl text-white-100 mb-1'>ImgSource</h3>
            <input value={imgSrc} className=" rounded-md w-full text-xl focus:outline-none mb-5 p-3" onChange={(event) => setImgSrc(event.target.value)} value={imgSrc} />
            <button className=' bg-white-100 text-black font-bold text-4xl p-3 rounded-md' onClick={put}>Update</button>
        </div>
}
