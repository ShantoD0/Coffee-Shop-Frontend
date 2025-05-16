import TitleCard from './TitleCard'
import img1 from '../../assets/icons/1.png'
import img2 from '../../assets/icons/2.png'
import img3 from '../../assets/icons/3.png'
import img4 from '../../assets/icons/4.png'
function Title() {
  return (
    <div className='bg-stone-200 gap-4 flex flex-wrap justify-center items-center py-12 md:pl-20'>
      <TitleCard img={img1} title="Awesome Aroma" desc="You will definitely be a fan of the design & aroma of your coffee"/>  
      <TitleCard img={img2} title="High Quality" desc="We served the coffee to you maintaining the best quality"/>  
      <TitleCard img={img3} title="Pure Grades" desc="The coffee is made of the green coffee beans which you will love"/>  
      <TitleCard img={img4} title="Proper Roasting" desc="Your coffee is brewed by first roasting the green coffee beans"/>  
    </div>
  )
}

export default Title