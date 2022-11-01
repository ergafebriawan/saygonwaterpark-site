import AboutCompany from "../components/AboutCompany";
import KontakKami from "../components/KontakKami";
import Template from "../components/Template";
import axios from "axios";
import { useEffect, useState } from "react";
import {AiFillEye} from 'react-icons/ai';

export default function Promo(){
    const [promo, setPromo] = useState([]);
    const url_main = 'http://cms.saygon-park.com';

    useEffect(() => {
        getPromo();
    }, []);

    const getPromo = async () => {
        const response = await axios.get("http://cms.saygon-park.com/api/promo-waterparks?populate=*");
        setPromo(response.data.data);
    };
    return(
        <>
        <Template title_page="Saygon Waterpark Promo" active_page="promo">
            <section>
                <h2 className="my-5 text-2xl font-bold text-center text-gray-800">Saygon Waterpark Promo & Event</h2>
                <div className="mb-10 md:mx-52 sm:mx-36">
                    {promo.map((data) => (
                        <ItemsPromo 
                            image={url_main+data.attributes.picture.data.attributes.url} 
                            title={data.attributes.title}
                            desc={data.attributes.description}/>
                    ))}
                </div>
            </section>
        </Template>
        </>
    );
}

function ItemsPromo(props){
    return(
        <>
        <div className="flex overflow-hidden rounded-lg shadow-lg md:flex-row sm:flex-col bg-cyan-50 ring-2 ring-cyan-500">
            <img
            className="object-cover w-full aspect-square" 
            src={props.image} 
            alt={props.title}/>
            <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-800">{props.title}</h4>
                <article className="mt-3 font-normal">
                    <p>{props.desc}</p>
                </article>
                <button className="flex items-center px-5 py-2 mt-5 rounded-full bg-cyan-600 hover:bg-cyan-700 text-gray-50">Lihat Selengkapnya <AiFillEye size={20}/></button>
            </div>
        </div>
        </>
    );
}