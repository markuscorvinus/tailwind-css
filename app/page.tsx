import Image from "next/image";

export default function Home() {
  return (
    <div className="Parent h-screen bg-slate-900 text-white">
      <div className="container mx-auto bg-red-500">
        <h1>Hello</h1>
      </div>
      <div className="columns-3 gap-8">
        <img src="https://picsum.photos/200" alt="" />
        <img src="https://picsum.photos/202" alt="" />
        <img src="https://picsum.photos/203" alt="" />
        <img src="https://picsum.photos/204" alt="" />
        <img src="https://picsum.photos/278" alt="" />
        <img src="https://picsum.photos/344" alt="" />
      </div>
      <div className="container px-2">
        <img className="float-left" src="https://picsum.photos/200" alt="" />
        <p className="px-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          fugit praesentium ad perspiciatis doloremque, at delectus ipsum?
          Laborum, reiciendis harum, rerum at, porro quibusdam minus enim
          perspiciatis voluptate aspernatur molestias? Maybe we can live without
          libraries, people like you and me. Maybe. Sure, we're too old to
          change the world, but what about that kid, sitting down, opening a
          book, right now, in a branch at the local library and finding drawings
          of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese
          Brothers? Doesn't HE deserve better? Look. If you think this is about
          overdue fines and missing books, you'd better think again. This is
          about that kid's right to read a book without getting his mind warped!
          Or: maybe that turns you on, Seinfeld; maybe that's how y'get your
          kicks. You and your good-time buddies.
        </p>
      </div>
      <div className="container px-2">
        <div className="relative h-32 w-32 rounded-lg bg-red-500 p-8">
          <div className="absolute top-0 h-24 w-24 rounded-lg bg-green-500"></div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div className="bg-teal-500">01</div>
        <div className="invisible bg-teal-500">02</div>
        <div className="bg-teal-500">03</div>
      </div>
      <div className="container flex">
        <div className="z-40 rounded-full border border-white bg-cyan-500">
          05
        </div>
        <div className="z-30 rounded-full border border-white bg-cyan-500">
          04
        </div>
        <div className="z-20 rounded-full border border-white bg-cyan-500">
          03
        </div>
        <div className="z-10 rounded-full border border-white bg-cyan-500">
          02
        </div>
        <div className="z-0 rounded-full border border-white bg-cyan-500">
          01
        </div>
      </div>
    </div>
  );
}
