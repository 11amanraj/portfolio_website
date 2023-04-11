import { BsFillMoonStarsFill } from 'react-icons/bs'

export default function Home() {
  return (
    <main>
      <nav className="bg-cyan-800 py-4 px-8 flex justify-between">
        <h1 className='text-2xl font-bold'>John Doe</h1>
        <ul className='flex items-center gap-4'>
          <li>
            <BsFillMoonStarsFill className='cursor-pointer' />
          </li>
          <li><a href="#" className='bg-white text-cyan-900 px-4 py-2 rounded'>Resume</a></li>
        </ul>
      </nav>
    </main>
  )
}
