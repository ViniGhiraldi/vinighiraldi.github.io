import fotoDePerfil from './assets/perfil.png';
import { motion } from 'framer-motion';
import { Header, SVGOrangeBubble, SVGOrangeLeftTopBubble, SVGTriangleDivider } from './shared/components';
import { ChevronDown, Github, Link, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Environment } from './shared/environment/Environment';

interface IGitRepos{
  full_name: string;
  description: string | null;
  updated_at: string;
  language: string;
  html_url: string;
}

export const App = () => {
  const [repositories, setRepositories] = useState<IGitRepos[]>([]);

  useEffect(() => {
    fetch(`${Environment.BASE_URL}/users/ViniGhiraldi/repos`)
    .then(result => result.json())
    .then(result => setRepositories(result))
    .catch(error => console.log(error));
  }, [])
  
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <div id='home' className='min-h-screen pt-16 relative flex flex-col justify-center items-center bg-gradient-to-b from-[#272727] to-[#111111]'>
        <SVGOrangeLeftTopBubble className='absolute top-0 left-0 max-h-40'/>
        <div className='container px-8 flex md:flex-col md:items-center md:gap-20 justify-around'>
          <div className='md:text-center flex flex-col justify-between'>
            <div>
              <motion.h1 className='text-5xl text-white font-moondance tracking-tighter leading-10'>Eu sou <motion.span whileHover={{letterSpacing: 0}} className='md:text-4xl bg-gradient-to-r font-inter from-orange-500 to-red-500 bg-clip-text text-transparent'>Vinícius Correia Ghiraldi</motion.span></motion.h1>
              <p className='font-inter text-xl text-zinc-400 tracking-tighter'>Desenvolvedor Full-Stack</p>
            </div>
            <div className='flex gap-8'>
              <motion.a href='mailto:vinighiraldi198@gmail.com' target='_blank' whileHover={{scale: 1.25}} className='p-2 bg-gradient-to-br from-orange-500 to-red-500 hover:bg-gradient-to-tl rounded-full shadow-md shadow-black'>
                <Mail className='text-zinc-900' size={36}/>
              </motion.a>
              <motion.a href='https://github.com/vinighiraldi' target='_blank' whileHover={{scale: 1.25}} className='p-2 bg-gradient-to-br from-orange-500 to-red-500 hover:bg-gradient-to-tl rounded-full shadow-md shadow-black'>
                <Github className='text-zinc-900' size={36}/>
              </motion.a>
              <motion.a href='https://www.linkedin.com/in/vinighiraldi/' target='_blank' whileHover={{scale: 1.25}} className='p-2 bg-gradient-to-br from-orange-500 to-red-500 hover:bg-gradient-to-tl rounded-full shadow-md shadow-black'>
                <Linkedin className='text-zinc-900' size={36}/>
              </motion.a>
            </div>
          </div>
          <div className='flex items-center justify-center xs:hidden'>
            <SVGOrangeBubble className='absolute md:hidden max-h-[80vh]'/>
            <motion.img 
            transition={{type: 'spring', damping: 11, stiffness: 150}}
            whileHover={{scale: 1.3}} 
            src={fotoDePerfil} 
            className='relative h-72 w-auto rounded-full' 
            alt='Vinícius Correia Ghiraldi'
            />
          </div>
        </div>
        <a href='#projects' className='absolute bottom-0 animate-bounce'>
          <ChevronDown className='text-white' size={52} strokeWidth={1.5}/>
        </a>
      </div>
      <div id='projects' className='min-h-screen flex flex-col relative bg-zinc-800'>
        <SVGTriangleDivider className="absolute top-0 left-0 w-full overflow-hidden leading-[0]"/>
        <div className='container mt-44 flex flex-col items-center gap-12'>
          <h1 className='text-5xl font-inter uppercase font-bold'>Projetos</h1>
          <div className='grid grid-cols-2 sm:grid-cols-1 p-8 gap-8 rounded-3xl sm:rounded-lg shadow-[0_0_30px_#00000099] bg-gradient-to-br from-[#272727] to-[#111111]'>
            {repositories.map((repo, i) => (
              <motion.a key={i} whileHover={{scale: 1.025}} href={repo.html_url} target='_blank' className='p-4 rounded-md shadow-[0_5px_10px_0_#00000099] grid-cols-1 border-2 border-orange-500 text-white '>
                <div className='flex justify-between items-center gap-4'>
                  <h1 className='text-xl tracking-wider line-clamp-1' title={repo.full_name}>{repo.full_name}</h1>
                  <Link className='text-zinc-400' size={20}/>
                </div>
                <p className='text-base font-inter'>{repo.description}</p>
                <span className='font-mono font-bold tracking-wider px-4 rounded-full shadow-md bg-orange-500 line-clamp-1 max-w-fit'>{repo.language}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}