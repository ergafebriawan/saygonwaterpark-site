import { HiArrowSmRight, HiArrowCircleRight } from "react-icons/hi";
export default function Wahana() {
    return (
        <>
            <section className="min-w-full pt-5 pb-10 bg-cyan-600">
                <h2 className="my-3 text-2xl font-bold text-center text-white">Wahana</h2>
                <div className="md:mx-52 sm:mx-10">

                    <ItemWahana
                        right={false}
                        image="http://cms.saygon-park.com/uploads/DSC_0546_5dabf01ef2.jpg?updated_at=2022-10-02T08:48:58.433Z"
                        name="Waterboom"
                        desc="Ea anim do officia sit cupidatat cillum occaecat. Magna voluptate et dolor irure sunt adipisicing mollit aliqua magna est. "
                    />

                    <ItemWahana
                        right={true}
                        image="http://cms.saygon-park.com/uploads/DSC_0135_da47b2d3ef.jpg?updated_at=2022-10-02T08:48:59.501Z"
                        name="Waterslide"
                        desc="Ea anim do officia sit cupidatat cillum occaecat. Magna voluptate et dolor irure sunt adipisicing mollit aliqua magna est. "
                    />

                    <ItemWahana
                        right={false}
                        image="http://cms.saygon-park.com/uploads/DSC_0049_a945e73060.jpg?updated_at=2022-10-02T08:49:04.061Z"
                        name="Kolam Olympic"
                        desc="Ea anim do officia sit cupidatat cillum occaecat. Magna voluptate et dolor irure sunt adipisicing mollit aliqua magna est. "
                    />

                    <div className="flex justify-center mt-10 text-gray-50">
                        <a href="/map" className="flex items-center space-x-1 hover:text-cyan-400">
                            <span className="text-xl font-semibold hover:decoration-slice">Lihat lebih banyak </span> <HiArrowCircleRight size={25} />
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}

function ItemWahana(props) {
    return (
        <>
            <div className="flex items-center p-2 rounded-lg">
                {props.right == false ?
                    <>
                        <div>
                            <div className="rounded-full aspect-square w-52 bg-cyan-700"></div>
                            <div className="absolute w-10 translate-x-48 rounded-full aspect-square -mt-52 bg-cyan-800"></div>
                            <div className="absolute w-48 overflow-hidden translate-x-6 translate-y-6 rounded-full -mt-52">
                                <img className="object-cover aspect-square" src={props.image} alt="wahana" />
                            </div>
                        </div>
                        <div className="mx-10">
                            <span className="text-2xl font-semibold text-gray-100">{props.name}</span>
                            <article>
                                <p className="text-gray-300 text-md">{props.desc}</p>
                            </article>
                        </div>
                    </>
                    :
                    <>
                        <div className="mx-10">
                            <div className="text-2xl font-semibold text-right text-gray-100">{props.name}</div>
                            <article className="text-right">
                                <p className="text-gray-300 text-md">{props.desc}</p>
                            </article>
                        </div>
                        <div>
                            <div className="rounded-full aspect-square w-52 bg-cyan-700"></div>
                            <div className="absolute w-10 -translate-x-6 rounded-full aspect-square -mt-52 bg-cyan-800"></div>
                            <div className="absolute w-48 overflow-hidden -translate-x-6 translate-y-6 rounded-full -mt-52">
                                <img className="object-cover aspect-square" src={props.image} alt="wahana" />
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    );
}