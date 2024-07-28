import Image from 'next/image';
import phoneUI from '../Images/phone.jpeg';
// import googlePlay from '../images/googleplay.png';
// import appStore from '../images/appStore.png'
const DownloadAppSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beige-100">

      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto p-6">
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <Image src={phoneUI} alt="Food App" className="w-48 justify-center " />
        </div>

        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-orange-500 font-medium">Download Our App</h2>
          <h1 className="text-4xl font-bold my-4">It’s all here.</h1>
          <h1 className='text-4xl font-bold my-4'> All in one app.</h1>

          {/* <div className='flex-wrap'> */}
          <p className="text-slate-400">Discover local, on-demand delivery or Pickup from</p>
            <p className='text-slate-400'>restaurants, nearby grocery and convenience stores,</p>
            <p className='text-slate-400'>and more.</p>
          {/* </div> */}
         

          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="inline-block">
              {/* <Image src={appStore} alt="Download on the App Store" width={135} height={40} /> */}
            </a>
            <a href="#" className="inline-block">
              {/* <Image src={googlePlay} alt="Get it on Google Play" width={135} height={40} /> */}
            </a>
          </div>
        </div>
      </div>

      <div className="flex gap-[90px]">
        <div className='ml-[-120px]'>
        <h2 className="text-3xl font-bold">Subscribe Our Newsletter</h2>
          <p className="mt-2 text-slate-600">Subscribe on our newsletter to get our</p>
          <p className='text-slate-600'>news</p>
        </div>

        <div>
          <h2 className='text-slate-400 mt-[30px]'>Your email address..</h2>
        </div>
         
          <div className="mt-4 flex justify-center ml-[100px]">
            <button className="bg-amber-400 text-white p-[15px] rounded-lg">Subscribe</button>
          </div>
        </div>

    </div>
  );
};
export default DownloadAppSection;