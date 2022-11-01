import Template from "../components/Template";
import Fasilitas from "../components/Fasilitas";
import Wahana from "../components/Wahana";

export default function Map(){
    return(
        <>
        <Template title_page="Map & Facility" active_page="fasilitas">
            <section>
                <div>
                    <h2 className="my-4 text-2xl font-bold text-center text-gray-800">Peta Saygon Waterpark</h2>
                    <div className="flex justify-center mb-10">
                        <img 
                        className="mx-10 rounded-lg shadow-lg sm:w-full md:w-2/3"
                        src="http://cms.saygon-park.com/uploads/Peta_Saygon_Waterpark_scaled_822618b1d2.jpg?updated_at=2022-11-01T03:44:09.900Z" 
                        alt="Peta Saygon Waterpark"
                        />
                    </div>
                </div>
                <Wahana/>
                <Fasilitas/>
            </section>
        </Template>
        </>
    );
}