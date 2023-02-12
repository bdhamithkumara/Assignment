import React from "react";
import { Logo } from "../assets";
import {
  SocialMediadark,
  FooterLinks1,
  FooterLinks2,
  FooterLinks3,
} from "../constants/index";

const FooterTop = () => {
  return (
    <div className="mx-6 py-10 text-center md:text-left">
      <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="">
          <div className="mb-2">
            <img src={Logo} alt="logo" className="w-[150px] md:w-[250px]" />
          </div>
          <div>
            <p className="text-[#232323] text-start font-[Lato] text-[16px] md:text-[18px]">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order typesetter likely
            </p>
          </div>
        </div>

        <div className="flex flex-row md:w-[580px] gap-10">
          <div className="uppercase mx-auto text-start relative ">
            <h6 className="font-[Optima] my-3 font-bold text-[22px]"> nevigation </h6>
            {FooterLinks1.map((id, index) => (
              <div key={id}>
                <p className="my-3 font-[Lato] font-[12px]  text-[#232323]">{id.name}</p>
              </div>
            ))}
          </div>

          <div className="uppercase  mx-auto text-start relative">
            <h6 className="font-[Optima] my-3 font-bold text-[22px]"> Company </h6>
            {FooterLinks2.map((id, index) => (
              <div key={id}>
                <p className="my-3 font-[Lato] font-[12px]  text-[#232323]">{id.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" mx-auto text-start md:ml-[350px] md:w-[300px]  ">
          <h6 className="font-[Optima] my-3 font-bold uppercase text-[22px]">

            contact info
          </h6>
          {FooterLinks3.map((id, index) => (
            <div key={id}>
              <div className="flex flex-row space-x-10 ">
                <div className="my-3 bg-[#213065] w-[50px] h-[50px]">
                  <img
                    src={id.imglnk}
                    alt="imgcontcat"
                    className="mx-auto my-2"
                  />
                </div>

                <div className="uppercase font-[Lato] font-[12px] my-auto text-[#232323] text-start">
                  <p>{id.cont}</p>
                  <p>{id.cont2}</p>
                  <p>{id.cont3}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex pt-5 gap-5 md:mt-[-60px]   justify-center md:justify-start
      ">
        {SocialMediadark.map((id, index) => (
          <div key={id} className="bg-[#213065] rounded-full w-9 h-9  ">
            <img src={id.imgl} alt="socialicon" className="mx-auto my-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterTop;
