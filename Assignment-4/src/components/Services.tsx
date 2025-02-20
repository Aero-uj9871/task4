import cookImg from '../assets/cook.png'
import laundaryImg from '../assets/laundry.png'
import cleanerImg from '../assets/cleaning.png'
import repairImg from '../assets/maintenance.png'

function Services() {
    return (
        <section id="services">
            <article className="p-16 sm:p-30  mx-auto lg:w-[80%]">
                <h2 className="text-[40px] font-kanit font-medium text-center text-[#373f41]">“Our Team have Awesome handpicked Services these for your next big group celebration, a romantic getaway or peaceful sneak away”</h2>
            </article>
            <section className="p-8 bg-[#ffffff] flex gap-10 flex-col md:flex-row">
                <div className="sm:p-12 mx-auto md:w-1/2">
                    <h2 className="font-kanit text-wrap text-[28px] sm:text-semiheading font-normal text-[#373f41]">On Call Cook</h2>
                    <p className="font-navabarLinks text-[15px] sm:text-[20px] text-wrap text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="mx-auto my-auto"><img src={cookImg} className="h-fit" alt="" /></div>
            </section>
            <section className="p-8 bg-[#ffffff] flex gap-10 flex-col-reverse md:flex-row">
                <div className="mx-auto my-auto"><img src={laundaryImg} className="p-16 h-fit" alt="" /></div>
                <div className="sm:p-12 mx-auto md:w-1/2">
                    <h2 className="font-kanit text-wrap text-[28px] sm:text-semiheading font-normal text-[#373f41]">Laundary Services</h2>
                    <p className="font-navabarLinks text-wrap text-[15px] sm:text-[20px] text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
            <section className="p-8 bg-[#ffffff] flex gap-10 flex-col md:flex-row">
                <div className="sm:p-16 mx-auto md:w-1/2">
                    <h2 className="font-kanit text-wrap text-[28px] sm:text-semiheading font-normal text-[#373f41]">Facility Cleaning Services</h2>
                    <p className="font-navabarLinks text-[15px] sm:text-[20px] text-wrap text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="mx-auto my-auto"><img src={cleanerImg} className="h-fit" alt="" /></div>
            </section>
            <section className="p-8 bg-[#ffffff] flex flex-col-reverse md:flex-row">
                <div className="mx-auto my-auto"><img src={repairImg} className="p-16 h-fit" alt="" /></div>
                <div className="sm:p-12 mx-auto md:w-1/2">
                    <h2 className="font-kanit text-wrap text-[28px] sm:text-semiheading font-normal text-[#373f41]">Maintenance & Repairs</h2>
                    <p className="font-navabarLinks text-wrap text-[15px] sm:text-[20px] text-justify text-[#737b7d] mt-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </section>
        </section>
    );
}
export default Services;