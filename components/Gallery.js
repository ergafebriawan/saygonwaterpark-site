import axios from "axios";
export default function Gallery() {
    return (
        <>
            <section className="min-w-full pt-5 pb-16 bg-cyan-600 sm:px-14 md:px-52">
                <h2 className="my-3 text-2xl font-bold text-center text-white">Gallery</h2>
                <div className="flex justify-center">

                    <div className="grid gap-1 sm:grid-cols-2 md:grid-cols-4">
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/7_1b912afe38.jpg?updated_at=2022-10-02T08:48:17.854Z"
                            alt="Gallery 1" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/9_286f031899.jpg?updated_at=2022-10-02T08:48:17.235Z"
                            alt="Gallery" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/8_49bf39ad1e.jpg?updated_at=2022-10-02T08:48:16.394Z"
                            alt="Gallery" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/pesawat_dan_kolam_olympic_43d5494e33.jpg?updated_at=2022-10-02T08:48:04.757Z"
                            alt="Gallery" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/waterboom_70d43bcdb9.jpg?updated_at=2022-10-02T08:48:03.491Z"
                            alt="Gallery" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/dd_2b39067980.JPG?updated_at=2022-10-02T08:48:40.482Z"
                            alt="Gallery" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/DSC_0735_f02e59baa7.jpg?updated_at=2022-10-02T08:49:03.862Z"
                            alt="Gallery" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/DSC_0565_a14c47858e.JPG?updated_at=2022-10-02T08:48:40.633Z"
                            alt="Gallery" />
                    </div>
                </div>
            </section>
        </>
    );
}

function ItemsGallery(props) {
    return (
        <>
            <img src={props.url} alt={props.alt} className="object-cover w-48 duration-200 rounded-sm aspect-square hover:scale-150" />
        </>
    );
}