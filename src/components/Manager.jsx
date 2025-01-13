import React from "react";

function Manager() {
  return (
    <div>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className="mycontainer w-3/4">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-[#62b3cc]">&lt;</span>
          Key
          <span className="text-[#62b3cc]">Vault/&gt;</span>
        </h1>
        <p className="text-lg text-[#346c7d] text-center">
          Your own Password Manager
        </p>
        <div className="text-white flex flex-col p-4">
          <input
            className="rounded-md border-2 border-green-300 text-black px-4 py-1 w-full"
            type="text"
            placeholder="Enter website name"
            name=""
            id=""
          />
          <div className="flex gap-2 py-4">
            <input
              className="rounded-md border-2 border-green-300 w-3/5 text-black px-4 py-1 w-full"
              type="text"
              name=""
              placeholder="Enter username"
              id=""
            />
            <div  className="relative w-2/5">
              <input
                className="rounded-md border-2 border-green-300 text-black px-4 py-1 w-full"
                type="password"
                name=""
                placeholder="Password"
                id=""
              />
              <span className="absolute text-black right-1 py-1">
                show
              </span>
            </div>
          </div>
          <div className="mx-auto">
            <button className="border-1 flex flex-row items-center hover:bg-[#8acee3] bg-[#56bddc] rounded-full  px-4 py-1 border-2 text-black border-black w-fit">
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              Add Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manager;
