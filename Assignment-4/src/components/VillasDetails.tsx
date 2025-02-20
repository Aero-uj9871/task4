
// import image1 from "../assets/gallery-1.png"
// import image2 from "../assets/gallery-2.png"
// import image3 from "../assets/gallery-3.png"
// import image4 from "../assets/gallery-4.png"
// import image5 from "../assets/gallery-5.png"
// import image6 from "../assets/gallery-6.png"
// import VillaCrousel from '../components/VillaCarousel';
// import loc from '../assets/location.svg'
// import bathtub from '../assets/bathtub.svg'
// import room from '../assets/double-bed.svg'
// import house from '../assets/measured.svg'

// const villa = villaData[1];
// const VillasDetails = () => {
//   const [active, setactive] = useState('description');
//   return (
//     <>
//       <section className='w-full  mb-[8rem] mt-[5rem]'>
//         <article className='w-[60%] mx-auto flex gap-4 '>
//           <aside className='w-[70%]'>
//             <section className='w-full h-[600px]'>
//               <VillaCrousel />
//             </section>
//             <section className='w-full h-[217px] rounded-lg shadow-lg'>
//               <article className="flex flex-col space-y-2 p-20 mt-20">
//                 <header className="flex justify-between font-bold">
//                   <h1 className="font-nunito font-bold text-[28px] text-[#3e3e3e] leading-[27.2px]">{villa.title}</h1>
//                   <h1 className="font-nunito font-bold text-[28px] text-[#ffa800] leading-[27.2px]">{villa.price}</h1>
//                 </header>

//                 <p className="text-left flex  gap-2 font-nunito text-[#aeaeae] text-[22px]"><img src={loc} className="inline" />{villa.address}</p>
//                 <footer className="flex justify-between text-sm">
//                   <p className="text-left font-semibold font-nunito text-[#626262] text-[22px]"><img src={bathtub} className="inline" /> {villa.bath}</p>
//                   <p className="text-left font-semibold font-nunito text-[#626262] text-[22px]"><img src={room} className="inline" /> {villa.beds}</p>
//                   <p className="text-left font-semibold font-nunito text-[#626262] text-[22px]"><img src={house} className="inline" /> {villa.size}</p>
//                 </footer>
//               </article>
//             </section>

//             <section className='h-15 flex justify-around items-center bg-[#f4f4f4] w-full mt-15'>
//               <h1
//                 className={`py-3 cursor-pointer font-mulish text-[18px] font-bold text-[#8a8a8a] ${active === 'description' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`}
//                 onClick={() => setactive('description')}
//               >
//                 DESCRIPTION
//               </h1>
//               <h1
//                 className={` py-3 cursor-pointer font-mulish text-[18px] font-bold text-[#8a8a8a] ${active === 'layout' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`}
//                 onClick={() => setactive('layout')}
//               >
//                 PROPERTY LAYOUT
//               </h1>

//               <h1
//                 className={`py-3 cursor-pointer font-mulish text-[18px] font-bold text-[#8a8a8a] ${active === 'amenities' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`}
//                 onClick={() => setactive('amenities')}
//               >
//                 AMENITIES
//               </h1>
//             </section>
//             <section className='w-full scroll'>
//               {active === 'layout' && <VillaAbout />}
//                 {active === 'description' && <VillaDescription />}
//                 {active === 'amenities' && <Amenities />}
//             </section>
//           </aside>
//           <aside className='w-[30%] h-[50%]'>
//             <section className='grid grid-cols-2 gap-6'>
//               <img src={image1} alt="" />
//               <img src={image2} alt="" />
//               <img src={image3} alt="" />
//               <img src={image4} alt="" />
//               <img src={image5} alt="" />
//               <img src={image6} alt="" />
//               <img src={image2} alt="" />
//               <img src={image3} alt="" />
//             </section>
//           </aside>
//         </article>
//       </section>
//     </>
//   )
// }

// export default VillasDetails;

import { useState } from 'react';
import villas from '../Data/VillaData';
import { useParams } from 'react-router-dom';

import VCrousel from '../components/VillaCarousel'

import loc from '../assets/location.svg'
import bathtub from '../assets/bathtub.svg'
import room from '../assets/double-bed.svg'
import house from '../assets/measured.svg'
import DescriptionSection from '../components/VillaDescription'
import AboutSection from '../components/VillaAbout'
import Amenities from '../components/Amenities'
import SideImages from '../components/SideSection';


const DetailedVila = () => {
    const { id } = useParams(); 
    const villa = villas.find((v) => v.id === Number(id)); 
    const [activeSection, setActiveSection] = useState('description');
  
    if (!villa) {
      return <h1>Villa Not Found</h1>;
    }

    return (
      <>
      <section className='w-full  mb-[8rem] mt-[5rem]'>
        <article className='w-[80%] mx-auto flex gap-4 '>
          <aside className='w-[70%]'>
              <section className='w-full h-[600px]'>
                  <VCrousel/>
              </section>
              <section className='w-full h-[217px] shadow-lg'>
              <article className="flex flex-col gap-3 p-20 mt-20">
                    <header className="flex justify-between font-bold">
                      <h1 className="font-nunito font-bold text-[28px] text-[#3e3e3e] leading-[27.2px]">{villa.title}</h1>
                      <h1 className="font-nunito font-bold text-[28px] text-[#ffa800] leading-[27.2px]">{villa.price}</h1>
                    </header>
  
                    <p className="text-left font-nunito text-[#aeaeae] text-[22px]"><img src={loc} className="inline" />{villa.address}</p>
                    <footer className="flex justify-between text-sm">
                      <p className="text-left font-semibold font-nunito text-[#626262] text-[22px]"><img src={bathtub} className="inline" /> {villa.bath}</p>
                      <p className="text-left font-semibold font-nunito text-[#626262] text-[22px]"><img src={room} className="inline" /> {villa.beds}</p>
                      <p className="text-left font-semibold font-nunito text-[#626262] text-[22px]"><img src={house} className="inline" /> {villa.size}</p>
                    </footer>
                  </article>
              </section>
  
              <section className='h-15 flex justify-around items-center bg-[#f4f4f4] w-full mt-15'>
              <h1 
                      className={` py-3 cursor-pointer font-mulish text-[18px] font-bold text-[#8a8a8a] ${activeSection === 'layout' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`} 
                      onClick={() => setActiveSection('layout')}
                  >
                      PROPERTY LAYOUT
                  </h1>
  
              <h1 
                      className={`py-3 cursor-pointer font-mulish text-[18px] font-bold text-[#8a8a8a] ${activeSection === 'description' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`} 
                      onClick={() => setActiveSection('description')}
                  >
                      DESCRIPTION
                  </h1>

                  <h1 
                      className={`py-3 cursor-pointer font-mulish text-[18px] font-bold text-[#8a8a8a] ${activeSection === 'amenities' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`} 
                      onClick={() => setActiveSection('amenities')}
                  >
                      AMENITIES
                  </h1>
              </section>
              <section className="w-full">
  {activeSection === "description" && <AboutSection layout={villa.desc.layout} />}
  {activeSection === "layout" && <DescriptionSection desc={villa.desc.desc} />}
  {activeSection === "amenities" && <Amenities amenities={villa.desc.aminities} />}
</section>


          </aside>
          <aside className="w-[30%]">
            
  <SideImages images={villa.images} />
</aside>

        </article>
      </section>
      </>
  )
}

export default DetailedVila
