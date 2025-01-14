import React, { useEffect, useState } from "react";

import { useRef } from "react";

function Manager() {
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passarray, setpassarray] = useState([]);
  const ref = useRef();
  const pass = useRef();

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpassarray(JSON.parse(passwords));
    }
  }, []);

  const showpassword = () => {
    if (ref.current.src.includes("/assets/open.png")) {
      ref.current.src = "/assets/close.png";
      pass.current.type = "text";
    } else {
      ref.current.src = "/assets/open.png";
      pass.current.type = "password";
    }
  };

  const savepassword = () => {
    setpassarray([...passarray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passarray, form]));
    console.log(passarray);
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
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
            value={form.site}
            className="rounded-md border-2 border-green-300 text-black px-4 py-1 w-full"
            type="text"
            placeholder="Enter website name"
            name="site"
            id=""
            onChange={handlechange}
          />
          <div className="flex gap-2 py-4">
            <input
              value={form.username}
              className="rounded-md border-2 border-green-300 w-3/5 text-black px-4 py-1 w-full"
              type="text"
              name="username"
              placeholder="Enter username"
              id=""
              onChange={handlechange}
            />
            <div className="relative w-2/5 ">
              <input
                value={form.password}
                ref={pass}
                className="rounded-md border-2 border-green-300 text-black px-4 py-1 w-full"
                type="password"
                name="password"
                placeholder="Password"
                id=""
                onChange={handlechange}
              />
              <span className="absolute text-black right-1 py-1 cursor-pointer">
                <img
                  ref={ref}
                  width={27}
                  src="/assets/open.png"
                  alt=""
                  onClick={showpassword}
                />
              </span>
            </div>
          </div>
          <div className="mx-auto">
            <button
              onClick={savepassword}
              className="border-1 flex flex-row items-center hover:bg-[#8acee3] bg-[#56bddc] rounded-full  px-4 py-1 border-2 text-black border-black w-fit"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              Add Password
            </button>
          </div>

          <div className="allpass text-black">
            <h1 className="font-bold text-2xl">All Passwords</h1>
            {passarray.length === 0 && <div>No passwords to show</div>}
            {passarray.length != 0 && (
              <table className="table-auto w-full rounded-md overflow-hidden ">
                <thead className="bg-[#3788a0]">
                  <tr>
                    <th className="py-2">Website</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                  </tr>
                </thead>
                <tbody className="bg-[#b8e6f4] ">
                  {passarray.map((item)=>{
                    return <tr>
                    <td className="text-center py-2 border-2">
                      <a href={item.site} >{item.site}</a>
                    </td>
                    <td className="text-center py-2 border-2">
                    {item.username}
                    </td>
                    <td className="text-center py-2 border-2">{item.password}</td>
                  </tr>
                  })}
                  
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manager;
