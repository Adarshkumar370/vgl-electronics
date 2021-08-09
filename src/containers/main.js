import React from "react";
import Layout from "./Layout";
import Banner from "../assets/banner.png";
import MobileBanner from "../assets/mobile-banner.png";
import CeilingBanner from "../assets/ceiling-fan/banner.png";
import TableBanner from "../assets/table-fan/banner.png";
import PedestalBanner from "../assets/pedestal-fan/banner.png";
import WallBanner from "../assets/wall-fan/banner.png";
import VentilatingBanner from "../assets/ventilating-fan/banner.png";
import Card from "../components/UI/Card";
const main = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-4 duration-1000 delay-300">
        <div className="my-1 min-w-full hidden md:block">
          <img src={Banner} alt="banner" />
        </div>
        <div className="my-1 min-w-full  md:hidden">
          <img src={MobileBanner} alt="banner" />
          <h1 className="m-3 p-3 text-xl bg-gray-200 shadow-md">
            Masterpieces to match your decor
          </h1>
        </div>
        <div>
          <h1 className="text-3xl font-semibold  ">
            <span className="border-red-600 border-b-4 pr-3 pb-2 mx-4 font-serif ">
              Fans
            </span>
          </h1>
        </div>
        <div>
          <p className="m-3 text-justify leading-8 p-3 text-lg">
            In a hot and humid climate like ours, fans are not just required,
            but a basic necessity. From exhaust fans to keep your bathrooms free
            of damp and odor to ceiling fans that add a touch of style to your
            rooms, our wide variety of fans will suit your unique needs. Our Fan
            insure cooling in every corner of your room and provide a
            confortable enviroment
          </p>
        </div>
        <div className="flex md:flex-row flex-wrap flex-col gap-12">
          <Card
            img={CeilingBanner}
            alt="Ceiling Fan"
            title="Ceiling Fan"
            description="A wide range of ceiling fans for rooms of every size that compliment your décor. Choose from energy efficient, high speed, anti-dust, Duratech, decorative and many more."
            link="/ceiling-fan"
          />
          <Card
            img={TableBanner}
            alt="Table Fan"
            title="Table Fan"
            description="A gust of cool breeze to your face irrespective of where you are. A simple yet exciting innovation that lets you bid goodbye to heat and uneasiness."
            link="/table-fan"
          />
          <Card
            img={PedestalBanner}
            alt="Pedestal Fan"
            title="Pedestal Fan"
            description="Choose exactly how and where you want that fresh breeze of air, be it your verandah or inside your home."
            link="/pedestal-fan"
          />
          <Card
            img={WallBanner}
            alt="Wall Fan"
            title="Wall Fan"
            description="A wide variety of aesthetically appealing wall mounted fans that provide unmatched air delivery."
            link="/wall-fan"
          />
          <Card
            img={VentilatingBanner}
            alt="Ventilating Fan"
            title="Ventilating Fan"
            description="Solutions for air circulation in confined spaces that provide relief from smoky air and unwanted odours at home."
            link="/ventilating-fan"
          />
        </div>
      </div>
    </Layout>
  );
};

export default main;
