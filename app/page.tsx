import Image from 'next/image'

export default function Home() {
  return (
    <div className='whitespace-nowrap'>
      <h1 className='text-xl itali'>Title 1</h1>
      <h2 className='text-xl'>Title 2</h2>
      <h3 className='text-xl'>Title 3</h3>
      <p className='text-base leading-loose underline decoration-red-600 decoration-wavy decoration-1 underline-offset-4'>A regular paragraph</p>
      <p className='text-sm'>A description paragraph</p>
      <p className='note text-xs'>A little note</p>
      <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  )
}
