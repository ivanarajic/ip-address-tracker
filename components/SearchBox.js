import React, { useContext, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { AppContext } from "../store/AppContext";

function SearchBox() {
  const trackCtx = useContext(AppContext);
  const [inputText, setInputText] = useState();

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    trackCtx.searchIp(inputText);
  };
  return (
    <form onSubmit={submitHandler} className="flex w-full sm:max-w-xl">
      <input
        onChange={inputHandler}
        className="w-full cursor-pointer rounded-tl-lg rounded-bl-lg p-3 outline-none"
        type="text"
        placeholder="Search for any IP address or domain"
      />
      <button className="rounded-tr-lg rounded-br-lg bg-black p-3 hover:bg-stone-700 ">
        <BiChevronRight className="text-white" size={24} />
      </button>
    </form>
  );
}

export default SearchBox;
