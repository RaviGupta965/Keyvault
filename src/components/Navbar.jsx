import React from "react";

function Navbar() {
  return (
    <div className="bg-green-30">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-[#62b3cc]">&lt;</span>
          Key
          <span className="text-[#62b3cc]">Vault/&gt;</span>
        </div>
        <div className="flex flex-row gap-3 justify-between items-center">
          <ul>
            <li className="flex gap-4">
              <a className="hover:font-bold" href="/">
                Home
              </a>
              <a className="hover:font-bold" href="">
                About
              </a>
              <a className="hover:font-bold" href="">
                Contact
              </a>
            </li>
          </ul>
          <a href="https://github.com/RaviGupta965" className="cursor-pointer">
            <img src="/assets/github.png" alt="github logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
