import Image from 'next/image';
import phoneUI from '../Images/phone.jpeg';
// import googlePlay from '../images/googleplay.png';
// import appStore from '../images/appStore.png'
const DownloadAppSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beige-100">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto p-6">
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <Image src={phoneUI} alt="Food App" className="w-full h-auto rounded-md" />
        </div>
        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-orange-500 font-medium">Download Our App</h2>
          <h1 className="text-4xl font-bold my-4">It’s all here. All in one app.</h1>
          <p className="text-gray-600 mb-6">
            Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.
          </p>
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
    </div>
  );
};
export default DownloadAppSection;