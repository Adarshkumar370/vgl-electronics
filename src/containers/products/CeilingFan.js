import Layout from "../Layout";
import Banner from "../../assets/ceiling-fan/banner2.png";
import MobileBanner from "../../assets/ceiling-fan/mobile-banner.png";
import New from "../../assets/new.png";
const CeilingFan = () => {
  return (
    <Layout>
      <div className="my-1 hidden md:block">
        <img src={Banner} alt="Banner" className="w-full" />
        <h1 className="text-3xl pt-6 m-3 font-semibold  ">
          <span className="border-b-2 pb-2 pr-2 border-gray-700">
            Ceiling Fan
          </span>
        </h1>
      </div>
      <div className="md:hidden">
        <img src={MobileBanner} alt="Banner" />
      </div>

      <div className='mt-12'>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h2 className=" m-2 p-2 uppercase border-b-2 font-bold border-gray-500 leading-7 text-red-600 text-2xl">
              Lumina DJ
            </h2>
            <h3 className="mx-2 px-2 uppercase  text-xl">
              premium smart led fan
            </h3>
          </div>
          <div>
          <img src={New} alt="New" className='h-10' />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CeilingFan;
