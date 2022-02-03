import axios from "axios"
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'


function NewsCard(props) {
    const navigate=useNavigate();
    async function Delete() {
        await axios.delete("https://localhost:7207/api/NewsItem/" + props.id);
        window.location.reload();
    }

    return <div className=" relative grid grid-cols-6 gap-4 items-center bg-white-100 text-black rounded-md m-5 mx-10 h-20">
        <h1 className="mx-5 text-xl truncate font-bold ">{props.title}</h1>
        <div className=" col-span-4   ">
            <h1 className="truncate text-lg " >{props.text}</h1>
        </div>

        <img src={props.imgSrc} className=" rounded-md ml-10 object-cover h-20" style={{ width: '100px ' }} />
        <div className=" absolute right-4">
            <button className="m-3" onClick={() => navigate('/edit/'+props.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" text-yellow-500" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
            </button>
            <button className="m-3" onClick={Delete}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" text-red-500" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
            </button>
        </div>
    </div>

}

export default function Admin(props) {
    const [news, setNews] = useState([])
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    useEffect(() => {
        axios.get("https://localhost:7207/api/NewsItem").then(res => setNews(res.data)).catch(err => console.log(err));
    }, [])

    function Add() {
        axios.post("https://localhost:7207/api/NewsItem", { title: title, text: text, imgSrc: imgSrc }).then(res => console.log(res)).catch(err => console.log(err));
        window.location.reload();
    }

    return <div className="flex flex-col justify-center items-center absolute w-full h-full bg-gradient-to-r from-sky-500 to-indigo-500">
        <div>
            {news.map(item => <NewsCard title={item.title} text={item.text} imgSrc={item.imgSrc} id={item.id} />)}
        </div>
        <div className=" h-16 w-full px-14 grid grid-cols-7 gap-4">
            <input className=" rounded-md col-span-2 text-xl focus:outline-none" onChange={(event) => setTitle(event.target.value)} value={title} />
            <input className=" rounded-md col-span-2 text-xl focus:outline-none" onChange={(event) => setText(event.target.value)} value={text} />
            <input className=" rounded-md col-span-2 text-xl focus:outline-none" onChange={(event) => setImgSrc(event.target.value)} value={imgSrc} />
            <button className=" bg-transparent col-auto rounded-full" onClick={Add}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" text-white-100 w-16 relative left-14" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </button>
        </div>
    </div>
}