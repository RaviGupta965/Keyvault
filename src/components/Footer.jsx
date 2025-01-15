import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-row justify-between items-center bg-[#c7eff6] py-3 sticky bottom-0">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-[#62b3cc]">&lt;</span>
          Key
          <span className="text-[#62b3cc]">Vault/&gt;</span>
        </h1>
        <div>
          Created with <img className="inline-block" src="/assets/heart.svg"></img>&nbsp;by Ravi
        </div>
        <div>2025 &copy;</div>
      </div>
    </>
  );
}

export default Footer;
