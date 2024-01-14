import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'


const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Student of Data Science", "Web Developer"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      {/* image */}
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
        Diviya Bhatia
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>
            {text}
          </span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>about</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero

