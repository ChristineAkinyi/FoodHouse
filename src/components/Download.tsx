import Image from 'next/image';
import phoneUI from '../Images/phone.jpeg';
import appleicon from '../Images/appleicon.png'
import playstoreicon from '../Images/googleplay.png'

const DownloadAppSection = () => {
  return (
    <div className="mt-40 flex flex-col items-center justify-center">

      <div className="flex md:flex-row items-center justify-center max-w-6xl mx-auto p-6">
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <Image src={phoneUI} alt="Food App" className="w-80 justify-center " />
        </div>

        <div className="md:ml-20 ">
          <h2 className="text-orange-500 font-medium text-xl">Download Our App</h2>
          <h1 className="text-5xl font-bold my-4">It's all here.</h1>
          <h1 className='text-5xl font-bold my-4 mb-10'> All in one app.</h1>

            <p className="text-slate-400 text-xl">Discover local, on-demand delivery or Pickup from</p>
            <p className='text-slate-400 text-xl'>restaurants, nearby grocery and convenience stores,</p>
            <p className='text-slate-400 text-xl'>and more.</p>
          
         

          <div className='flex gap-[10px] mt-10 '>
            <button className='flex bg-black py-4 px-8 text-white rounded-lg text-left'>
              <Image src={appleicon} alt='' className='w-10'/>

              <div>
                <p className='text-xl'>Download on the</p>
                <h2 className='text-2xl'>App Store</h2>
              </div>
            </button>
            
            <button className='flex bg-black text-2xl py-4 px-8 rounded-lg text-white text-left'>
              <Image src={playstoreicon} alt='' className='w-10'/>

              <div>
              <p className='text-xs'>GET IT ON</p>
              <p className='font-semibold'>Google Play</p>                
              </div>             
            </button>
          </div>
      </div>
        </div>

        <div className="flex gap-[90px] mt-32 ">
          
        <div className='ml-[-120px]'>
        <h2 className="text-3xl font-bold">Subscribe Our Newsletter</h2>
          <p className="mt-2 text-slate-600">Subscribe on our newsletter to get our</p>
          <p className='text-slate-600 mb-10'>news</p>
        </div>

        <div>
          <h2 className='text-slate-400 mt-[30px]'>Your email address..</h2>
        </div>
         
          <div className="mt-4 ml-[100px]">

            {/* <div> */}
            <button className="bg-amber-400 text-white p-[15px] rounded-lg flex">Subscribe</button>
            {/* </div> */}           
           
          </div>
        </div>
    </div>
  );
};
export default DownloadAppSection;