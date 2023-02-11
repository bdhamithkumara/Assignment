import React from "react";
import { GetinTouch } from "../constants/index";
import { SocialMedia } from "../constants/index";


const GetIntouch = () => {
  return (
    <div className="pl-8 ">
      <h1 className="uppercase text-[30px] mb-10 mt-3">Get in touch</h1>
      {GetinTouch.map((id, index) => (
        <div className="flex flex-row m-2" key={id.id}>
          <div className=" border-[#A2A8BE] border-2 w-10 h-10 rounded-md p-2 cursor-pointer">
            <img
              src={id.imag}
              alt="Wtritetousimg"
              className=""
            />
          </div>
          <div className="mt-2 ml-5">
            {/* title */}
            <div>
              <div className="font-Lato font-semibold">{id.title}</div>
            </div>
            {/* subtitle */}
            <div>
              <div className="font-Lato font-normal mt-1">{id.cont}</div>
            </div>
            {/* second subtitle */}
            <div>
              <div className="font-Lato font-semibold mt-2">{id.subcont}</div>
              <div className="font-Lato font-semibold">{id.subcont2}</div>
              <div className="font-Lato font-semibold">{id.subcont3}</div>              
              <div className="font-Lato font-semibold">{id.subcont4}</div>
              <div className="font-Lato font-semibold">{id.subcont5}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-8 mt-16 ml-2 ">
        {SocialMedia.map((index, imgz) => (
          <div className="border-black border-2 w-10 h-10 rounded-md p-2 cursor-pointer " key={index}>
            <img src={index.imgl} alt="img-social" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetIntouch;
