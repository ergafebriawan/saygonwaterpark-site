import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import {FaTicketAlt} from "react-icons/fa";
import {FcCalendar, FcClock} from "react-icons/fc";

export default function MainHeader() {
    const [cur, setCur] = useState([]);
    const url_main = 'http://cms.saygon-park.com';

    useEffect(() => {
        getImage()
    }, []);

    const getImage = async () => {
        const response = await axios.get("http://cms.saygon-park.com/api/slider-waterparks?populate=*");
        setCur(response.data.data);
    }
    return (
        <>
            <div className="h-96 sm:h-96 md:h-96 lg:h-screen xl:h-screen 2xl:h-screen">
                <Carousel slideInterval={5000}>
                    {cur.map((data) => (
                        <div key={data.id}>
                            <img
                                src={url_main + data.attributes.content.data.attributes.url}
                                alt={data.attributes.slug}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="flex justify-center">
                <div className="absolute pt-3 pb-5 -mt-16 bg-gray-100 rounded-lg shadow-md sm:w-full md:w-auto">
                    <div className="mb-3 text-xl font-bold text-center text-gray-800">Information</div>
                    <div className="flex justify-center mx-10">
                        <div className="px-5 pt-2 pb-2 mx-2 text-gray-100 rounded-lg shadow-md md:w-48 sm:w-36 bg-gradient-to-l to-cyan-600 from-cyan-400 aspect-video">
                            <div className="text-lg font-bold text-center">Hari Buka</div>
                            <div className="flex justify-center my-3 text-gray-200"><FcCalendar size={30}/></div>
                            <div className="text-sm font-semibold text-center">Selasa - Minggu (Senin tutup)</div>
                        </div>
                        <div className="px-5 pt-2 pb-2 mx-2 text-gray-100 rounded-lg shadow-md md:w-48 sm:w-36 aspect-video bg-gradient-to-l to-cyan-600 from-cyan-400">
                        <div className="text-lg font-bold text-center">Harga Tiket</div>
                            <div className="flex justify-center my-3 text-gray-200"><FaTicketAlt size={30} color={'#fbbf24'}/></div>
                            <div className="text-sm font-semibold text-center">Rp 35.000,-(Weekday)</div>
                            <div className="text-sm font-semibold text-center">Rp 40.000,-(Weekend)</div>
                            
                        </div>
                        <div className="px-5 pt-2 pb-2 mx-2 text-gray-100 rounded-lg shadow-md md:w-48 sm:w-36 aspect-video bg-gradient-to-l to-cyan-600 from-cyan-400">
                        <div className="text-lg font-bold text-center">Jam Buka</div>
                            <div className="flex justify-center my-3 text-gray-200"><FcClock size={30}/></div>
                            <div className="text-sm font-semibold text-center">09.00 - 17.00 WIB(Weekday)</div>
                            <div className="text-sm font-semibold text-center">08.00 - 17.00 WIB(Weekend)</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}