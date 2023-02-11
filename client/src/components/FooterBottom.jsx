import React from "react";

const FooterBottom = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col space-x-20 items-center justify-center uppercase border-t-2 my-3 py-3 border-black">
        <div>company name</div>
        <div>Privacy Policy</div>
        <div>Terms and conditions</div>
      </div>
      <div className="uppercase items-center justify-center flex border-t-2 my-3 py-3 border-black">
        Copyright © 2021 company name. All Rights Reserved. 
      </div>
    </div>
  );
};

export default FooterBottom;
