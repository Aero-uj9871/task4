import React from "react";
import Carousel from "./Carousel";
import about_img from '../assets/about.png'
import featureImg from '../assets/section-3-img.png'
import cookImg from '../assets/cook.png'
import laundaryImg from '../assets/laundry.png'
import cleanerImg from '../assets/cleaning.png'
import repairImg from '../assets/maintenance.png'

function Home() {
    return (
        <div className="home bg-[#3c64b1]/20" id="home">
            <div className="home_heading flex justify-center">
                <h2 className="heading font-kanit mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center px-4 sm:px-12 md:px-20 lg:px-36">
                    Take your <span className="font-medium">real estate</span> experience to new heights in the{" "}
                    <span className="font-medium">himalayas</span>
                </h2>
            </div>
            <div className="home_heading flex justify-center">
                <h2 className="heading font-navabarLinks text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-8 px-4 sm:px-12 md:px-20 lg:px-36 text-[#737b7d]">
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam
                    minimum ponderum. Est audiam animal molestiae te.
                </h2>
            </div>
            <Carousel />
            <div className="home_about bg-[#ffffff] p-8 mt-20 pt-20 flex flex-col lg:flex-row gap-10 lg:gap-0"> {/* Base is column, changes to row on lg */}
                <div className="home_about_img  w-full lg:w-1/2 flex justify-center mt-30 lg:mt-0 px-4 lg:px-0"> {/* Image container */}
                    <img src={about_img} alt="About Us Image" className="max-w-full h-auto" /> {/* Make image responsive */}
                </div>
                <div className="home_about_text w-full lg:w-1/2  lg:mt-0 lg:pl-16 flex flex-col justify-center text-center lg:text-left"> {/* Text container */}
                    <div className="items-start"> {/* Added a div for better vertical centering */}
                        <p className="font-medium font-kanit text-2xl mb-4">About Us</p> {/* Added margin bottom for spacing */}
                        <p className="text-base font-navabarLinks text-[#737b7d]">
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
            <section>
                <div className="feature_heading items-center mt-15">
                    <h2 className="text-center text-3xl font-normal font-kanit">Feature regarding purchase of villa & also rent out feature with villacrest</h2>
                </div>
                <div className="feature_text mt-10">
                    <p className="text-center font-navabarLinks text-xl text-[#737b7d] px-12">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="feature_image mt-10 text-center"><img src={featureImg} alt="" className="p-8 inline-block" /></div>
            </section>
            <section className=" p-8 bg-[#ffffff] flex gap-15 flex-row">
                <div className="p-12 w-1/2 md:pl-30">
                    <h2 className="font-kanit text-wrap text-2xl font-normal">On Call Cook</h2>
                    <p className="font-navabarLinks text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className=""><img src={cookImg} className="pl-6 h-fit" alt="" /></div>
            </section>
            <section className=" p-8 bg-[#ffffff] flex gap-15 flex-row">
                <div className=""><img src={laundaryImg} className="  md:pl-30 h-fit" alt="" /></div>
                <div className="p-12 pl-6 w-1/2 ">
                    <h2 className="font-kanit text-wrap text-2xl font-normal">Laundary Services</h2>
                    <p className="font-navabarLinks text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
            <section className=" p-8 bg-[#ffffff] flex gap-15 flex-row">
                <div className="p-12 w-1/2 md:pl-30">
                    <h2 className="font-kanit text-wrap text-2xl font-normal">Facility Cleaning Services</h2>
                    <p className="font-navabarLinks text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className=""><img src={cleanerImg} className="pl-6 h-fit" alt="" /></div>
            </section>
            <section className=" p-8 bg-[#ffffff] flex gap-15 flex-row">
                <div className=""><img src={repairImg} className="  md:pl-30 h-fit" alt="" /></div>
                <div className="p-12 pl-6 w-1/2 ">
                    <h2 className="font-kanit text-wrap text-2xl font-normal">Maintenance & Repairs</h2>
                    <p className="font-navabarLinks text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
            <section className=" p-8 bg-[#3c64b1]/20 flex gap-15 flex-row">
                <div className="p-12 pl-6 w-1/2 ">
                    <h2 className="font-kanit text-wrap text-2xl font-normal">Maintenance & Repairs</h2>
                    <p className="font-navabarLinks text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="ul-lists flex flex-row">
                        <ul>
                            <li>Tailored services</li>
                            <li>Effortless arrials</li>
                            <li>Inspections and vetting</li>
                        </ul>
                        <ul>
                            <li>Expertly designed</li>
                            <li>Luxury amenities</li>
                            <li>Custom Itenaries</li>
                        </ul>
                    </div>
                    <button className="bg-[#3c64b1]/40">View Details</button>
                </div>
                <div className=""><img src={repairImg} className="  md:pl-30 h-fit" alt="" /></div>
            </section>
        </div>
    );
}

export default Home;