import fotoDePerfil from './assets/perfil.png';
import fotoApontando from './assets/apontando.png';
import { motion } from 'framer-motion';
import { Box, Header, SVGInvertedArrowDivider, SVGOrangeBubble, SVGTiltDivider, SVGTriangleDivider } from './shared/components';
import { Check, CheckCircle, ChevronDown, Github, GraduationCap, Hourglass, Landmark, Link, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Environment } from './shared/environment/Environment';

interface IGitRepos {
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
      <Header />
      {/* Home */}
      <div id='home' className='min-h-screen pt-16 relative flex flex-col justify-center items-center bg-gradient-to-b from-[#272727] to-[#111111]'>
        <Box className='container px-8 flex md:flex-col md:items-center gap-12 justify-around'>
          <div className='md:text-center flex flex-col gap-8 justify-between'>
            <div>
              <motion.h1 className='text-5xl md:text-4xl text-white tracking-tighter'>Eu sou <motion.span whileHover={{ letterSpacing: 0 }} className='bg-gradient-to-r font-bold from-orange-500 to-red-500 bg-clip-text text-transparent'>Vinícius Correia Ghiraldi</motion.span></motion.h1>
              <p className='font-inter text-lg text-zinc-400 tracking-widest'>Desenvolvedor Web</p>
            </div>
            <div className='flex md:justify-center gap-8'>
              <motion.a href='mailto:vinighiraldi198@gmail.com' target='_blank' whileHover={{ scale: 1.25 }} className='p-2 bg-gradient-to-br from-orange-500 to-red-500 hover:bg-gradient-to-tl rounded-full shadow-md shadow-black'>
                <Mail className='text-zinc-900' size={36} />
              </motion.a>
              <motion.a href='https://github.com/vinighiraldi' target='_blank' whileHover={{ scale: 1.25 }} className='p-2 bg-gradient-to-br from-orange-500 to-red-500 hover:bg-gradient-to-tl rounded-full shadow-md shadow-black'>
                <Github className='text-zinc-900' size={36} />
              </motion.a>
              <motion.a href='https://www.linkedin.com/in/vinighiraldi/' target='_blank' whileHover={{ scale: 1.25 }} className='p-2 bg-gradient-to-br from-orange-500 to-red-500 hover:bg-gradient-to-tl rounded-full shadow-md shadow-black'>
                <Linkedin className='text-zinc-900' size={36} />
              </motion.a>
            </div>
          </div>
          <div className='flex items-center justify-center xs:hidden'>
            <SVGOrangeBubble className='absolute md:hidden max-h-[80vh]' />
            <motion.img
              transition={{ type: 'spring', damping: 11, stiffness: 150 }}
              whileHover={{ scale: 1.3 }}
              src={fotoDePerfil}
              className='relative h-72 w-auto rounded-full'
              alt='Vinícius Correia Ghiraldi'
            />
          </div>
        </Box>
        <a href='#about' className='absolute bottom-0 animate-bounce'>
          <ChevronDown className='text-white' size={52} strokeWidth={1.5} />
        </a>
      </div>
      {/* About */}
      <div id='about' className='flex flex-col relative bg-[#272727]'>
        <SVGTriangleDivider className="absolute top-0 left-0 w-full overflow-hidden leading-[0]" />
        <Box className='container mt-20 p-8 pb-12 flex justify-around items-center gap-12'>
          <div className='bg-orange-500 p-2 rounded-md rounded-tr-3xl rounded-bl-3xl shadow-xl md:hidden'>
            <img src={fotoApontando} className='h-72 rounded-bl-3xl' alt='Vinícius Correia Ghiraldi' />
          </div>
          <div className='space-y-4'>
            <h1 className='text-center text-5xl text-orange-500 tracking-tighter font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>Quem Sou Eu</h1>
            <p className='max-w-sm text-white text-lg font-inter font-light leading-5'>Nascido em 2004 no interior de São Paulo, conheci a programação no ano de 2020 em uma escola técnica. Foi amor a primeira vista, já que eu sempre gostei de desafios de lógica. Em 2023 me tornei um intusiasta de JavaScript, e desde então tenho focado em aprender sobre ReactJs, NodeJs e TypeScript. Em Julho do mesmo ano iniciei uma graduação em Engenharia de Software na Unicesumar. Além de programação, adoro atividades físicas e esportes, e no meu tempo livre gosto de me divertir e competir em jogos online.</p>
          </div>
        </Box>
      </div>

