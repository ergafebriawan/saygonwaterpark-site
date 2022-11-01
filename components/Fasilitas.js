import { FcHome, FcAdvertising, FcFilingCabinet, FcPlus, FcDoughnutChart, FcEmptyTrash } from "react-icons/fc";
export default function Fasilitas() {

    return (
        <>
            <section className="mt-10 mb-20 sm:mx-14 md:mx-64">
                <h2 className="my-3 text-2xl font-bold text-center text-gray-800">Fasilitas</h2>
                <div className="grid md:grid-cols-2 sm:grid-cols-1">
                    <div>
                        <div className="bg-white rounded-lg w-52 h-80"></div>
                        <div className="absolute z-10 duration-300 rounded-lg -mt-80 w-52 h-80 bg-cyan-700 hover:translate-x-8"></div>
                        <img className="absolute z-20 object-cover duration-300 rounded-lg ml-14 -mt-72 w-52 h-80 ring-2 ring-cyan-800 hover:-translate-x-10" src="http://cms.saygon-park.com/uploads/DSC_0565_a14c47858e.JPG?updated_at=2022-10-02T08:48:40.633Z" alt="facility" />
                    </div>
                    <div className="md:mt-0 sm:mt-16">
                        <div className="grid grid-cols-2 gap-10 ">
                            <div>
                                <ItemsFacility name="Gazebo">
                                    <FcHome size={40} />
                                </ItemsFacility>
                                <ItemsFacility name="Lifeguard">
                                    <FcAdvertising size={40} />
                                </ItemsFacility>
                                <ItemsFacility name="Toilet">
                                    <FcEmptyTrash size={40} />
                                </ItemsFacility>
                            </div>
                            <div>
                                <ItemsFacility name="P3K">
                                    <FcPlus size={40} />
                                </ItemsFacility>
                                <ItemsFacility name="Pelampung">
                                    <FcDoughnutChart size={40} />
                                </ItemsFacility>
                                <ItemsFacility name="Locker room">
                                    <FcFilingCabinet size={40} />
                                </ItemsFacility>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function ItemsFacility(props) {
    return (
        <>
            <div className="flex items-center py-2 pr-5 mt-4 mb-10 rounded-full bg-cyan-600 ring-cyan-700 ring-2">
                <div className="p-1 ml-2 bg-gray-100 rounded-full aspect-square">
                {props.children}
                </div>
                <span className="ml-2 text-lg font-semibold text-gray-100">{props.name}</span>
            </div>
        </>
    );
}