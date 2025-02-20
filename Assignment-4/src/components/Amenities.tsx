import item1 from '../assets/Group_3204.png'
import item2 from '../assets/Group_3205.png'
import item3 from '../assets/Group_3206.png'
import item4 from '../assets/Group_3207.png'
import item5 from '../assets/Group_3206.png'
import item6 from '../assets/Group_3209.png'
import item7 from '../assets/Group_3210.png'
const Amenities = () => {
  return (
    <section className='w-full grid grid-cols-3 gap-10 mt-8'>
        <figure className=''><img src={item1} alt="" className='object-contain w-full'/></figure>
        <figure><img src={item2} alt="" className='object-contain w-full'/></figure>
        <figure><img src={item3} alt="" className='object-contain w-full'/></figure>
        <figure><img src={item4} alt="" className='object-contain w-full'/></figure>
        <figure><img src={item5} alt="" className='object-contain w-full'/></figure>
        <figure><img src={item6} alt="" className='object-contain w-full'/></figure>
        <figure><img src={item7} alt="" className='object-contain w-full'/></figure>
    </section>
  )
}
 
export default Amenities