import Image from "next/image";

export default function Home() {
  return (
    <div className="Parent h-screen bg-slate-900 text-white">
      <header className="w-full border-l-8 ">Header</header>
      <div className="grid grid-cols-1 divide-y divide-red-500">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          className="rounded-lg border border-rose-400 bg-gray-100 text-green-400 outline-none"
        />
        <button className="my-4 h-14 w-64 flex-none outline outline-2 outline-offset-2">
          Button A
        </button>
        <button className="my-4 h-14 w-64 flex-none outline-dashed outline-2 outline-offset-2">
          Button B
        </button>
        <button className="my-4 h-14 w-64 flex-none basis-2 outline-dotted outline-2 outline-offset-2">
          Button C
        </button>
        <button className="outline-3 my-4 h-14 w-64 flex-none basis-2 outline-double outline-offset-2">
          Button D
        </button>
      </div>
    </div>
  );
}
