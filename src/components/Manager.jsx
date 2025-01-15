import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
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

  const copytext = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied to Clipboard!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const savepassword = () => {
    if(form.site.length>3 && form.username.length>3 && form.password.length){
      setpassarray([...passarray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passarray, { ...form, id: uuidv4() }])
      );
      toast("Password saved!!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setform({ site: "", username: "", password: "" });
    }
    else{
      toast("All fields required!!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const deletepassword = (id) => {

    let c=confirm("Do you want to delete this password");
    if(c){
      setpassarray(passarray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passarray.filter((item) => item.id !== id))
      );
      toast("Password Deleted!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const editpassword = (id) => {
    const edting_data = passarray.filter((item) => item.id === id)[0];
    setpassarray(passarray.filter((item) => item.id !== id));
    setform(edting_data);
  };

  return (
    <div className="min-h-[90vh] overflow-auto">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className="p-0 md:p-0 md:mycontainer md:px-40 md:py-5 ">
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
          <div className="flex md:flex-row flex-col gap-2 py-4">
            <input
              value={form.username}
              className="rounded-md border-2 border-green-300 w-3/5 text-black px-4 py-1 w-full"
              type="text"
              name="username"
              placeholder="Enter username"
              id=""
              onChange={handlechange}
            />
            <div className="relative md:w-2/5">
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
                  width={25}
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
              Save Password
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
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-[#b8e6f4]">
                  {passarray.map((item) => {
                    return (
                      <tr>
                        <td className="text-center py-2 border-2">
                          <div className="flex flex-row py-2 justify-center gap-2">
                            <a href={item.site}>{item.site}</a>
                            <img
                              onClick={() => copytext(item.site)}
                              className="cursor-pointer"
                              src="/assets/copy.svg"
                              alt="copy btn"
                            />
                          </div>
                        </td>
                        <td className="text-center py-2 border-2">
                          <div className="flex flex-row py-2 justify-center gap-2">
                            {item.username}
                            <img
                              onClick={() => copytext(item.username)}
                              className="cursor-pointer"
                              src="/assets/copy.svg"
                              alt="copy btn"
                            />
                          </div>
                        </td>
                        <td className="text-center py-2 border-2">
                          <div className="flex flex-row py-2 justify-center gap-2">
                            {item.password}
                            <img
                              onClick={() => copytext(item.password)}
                              className="cursor-pointer"
                              src="/assets/copy.svg"
                              alt="copy btn"
                            />
                          </div>
                        </td>

                        <td className=" text-center py-2 border-2 ">
                          <div className="flex justify-center items-center gap-3">
                            <lord-icon
                              onClick={() => deletepassword(item.id)}
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>

                            <img
                              onClick={() => editpassword(item.id)}
                              src="/assets/edit.svg"
                              height={25}
                              width={25}
                              alt=""
                            />
                          </div>
                        </td>
                      </tr>
                    );
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
