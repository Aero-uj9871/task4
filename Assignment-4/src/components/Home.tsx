import React from "react";
import Carousel from "./Carousel";
import about_img from '../assets/about.png'
import featureImg from '../assets/section-3-img.png'
import cookImg from '../assets/cook.png'
import laundaryImg from '../assets/laundry.png'
import cleanerImg from '../assets/cleaning.png'
import repairImg from '../assets/maintenance.png'
import section5Img from '../assets/section-5-img.png'
import gallery1 from '../assets/gallery-1.png';
import gallery2 from '../assets/gallery-2.png';
import gallery3 from '../assets/gallery-3.png';
import gallery4 from '../assets/gallery-4.png';
import gallery5 from '../assets/gallery-5.png';
import gallery6 from '../assets/gallery-6.png';

// bg-opacity-[6%]
function Home() {
    return (
        <section className="home bg-[#3c64b1]/6" id="home">
            <div className="home_heading flex justify-center w-[90%] mx-auto">
                <h2 className="heading font-kanit font-normal text-[#373f41] mt-8 text-[44px] text-center sm:px-12 md:px-20 lg:px-36">
                    Take your <span className="font-medium">real estate</span> experience to new heights in the{" "}
                    <span className="font-medium">himalayas</span>
                </h2>
            </div>
            <div className="home_heading flex justify-center w-[85%] mx-auto">
                <h2 className="heading font-navabarLinks text-center text-wrap text-[20px]  mt-8 sm:px-12 md:px-20 lg:px-36 text-[#737b7d]">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam
                    minimum ponderum. Est audiam animal molestiae te.
                </h2>
            </div>
            <Carousel />
            {/* lg:w-1/2  */}
            <section className="py-30 home_about bg-[#ffffff]">
                <div className="w-[80%] mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-0">
                    <div className="home_about_img  flex justify-center"> {/* Image container */}
                        <img src={about_img} alt="About Us Image" className="w-full h-auto" /> {/* Make image responsive */}
                    </div>
                    <div className="home_about_text w-full  lg:mt-0 lg:pl-16 flex flex-col justify-center text-center lg:text-left"> {/* Text container */}
                        <div className="items-start"> {/* Added a div for better vertical centering */}
                            <p className="font-medium font-kanit text-semiheading text-[#373f41] mb-4">About Us</p> {/* Added margin bottom for spacing */}
                            <p className="text-base text-[20px] font-navabarLinks text-wrap text-[#737b7d]">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-8 mt-8">
                <article className="w-[80%]  mx-auto">
                    <div className="feature_heading items-center">
                        <h2 className="text-center text-semiheading mt-15 font-normal font-kanit text-[#373f41]">Feature regarding purchase of villa & also rent out feature with villacrest</h2>
                    </div>
                    <div className="feature_text mt-10">
                        <p className="font-navabarLinks text-[20px] text-wrap text-center text-[#737b7d] px-20">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </article>
                <div className="feature_image text-center"><img src={featureImg} alt="" className="p-8 inline-block" /></div>
            </section>
            <section className="p-8 bg-[#ffffff] flex gap-10 flex-col md:flex-row">
                <div className="p-12 mx-auto md:w-1/2">
                    <h2 className="font-kanit text-wrap text-semiheading font-normal text-[#373f41]">On Call Cook</h2>
                    <p className="font-navabarLinks text-[20px] text-wrap text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="mx-auto my-auto"><img src={cookImg} className="h-fit" alt="" /></div>
            </section>
            <section className="p-8 bg-[#ffffff] flex gap-10 flex-col-reverse md:flex-row">
                <div className="mx-auto my-auto"><img src={laundaryImg} className="p-16 h-fit" alt="" /></div>
                <div className="p-12 mx-auto md:w-1/2">
                    <h2 className="font-kanit text-wrap text-semiheading font-normal text-[#373f41]">Laundary Services</h2>
                    <p className="font-navabarLinks text-wrap text-[20px] text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
            <section className="p-8 bg-[#ffffff] flex gap-10 flex-col md:flex-row">
                <div className="p-16 mx-auto md:w-1/2">
                    <h2 className="font-kanit text-wrap text-semiheading font-normal text-[#373f41]">Facility Cleaning Services</h2>
                    <p className="font-navabarLinks text-[20px] text-wrap text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="mx-auto my-auto"><img src={cleanerImg} className="h-fit" alt="" /></div>
            </section>
            <section className="p-8 bg-[#ffffff] flex flex-col-reverse md:flex-row">
                <div className="mx-auto my-auto"><img src={repairImg} className="p-16 h-fit" alt="" /></div>
                <div className="p-12 mx-auto md:w-1/2">
                    <h2 className="font-kanit text-wrap text-semiheading font-normal text-[#373f41]">Maintenance & Repairs</h2>
                    <p className="font-navabarLinks text-wrap text-[20px] text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
            <section className="">
                <article className="flex flex-col md:flex-row w-[80%] gap-20 mt-12 mx-auto" >
                <div className=" lg:{h-[70%] mx-0 px-10}  md:w-1/2">
                    <h2 className="font-kanit text-wrap text-semiheading font-normal text-[#373f41]">Title for the key features of the villa goes here</h2>
                    <p className="font-navabarLinks text-[20px] text-wrap  text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="ul-lists flex flex-row gap-10">
                        <ul className="mt-8 pl-4 list-disc text-wrap">
                            <li className="text-[#3c64b1]"><span className="font-manrope text-[#000000] font-semibold">Tailored services</span></li>
                            <li className="text-[#3c64b1] mt-2"><span className="font-manrope text-[#000000] font-semibold">Effortless arrials</span></li>
                            <li className="text-[#3c64b1] mt-2"><span className="font-manrope text-[#000000] font-semibold">Inspections and vetting</span></li>
                        </ul>
                        <ul className="mt-8 pl-4 list-disc text-wrap">
                            <li className="text-[#3c64b1]"> <span className="font-manrope text-[#000000] font-semibold">Expertly designed</span></li>
                            <li className="text-[#3c64b1] mt-2"><span className="font-manrope text-[#000000] font-semibold">Luxury amenities</span></li>
                            <li className="text-[#3c64b1] mt-2"><span className="font-manrope text-[#000000] font-semibold">Custom Itenaries</span></li>
                        </ul>
                    </div>
                    <button className="mt-4 bg-[#6d87cb] text-[#ffffff] p-2">View Details</button>
                </div>
                <div className=" my-auto mx-auto md:mx-0"><img src={section5Img} className="" alt="" /></div>
                </article>
                
                
                {/* mx-auto my-auto md:h-[80%] h-[60%] */}
            </section>
            <section className=" bg-white text-center">
                <article className="w-[80%] mx-auto">
                <h2 className="font-kanit text-[32px] text-[#373f41] py-12">
                    Villa Image Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-25 sm:space-y-4 mx-auto">
                    <img src={gallery1} alt="Villa 1" className="w-full object-cover shadow-lg" />
                    <img src={gallery2} alt="Villa 2" className="w-full object-cover shadow-lg" />
                    <img src={gallery3} alt="Villa 3" className="w-full object-cover shadow-lg" />
                    <img src={gallery4} alt="Villa 4" className="w-full object-cover shadow-lg" />
                    <img src={gallery5} alt="Villa 5" className="w-full object-cover shadow-lg" />
                    <img src={gallery6} alt="Villa 6" className="w-full object-cover shadow-lg" />
                </div>
                </article>
            </section>

            <section className="p-8 mt-8">
                <article className="w-[80%]  mx-auto">
                    <div className="feature_heading items-center">
                        <h2 className="text-center text-semiheading font-normal font-kanit text-[#373f41]">Why Choose VillaCrest?</h2>
                    </div>
                    <div className="feature_text mt-10">
                        <p className="text-center font-navabarLinks text-[20px] text-wrap text-[#737b7d] px-12">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="justify-center flex">
                        <button className="mt-4 bg-[#6d87cb] text-[#ffffff] p-2">Contact</button>
                    </div>
                </article>
                {/* <div className="feature_image text-center"><img src={featureImg} alt="" className="p-8 inline-block" /></div> */}
            </section>
        </section>
    );
}

export default Home;