      {/* Projects */}

      <div id='projects' className='flex flex-col relative bg-[#111111]'>
        <SVGTiltDivider className='absolute top-0 left-0 w-full overflow-hidden leading-[0]'/>
        <Box className='container mt-20 py-8 flex flex-col items-center gap-12'>
          <h1 className='text-5xl text-orange-500 tracking-tighter font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>Projetos</h1>
          <div className='grid grid-cols-2 sm:grid-cols-1 p-8 gap-8 rounded-3xl sm:rounded-lg shadow-[0_0_30px_#00000099] bg-gradient-to-br from-[#272727] to-[#111111]'>
            {repositories.map((repo, i) => (
              <motion.a key={i} whileHover={{ scale: 1.025 }} href={repo.html_url} target='_blank' className='p-4 rounded-md shadow-[0_5px_10px_0_#00000099] grid-cols-1 border-2 border-orange-500 text-white '>
                <div className='flex justify-between items-center gap-4'>
                  <h1 className='text-xl tracking-wider line-clamp-1' title={repo.full_name}>{repo.full_name}</h1>
                  <Link className='text-zinc-400' size={20} />
                </div>
                <p className='text-base font-inter'>{repo.description}</p>
                <span className='font-mono font-bold tracking-wider px-4 rounded-full shadow-md bg-gradient-to-b from-orange-500 to-red-500 line-clamp-1 max-w-fit'>{repo.language}</span>
              </motion.a>
            ))}
          </div>
        </Box>
      </div>

      {/* Education */}

      <div id='education' className='flex flex-col relative bg-gradient-to-r from-orange-500 to-red-500'>
        <SVGInvertedArrowDivider className='absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180'/>
        <Box className='container mt-20 p-8 sm:px-0'>
          <div className='p-8 rounded-3xl sm:rounded-none bg-gradient-to-br from-[#111111] to-[#272727] shadow-[0_0_10px_#00000099] flex flex-col items-center gap-12'>
            <h1 className='text-5xl text-orange-500 tracking-tighter font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>Educação</h1>

            <div className='grid grid-cols-2 sm:grid-cols-1 gap-8 w-full items-start'>
              <div className='relative grid-cols-1 p-4 rounded-md shadow-[0_5px_10px_0_#00000099] bg-gradient-to-br from-orange-500 to-red-500 space-y-2'>
                
                <h1 className='text-2xl font-inter tracking-tighter line-clamp-2' title='Análise e Desenvolvimento de Sistemas'>Análise e Desenvolvimento de Sistemas</h1>
                <div className='px-4 sm:px-0 space-y-4'>
                  <p className='flex sm:flex-col gap-8 sm:gap-0'>
                    <Landmark className='min-w-[24px]'/>
                    <span className='text-base line-clamp-2'>ETEC Dr. Nelson Alves Vianna</span>
                  </p>
                  <p className='flex sm:flex-col gap-8 sm:gap-0'>
                    <GraduationCap className='min-w-[24px]'/>
                    <span className='text-base line-clamp-2'>Curso técnico</span>
                  </p>
                  <p className='flex sm:flex-col gap-8 sm:gap-0'>
                    <Hourglass className='min-w-[24px]'/>
                    <span className='text-base line-clamp-2'>3 anos | 2020 - 2023</span>
                  </p>
                </div>
                <CheckCircle className='absolute right-2 bottom-2 text-emerald-500'/>
              </div>
              <div className='relative grid-cols-1 p-4 rounded-md shadow-[0_5px_10px_0_#00000099] bg-gradient-to-br from-orange-500 to-red-500 space-y-2'>
                <h1 className='text-2xl font-inter tracking-tighter line-clamp-2'>Engenharia de Software</h1>
                <div className='px-4 sm:px-0 space-y-4'>
                  <p className='flex sm:flex-col gap-8 sm:gap-0'>
                    <Landmark className='min-w-[24px]'/>
                    <span className='text-base line-clamp-2'>Unicesumar</span>
                  </p>
                  <p className='flex sm:flex-col gap-8 sm:gap-0'>
                    <GraduationCap className='min-w-[24px]'/>
                    <span className='text-base line-clamp-2'>Curso superior</span>
                  </p>
                  <p className='flex sm:flex-col gap-8 sm:gap-0'>
                    <Hourglass className='min-w-[24px]'/>
                    <span className='text-base line-clamp-2'>4 anos | 2023 - 2027</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Box>
      </div>
    </div>
  )
}