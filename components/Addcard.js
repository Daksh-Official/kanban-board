"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Addcard = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("kanban-board");
    if (storedData) {
      setArr(JSON.parse(storedData));
    }
  }, []);

  const handleSubmit = () => {
    const raw = {
      id: uuidv4(),
      title: title,
      desc: desc,
      status: "Pending"
    };

    const updatedArr = [...(arr || []), raw];
    setArr(updatedArr);
    localStorage.setItem("kanban-board", JSON.stringify(updatedArr));
    alert("Item added successfully");
  };
  return (
    <div>
      <div className="bg-neutral-700 p-3 rounded-t-2xl flex items-center gap-2">
        <lord-icon
          src="https://cdn.lordicon.com/vjgknpfx.json"
          trigger="hover"
          stroke="bold"
          colors="primary:#ffffff,secondary:#ffffff"
          style={{ width: "26px", height: "26px" }}>
        </lord-icon>
        <h2 className="text-lg">Create Card</h2>
      </div>
      <div className="p-3">
        <form className="max-w-sm mx-auto">
          <div className="mb-3">
            <label htmlFor="title" className="block mb-2.5 text-sm font-medium text-heading">Title</label>
            <input type="text" id="title" className="bg-neutral-800 border-neutral-400 outline-0 rounded-full border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="card title here" required />
          </div>
          <div className="mb-5">
            <label htmlFor="visitors" className="block mb-2.5 text-sm font-medium text-heading">Description</label>
            <textarea type="text" id="visitors" className="bg-neutral-800 outline-0 border-neutral-400 rounded-md border border-default-medium text-heading text-base rounded-base min-h-24 focus:ring-brand focus:border-brand block w-full px-4 py-3.5 shadow-xs placeholder:text-body" placeholder="your card description here" value={desc} onChange={(e) => { setDesc(e.target.value) }} required />
          </div>
          <button type="submit" className="text-white w-full bg-blue-600 cursor-pointer hover:bg-blue-500 rounded-full bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={handleSubmit}>Add card</button>
        </form>
      </div>
    </div>
  )
}

export default Addcard
