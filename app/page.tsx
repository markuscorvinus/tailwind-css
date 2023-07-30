import Image from "next/image";

export default function Home() {
  return (
    <div className="Parent">
      <div>Header</div>
      <div className="flex flex-col md:flex-row">
        <div className="w-32 basis-1/4 bg-sky-500 ">Sidebar</div>
        <div className="w-full basis-3/4 bg-red-600">MainContent</div>
      </div>
    </div>
  );
}
