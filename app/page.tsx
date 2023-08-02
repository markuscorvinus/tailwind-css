import Image from "next/image";

export default function Home() {
  return (
    <div className="Parent h-screen bg-white p-4 ">
      <div className="inline-block rounded-lg border bg-white p-4 text-black shadow-md">
        <div className="relative">
          <div className="absolute inset-6 h-20 w-20 bg-white/30 backdrop-blur-sm" />
          <img
            src="https://source.unsplash.com/K_TbABnVzHo"
            alt=""
            className="mb-4 w-64 backdrop-blur-sm"
          />
        </div>

        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is my Div</p>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2">
          Say Hello
        </button>
      </div>
    </div>
  );
}
