import './App.css'
import logo from "../src/assets/logo.png"
import trofi from "../src/assets/1.png"
import bannerImg from "../src/assets/2.png"
import instiment from "../src/assets/3.png"
import { IoCall, IoLogoFacebook, IoWomanSharp } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";

function App() {

  return (
    <div className="bg-gradient-to-b from-white to-yellow-100 px-2 text-sm lg:px-4">
      <div>

        {/* ======================>>>>>>>>>>> hero part <<<<<<<<<<<<<============================== */}
        <div className='flex flex-col lg:flex-row-reverse'>
          <div className='lg:w-2/3'>
            <img src={logo} alt="logo" className='w-72'/>
            <header className="font-semibold">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</header>
            <div className="">
              <div className="">
                <ul className="list-disc ml-8 md:ml-12 lg:ml-14 my-2">
                  <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                  <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
              </div>
              <img src={bannerImg} alt="Award distribution" className=' lg:w-auto'/>
            </div>
            <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
          <img src={trofi} alt="trofi pictur" className='w-80 mx-auto  lg:mt-14'/>
        </div>


        {/* ======================>>>>>>>>>>> ingradient part <<<<<<<<<<<<<============================== */}
        <div className='mt-10 '>
          <p className='pb-2'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
          <img src={instiment} alt="elactric ornaments" className=' mx-auto md:w-5/6 lg:w-4/5 '/>
          <p className='text-center'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
          <div className='h-[2px] my-4 w-full bg-red-400'></div>
          <header className="font-bold text-center">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</header>
          <p className='text-center font-semibold py-4 mx-auto lg:max-w-5xl'>CHEMICALS & PROCESS <span className='text-red-500'>|</span> POWER <span className='text-red-500'>|</span> WATER & WASTE WATER <span className='text-red-500'>|</span> OILS & GAS <span className='text-red-500'>|</span> PHARMA SUGARS & DISTILLERIES <span className='text-red-500'>|</span> PAPER & PULP <span className='text-red-500'>|</span> MARINE & DEFENCE <span className='text-red-500'>|</span> METAL & MINING <span className='text-red-500'>|</span> FOOD & BEVERAGE <span className='text-red-500'>|</span> PETROCHEMICAL & REFINERIES <span className='text-red-500'>|</span> SOLAR <span className='text-red-500'>|</span> BUILDING <span className='text-red-500'>|</span> HVAC <span className='text-red-500'>|</span> FIRE FIGHTING <span className='text-red-500'>|</span> AGRICULTURE & RESIDENTIAL</p>
        </div>


        {/* ======================>>>>>>>>>>> footer part <<<<<<<<<<<<<============================== */}
        <div className='h-24 lg:h-20 bg-red-500'>
          <ul className='list-none h-fit w-fit mx-auto pt-2   text-white md:flex lg:flex  md:pt-8 lg:pt-8'>
            <li className='flex'><IoCall className='mr-2 bg-white rounded-full p-1 text-xl text-red-500'/> Toll free 18002001234</li>
            <li className='flex py-2 md:py-0 md:px-6 lg:px-32 lg:py-0'><IoLogoFacebook className='mr-2 text-xl text-white'/> www.facebook.com/cripumps</li>
            <li className='flex'><TfiWorld className='mr-2 text-xl text-white'/>  www.crigroups.com</li>
          </ul>
          

        </div>


      </div>
    </div>
  )
}

export default App
