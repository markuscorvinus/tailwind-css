import Image from "next/image";
"use client";

import { useState } from "react";
import { ArrowDown } from "./arrowDown";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Option 1");

  const updateValue = (value: string) => {
    setSelectValue(value);
    setIsOpen(false);
  }
  return (
    <div className="Parent h-auto bg-white p-4 text-black">
      <h1>This is a Title</h1>
      <h2>This is a Subtitle</h2>
      <p>This is a paragraph</p>
      <a href="https://freecodecamp.org" className="cursor">
        This is an anchor
      </a>
      <div className="my-4">
        <button className="btn btn-primary cursor-pointer">
          This is a button
        </button>
      </div>
      <div className="my-4">
        <button className="btn btn-secondary cursor-pointer">
          This is a button
        </button>
      </div>
      <div className="my-4">
        <button disabled className="btn btn-primary cursor-not-allowed">
          This is a disabled
        </button>
      </div>
      <div>
        <input type="text" name="text" id="email" />
      </div>
      <div>
        <input
          disabled
          type="text"
          name="text"
          id="email-disabled"
          placeholder="disabled"
          title="disabled me"
        />
      </div>
      <div>
        <input type="date" name="date" id="date" />
      </div>
      <div className="my-4 flex items-start">
        <input type="checkbox" name="" id="checkbox1" className="" />
        <label htmlFor="checkbox1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia numquam
          voluptas quibusdam necessitatibus nemo. Debitis dignissimos
          praesentium laborum repellendus officia explicabo fuga, corporis
          labore! Necessitatibus at veritatis dolores hic eaque!
        </label>
      </div>
      <div>
        <select id="option">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div className="Select">
        <div className="child flex items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
          <span>{selectValue}</span>
          <div className={isOpen ? "rotate-180 transition" : "rotate-0 transition"}>
          <ArrowDown/>
          </div>          
        </div>
        {isOpen && (
          <div>
            <ul className="flex flex-col divide-y border-t">
              <li className="child" onClick={() => updateValue("Option 1")}>Option 1</li>
              <li className="child" onClick={() => updateValue("Option 2")}>Option 2</li>
              <li className="child" onClick={() => updateValue("Option 3")}>Option 3</li>
            </ul>
          </div>
        )}
      </div>
      <h1>This is a Title</h1>
      <h2>This is a Subtitle</h2>
    </div>
  );
}
