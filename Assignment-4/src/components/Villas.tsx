// import React from "react";
import img1 from "../assets/project-1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import bath from "../assets/bathtub.svg";
import bed from "../assets/double-bed.svg";
import hotel from "../assets/measured.svg";
import location from "../assets/location.svg"
import { useNavigate } from "react-router-dom";

export const villaData = [
    { id: 1, image: img1, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Baths", beds: "8 Beds", size: "2980 sqft" },
    { id: 2, image: img2, title: "Symphony Dyer", price: "₹569,000", address: "2120 Marshville Road, Uttrakhand", bath: "8 Baths", beds: "12 Beds", size: "6250 sqft" },
    { id: 3, image: img3, title: "Horizon Stylish", price: "₹230,000", address: "00 W 22nd  Globe Road, Uttrakhand", bath: "2 Baths", beds: "3 Beds", size: "2650 sqft" },
    { id: 4, image: img4, title: "Horizon Stylish", price: "₹230,000", address: "00 W 22nd  Globe Road, Uttrakhand", bath: "2 Baths", beds: "3 Beds", size: "2650 sqft" },
    { id: 5, image: img5, title: "Spring Wood", price: "₹410,000", address: "4366 Terra Cotta Street, Uttrakhand", bath: "3 Baths", beds: "6 Beds", size: "3680 sqft" },
    { id: 6, image: img6, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Baths", beds: "4 Beds", size: "2980 sqft" },
    { id: 7, image: img7, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Baths", beds: "4 Beds", size: "2980 sqft" },
    { id: 8, image: img8, title: "Symphony Dyer", price: "₹569,000", address: "2120 Marshville Road, IA", bath: "8 Baths", beds: "12 Beds", size: "6250 sqft" },
    { id: 9, image: img9, title: "Hilltruck Valley", price: "₹230,000", address: "00 W 22nd  Globe Road, Uttrakhand", bath: "2 Baths", beds: "3 Beds", size: "2658 sqft" }
];

const Villas = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/villas-details");  // Direct navigation to the villas details page
    };
    return (
        <section className=' p-20 w-full'>
            <article className="text-center mb-[4.35rem]">
                <h1 className="font-kanit w-[85%] mx-auto font-normal text-semiheading">Lets's explore the villas of your dreams</h1>
            </article>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 space-y-14">{villaData.map((item) => (
                <section key={item.id} onClick={()=>handleClick()} className="relative cursor-pointer h-[350px] sm:h-[275px]">
                    {/*image section*/}
                    <figure className="shadow-lg">
                        <img src={item.image} alt={item.title} className="w-full h-[285px] rounded-md" />
                    </figure>
                    {/*card*/}
                    <div className="absolute bg-[#ffffff] p-4 shadow-md rounded-sm w-[90%] left-1/2 -translate-x-1/2 bottom-[-25%]">
                        <article className="flex flex-col space-y-2">
                            <header className="flex justify-between font-bold">
                                <h1 className="font-nunito font-bold text-4 text-[#3e3e3e] leading-[27.2px]">{item.title}</h1>
                                <h1 className="font-nunito font-bold text-4 text-[#ffa800] leading-[27.2px]">{item.price}</h1>
                            </header>

                            <div className="text-left font-nunito text-[#aeaeae] text-[12px] flex gap-2"><img src={location} className="inline" />{item.address}</div>
                            <div className="flex justify-between text-sm">
                                <div className="text-left font-semibold font-nunito text-[#626262] text-[14px]"><img src={bath} className="inline" /> {item.bath}</div>
                                <div className="text-left font-semibold font-nunito text-[#626262] text-[14px]"><img src={bed} className="inline" /> {item.beds}</div>
                                <div className="text-left font-semibold font-nunito text-[#626262] text-[14px]"><img src={hotel} className="inline" /> {item.size}</div>
                            </div>
                        </article>
                    </div>
                </section>
            ))}</div>
        </section>

    )
}

export default Villas;