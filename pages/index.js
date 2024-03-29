import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Head from 'next/head'

const index = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Portfolio</title>
      </Head>

      {/* Header */}
      <Header/>

      {/* Hero */}
      <section
      id='hero'
      className='snap-start'
      >
        <Hero/>

      </section>

      {/* About */}
      <section
      id='about'
      className='snap-center'
      >
        <About/>
      </section>

      {/* Experience */}
      <section
      id='experience'
      className='snap-center'
      >
        <WorkExperience/>
      </section>

      {/* Skills */}
      <section
      id='skills'
      className='snap-start'
      >
        <Skills/>
      </section>

      {/* Projects */}
      <section
      id='projects'
      className='snap-start'
      >
        <Projects/>
      </section>

      {/* Contact Me */}
      <section
      id='contact'
      className='snap-start mt-56'
      >
        <ContactMe/>
      </section>

    </div>
  )
}

export default index