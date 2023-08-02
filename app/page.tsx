import Image from "next/image";

export default function Home() {
  return (
    <div className="Parent h-screen bg-white p-4 text-white">
      <div className="block rounded-lg border bg-white p-4 text-black shadow-md">
        <h1 className="text-2xl">Block</h1>
        <p className="mb-4">This is my Div</p>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
      </div>
      <div className="mx-4 inline-block rounded-lg border bg-white p-4 text-black shadow-lg">
        <h1 className="text-2xl">Inline-Block</h1>
        <p className="mb-4">This is my Div</p>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
      </div>
      <div className="inline-flex rounded-lg border bg-white p-4 text-black shadow-md">
        <h1 className="text-2xl">Inline Flex</h1>
        <p className="mb-4">This is my Div</p>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
      </div>
      <div className="grid rounded-lg border bg-white p-4 text-black shadow-md">
        <h1 className="text-2xl">Grid</h1>
        <p className="mb-4">This is my Div</p>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
      </div>
      <div className="inline-grid rounded-lg border bg-white p-4 text-black shadow-md">
        <h1 className="text-2xl">Inline-Grid</h1>
        <p className="mb-4">This is my Div</p>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
      </div>
      <div className="contents rounded-lg border bg-white p-4 text-black shadow-md">
        <h1 className="text-2xl">Contents</h1>
        <p className="mb-4">This is my Div</p>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
      </div>
    </div>
  );
}
