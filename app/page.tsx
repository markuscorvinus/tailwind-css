import Image from "next/image";

export default function Home() {
  return (
    <div className="Parent">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div class=" rounded-lg bg-neutral-600">long</div>
        <div class=" rounded-lg bg-neutral-600">01</div>
        <div class=" rounded-lg bg-neutral-600">02</div>
        <div class=" rounded-lg bg-neutral-600">03</div>
        <div class=" rounded-lg bg-neutral-600">04</div>
        <div class=" rounded-lg bg-neutral-600">05</div>
        <div class=" rounded-lg bg-neutral-600">06</div>
        <div class=" rounded-lg bg-neutral-600">07</div>
      </div>
      <div class="mt-2 grid grid-flow-col grid-rows-4 gap-4">
        <div class=" row-span-4 rounded-lg bg-yellow-500"> 01</div>
        <div class=" rounded-lg bg-yellow-500 p-6">02</div>
        <div class=" rounded-lg bg-yellow-500 p-6">03</div>
        <div class=" rounded-lg bg-yellow-500 p-6">04</div>
        <div class=" rounded-lg bg-yellow-500 p-6">05</div>
        <div class=" rounded-lg bg-yellow-500 p-6">06</div>
        <div class=" rounded-lg bg-yellow-500 p-6">07</div>
        <div class=" rounded-lg bg-yellow-500 p-6">08</div>
        <div class=" rounded-lg bg-yellow-500 p-6">09</div>
        <div class=" rounded-lg bg-yellow-500 p-6">10</div>
        <div class=" rounded-lg bg-yellow-500 p-6">11</div>
        <div class=" rounded-lg bg-yellow-500 p-6">12</div>
        <div class=" rounded-lg bg-yellow-500 p-6">13</div>
      </div>
      <div class="mt-2 grid grid-flow-row-dense grid-cols-3 gap-4">
        <div class=" col-span-2 rounded-lg bg-green-700"> 01</div>
        <div class=" rounded-lg bg-green-700 p-6">02</div>
        <div class=" rounded-lg bg-green-700 p-6">03</div>
        <div class=" col-span-2 rounded-lg bg-green-700 p-6">04</div>
        <div class=" rounded-lg bg-green-700 p-6">05</div>
        <div class=" col-span-2 rounded-lg bg-green-700 p-6">06</div>
        <div class=" rounded-lg bg-green-700 p-6">07</div>
        <div class=" rounded-lg bg-green-700 p-6">08</div>
        <div class=" rounded-lg bg-green-700 p-6">09</div>
        <div class=" rounded-lg bg-green-700 p-6">10</div>
        <div class=" rounded-lg bg-green-700 p-6">11</div>
        <div class=" rounded-lg bg-green-700 p-6">12</div>
        <div class=" rounded-lg bg-green-700 p-6">13</div>
      </div>
    </div>
  );
}
