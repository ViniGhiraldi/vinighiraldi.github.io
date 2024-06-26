import fotoDePerfil from './assets/perfil.png';
import fotoApontando from './assets/apontando.png';
import curriculo from './assets/curriculo.pdf';
import { motion } from 'framer-motion';
import { Box, Carousel, EducationCard, Header, SVGArrow, SVGInvertedArrowDivider, SVGInvertedBookDivider, SVGOrangeBubble, SVGTiltDivider, SVGTriangleDivider, SVGWaveOpacityDivider, SkillCard } from './shared/components';
import { LuChevronDown, LuGithub, LuLink, LuLinkedin, LuMail, LuDownload, LuGlobe } from 'react-icons/lu';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiTailwindcss, SiStyledcomponents, SiMui, SiFigma, SiGit, SiAxios, SiBootstrap, SiJquery, SiVite, SiPostgresql, SiSqlite, SiExpress, SiReactrouter, SiJest, SiJsonwebtokens, SiWhatsapp, SiNextdotjs, SiPrisma, SiFastify, SiOpenai, SiReacthookform } from 'react-icons/si';
import { useEffect, useState } from 'react';
import { Environment } from './shared/environment/Environment';

interface IGitRepos {
  name: string;
  description: string | null;
  pushed_at: string;
  language: string;
  html_url: string;
  homepage: string;
}

export const App = () => {
  const [repositories, setRepositories] = useState<IGitRepos[]>([]);

  useEffect(() => {
    fetch(`${Environment.BASE_URL}/users/ViniGhiraldi/repos`)
      .then(result => result.json())
      .then(result => setRepositories((result as IGitRepos[]).sort((a,b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())))
      .catch(error => console.log(error));
  }, [])

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      {/* <span className='fixed bottom-0 left-1/2 -translate-x-1/2 font-bold text-xl text-white z-50 line-clamp-1'>Em progresso...</span> */}
      <motion.a href='https://api.whatsapp.com/send?phone=5515998613635' whileHover={{ scale: 1.1, bottom: '16px' }} target='_blank' className='fixed bottom-3 right-3 z-50 p-3 rounded-full bg-[#25D366] shadow-lg'><SiWhatsapp className='h-6 w-6 text-white' /></motion.a>
      {/* Home */}
      <div id='home' className='min-h-screen pt-16 relative flex flex-col justify-center items-center bg-gradient-to-b from-[#272727] to-[#111111]'>
        <Box className='container px-8 flex md:flex-col md:items-center gap-12 justify-around'>
          <div className='md:text-center flex flex-col gap-8 justify-between md:items-center'>
            <div>
              <motion.h1 className='text-5xl md:text-4xl text-white tracking-tighter line-clamp-3'>Eu sou <motion.span whileHover={{ letterSpacing: 0 }} className='bg-gradient-to-r font-bold from-orange-500 to-red-500 bg-clip-text text-transparent'>Vinícius Correia Ghiraldi</motion.span></motion.h1>
              <p className='font-inter text-lg text-zinc-400 tracking-widest'>Desenvolvedor Web</p>
              <div className='flex flex-wrap md:justify-center items-center gap-4 mt-4'>
                <SiHtml5 className='h-8 w-8 transition-colors fill-zinc-500 hover:fill-[#F16529]' title='HTML5' />
                <SiCss3 className='h-8 w-8 transition-colors fill-zinc-500 hover:fill-[#379AD6]' title='CSS3' />
                <SiJavascript className='h-8 w-8 transition-colors fill-zinc-500 hover:fill-[#F8DC3E]' title='JavaScript' />
                <SiReact className='h-8 w-8 transition-colors fill-zinc-500 hover:fill-[#61DBFB]' title='ReactJs' />
                <SiNodedotjs className='h-8 w-8 transition-colors fill-zinc-500 hover:fill-[#80BD41]' title='NodeJs' />
              </div>
            </div>
            <motion.a href={curriculo} download whileHover={{scale: 1.1}} className='px-8 py-2 rounded-sm shadow-[0_10px_10px_-10px_#00000099] w-fit bg-gradient-to-r from-orange-500 to-red-500 flex gap-4 items-center'><LuDownload className=''/> <span className='font-inter tracking-tighter text-xl line-clamp-1'>Download CV</span></motion.a>
            <div className='flex flex-wrap justify-center w-fit gap-8'>
              <motion.a href='mailto:vinighiraldi198@gmail.com' target='_blank' whileHover={{ scale: 1.25 }} className='p-2 bg-gradient-to-br from-orange-500 to-red-500 hover:bg-gradient-to-tl rounded-full shadow-md shadow-black' title='E-mail'>
                <LuMail className='text-zinc-900 h-9 w-9' />
              </motion.a>
              <motion.a href='https://github.com/vinighiraldi' target='_blank' whileHover={{ scale: 1.25 }} className='p-2 bg-gradient-to-br from-orange-500 to-red-500 hover:bg-gradient-to-tl rounded-full shadow-md shadow-black' title='GitHub'>
                <LuGithub className='text-zinc-900 h-9 w-9' />
              </motion.a>
              <motion.a href='https://www.linkedin.com/in/vinighiraldi/' target='_blank' whileHover={{ scale: 1.25 }} className='p-2 bg-gradient-to-br from-orange-500 to-red-500 hover:bg-gradient-to-tl rounded-full shadow-md shadow-black' title='LinkedIn'>
                <LuLinkedin className='text-zinc-900 h-9 w-9' />
              </motion.a>
            </div>
          </div>
          <div className='flex items-center justify-center xs:hidden shrink-0'>
            <SVGOrangeBubble className='absolute md:hidden max-h-[80vh]' />
            <motion.img
              transition={{ type: 'spring', damping: 11, stiffness: 150 }}
              whileHover={{ scale: 1.1 }}
              src={fotoDePerfil}
              className='relative h-80 rounded-full md:rounded-3xl min-w-[17rem]'
              alt='Vinícius Correia Ghiraldi'
            />
          </div>
        </Box>
        <a href='#about' className='absolute bottom-0 animate-bounce'>
          <LuChevronDown className='text-white h-12 w-12' strokeWidth={1.5} />
        </a>
      </div>

      {/* About */}

      <div id='about' className='flex flex-col relative bg-[#272727]'>
        <SVGTriangleDivider className="absolute top-0 left-0 w-full overflow-hidden leading-[0]" />
        <Box className='container mt-20 px-8 py-20 flex justify-around items-center gap-12'>
          <div className='bg-orange-500 rounded-3xl h-80 overflow-hidden shadow-xl md:hidden'>
            <motion.img
              transition={{ type: 'just' }}
              whileHover={{ scale: 1.1 }}
              src={fotoApontando}
              className='h-full'
              alt='Vinícius Correia Ghiraldi'
            />
          </div>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-center text-5xl text-orange-500 tracking-tighter font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent line-clamp-2 w-fit'>Quem Sou Eu</h1>
            <p className='max-w-sm text-white text-lg font-inter font-light leading-tight'>Nascido em 2004 no interior de São Paulo, conheci a programação no ano de 2020 em uma escola técnica. Foi amor a primeira vista, já que eu sempre gostei de desafios de lógica. Em 2023 me tornei um entusiasta de JavaScript e desde então tenho focado em aprender sobre ReactJs, NodeJs e TypeScript. Além de programação, adoro atividades físicas e esportes, e no meu tempo livre gosto de me divertir e competir em jogos online.</p>
          </div>
        </Box>
      </div>

      {/* Experience */}

      <div id='experience' className='relative flex flex-col bg-[#111111]'>
        <SVGInvertedBookDivider className='absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180'/>

        <Box className='container my-20 p-8 sm:px-0 flex flex-col items-center gap-12'>
          <h1 className='text-5xl font-bold tracking-tighter text-center bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-transparent line-clamp-1'>Experiência</h1>
          <ul className=' flex flex-col gap-4 text-white leading-5 px-4 border-l-4 sm:border-none rounded-l-lg border-red-500'>
            <li className='font-inter flex sm:flex-col gap-4 before:content-["2020_2022"] before:bg-gradient-to-r before:from-orange-500 before:to-red-500 before:bg-clip-text before:text-transparent before:font-bold before:font-exo'>Meus colegas e eu desenvolvemos um protótipo de um sistema informativo sobre clínicas e hospitais. Seu objetivo era informar ao usuário as instituições mais próximas de sua localização com avaliações de outras pessoas, profissionais atuantes, formações e horários disponíveis, podendo ainda filtrar os resultados por profissionais (cardiologista, veterinário...). Este projeto foi construido e apresentado no TCC de Desenvolvimento de Sistemas na ETEC Dr. Nelson Alves Vianna e obteve nota máxima.</li>
            <li className='font-inter flex sm:flex-col gap-4 before:content-["2023"] before:bg-gradient-to-r before:from-orange-500 before:to-red-500 before:bg-clip-text before:text-transparent before:font-bold before:font-exo'>Em 2023 ingressei na Frangoeste Avicultura LTDA como Auxiliar de Tecnologia da Informação, empresa em que permaneço até os dias de hoje. Neste cargo, sou responsável por atender chamados referentes a problemas de hardware e software dos computadores e auxiliar nas atividades gerais.</li>
            <li className='font-inter flex sm:flex-col gap-4 before:content-["-"] before:bg-gradient-to-r before:from-orange-500 before:to-red-500 before:bg-clip-text before:text-transparent before:font-bold before:font-exo'>No meu 5º mês na empresa, juntamente a um desenvolvedor de outra unidade, criei um questionário dinâmico integrado com um software interno para a coleta de feedback dos consumidores. O mesmo foi utilizado na feira APAS Show de 2024 e está sendo implementado em outras unidades e projetos futuros.</li>
          </ul>
        </Box>
      </div>

      {/* Skills */}

      <div id='skills' className='flex flex-col relative bg-gradient-to-r from-orange-500 to-red-500'>
        <SVGWaveOpacityDivider className='absolute top-0 left-0 w-full overflow-hidden leading-[0]'/>
        <Box className='my-20 p-8 sm:px-0'>
          <SVGArrow className="rotate-180 sm:hidden" />
          <div className='p-8 sm:rounded-none rounded-3xl bg-[#111111c5] shadow-[0_10px_10px_-10px_#00000099] flex flex-col gap-8 items-start'>
            <h1 className='text-5xl font-bold tracking-tighter text-center bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-transparent line-clamp-1 self-center'>Habilidades</h1>
            <div className='space-y-4 max-w-full'>
              <h2 className='text-3xl font-inter font-bold text-red-500'>Front-End</h2>
              <Carousel>
                <SkillCard icon={<SiAxios className='h-10 w-10 fill-zinc-400' />} name='Axios' />
                <SkillCard icon={<SiBootstrap className='h-10 w-10 fill-zinc-400' />} name='Bootstrap' />
                <SkillCard icon={<SiJquery className='h-10 w-10 fill-zinc-400' />} name='JQuery' />
                <SkillCard icon={<SiMui className='h-10 w-10 fill-zinc-400' />} name='MUI' />
                <SkillCard icon={<SiNextdotjs className='h-10 w-10 fill-zinc-400' />} name='NextJs' />
                <SkillCard icon={<SiReacthookform className='h-10 w-10 fill-zinc-400' />} name='React Hook Form' />
                <SkillCard icon={<SiReactrouter className='h-10 w-10 fill-zinc-400' />} name='React Router' />
                <SkillCard icon={<SiStyledcomponents className='h-10 w-10 fill-zinc-400' />} name='Styled Components' />
                <SkillCard icon={<SiTailwindcss className='h-10 w-10 fill-zinc-400' />} name='TailwindCSS' />
                <SkillCard icon={<SiVite className='h-10 w-10 fill-zinc-400' />} name='Vite' />
              </Carousel>
            </div>
            <div className='space-y-4 max-w-full'>
              <h2 className='text-3xl font-inter font-bold text-red-500'>Back-End</h2>
              <Carousel>
                <SkillCard icon={<SiExpress className='h-10 w-10 fill-zinc-400' />} name='Express' />
                <SkillCard icon={<SiFastify className='h-10 w-10 fill-zinc-400' />} name='Fastify' />
                <SkillCard icon={<SiJest className='h-10 w-10 fill-zinc-400' />} name='Jest' />
                <SkillCard icon={<SiJsonwebtokens className='h-10 w-10 fill-zinc-400' />} name='JsonWebTokens' />
                <SkillCard icon={<SiPostgresql className='h-10 w-10 fill-zinc-400' />} name='PostgreSQL' />
                <SkillCard icon={<SiPrisma className='h-10 w-10 fill-zinc-400' />} name='Prisma' />
                <SkillCard icon={<SiSqlite className='h-10 w-10 fill-zinc-400' />} name='SQLite' />
              </Carousel>
            </div>
            <div className='space-y-4 max-w-full'>
              <h2 className='text-3xl font-inter font-bold text-red-500'>Outros</h2>
              <Carousel>
                <SkillCard icon={<SiFigma className='h-10 w-10 fill-zinc-400' />} name='Figma' />
                <SkillCard icon={<SiGit className='h-10 w-10 fill-zinc-400' />} name='Git' />
                <SkillCard icon={<SiOpenai className='h-10 w-10 fill-zinc-400' />} name='OpenAI' />
                <SkillCard icon={<SiTypescript className='h-10 w-10 fill-zinc-400' />} name='TypeScript' />
              </Carousel>
            </div>
          </div>
        </Box>
        <SVGTiltDivider className='absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180' />
      </div>

      {/* Projects */}

      <div id='projects' className='flex flex-col relative bg-[#111111]'>
        <Box className='container p-8 sm:px-0 flex flex-col items-center gap-12'>
          <h1 className='text-5xl text-orange-500 tracking-tighter font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent line-clamp-1'>Projetos</h1>
          <div className='grid grid-cols-2 sm:grid-cols-1 p-8 gap-8 rounded-3xl sm:rounded-lg shadow-[0_0_30px_#00000099] bg-gradient-to-br from-[#272727] to-[#111111]'>
            {repositories.map((repo, i) => repo.language && (
              <motion.div key={i} whileHover={{ scale: 1.025 }} className='p-4 rounded-md shadow-[0_5px_10px_0_#00000099] grid-cols-1 border-2 border-orange-500 text-white flex flex-col justify-between gap-4'>
                <h1 className='text-xl tracking-wider line-clamp-1' title={repo.name}>{repo.name}</h1>
                {repo.description && <p className='text-base font-inter leading-5 line-clamp-5'>{repo.description}</p>}
                <div className='space-y-2'>
                  <span className='font-inter text-sm tracking-wider px-4 rounded-full shadow-md bg-gradient-to-b from-orange-500 to-red-500 line-clamp-1 max-w-fit'>{repo.language}</span>
                  <div className='flex gap-4'>
                    <a href={repo.html_url} target='_blank' className='p-2 rounded-full hover:bg-black/30' title='Repositório'><LuLink className='h-5 w-5'/></a>
                    {repo.homepage && (
                      <a href={repo.homepage} target='_blank' className='p-2 rounded-full hover:bg-black/30' title='WebSite'><LuGlobe className='h-5 w-5'/></a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Box>
      </div>

      {/* Education */}

      <div id='education' className='flex flex-col relative bg-gradient-to-r from-orange-500 to-red-500'>
        <SVGInvertedArrowDivider className='absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180' />
        <Box className='container mt-20 p-8 sm:px-0'>
          <div className='p-8 rounded-3xl sm:rounded-none bg-gradient-to-br from-[#111111] to-[#272727] shadow-[0_0_10px_#00000099] flex flex-col items-center gap-12'>
            <h1 className='text-5xl text-orange-500 tracking-tighter font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent line-clamp-1'>Educação</h1>

            <div className='grid grid-cols-2 sm:grid-cols-1 gap-8 w-full items-start'>
              <EducationCard course='Análise e Desenvolvimento de Sistemas' institution='CEUNSP' graduation='Curso superior' duration='2 anos | 2024 - 2026' />
              <EducationCard course='Engenharia de Software' institution='Unicesumar' graduation='Curso superior' duration='4 anos | 2023 - 2027' />
              
            </div>
          </div>
        </Box>
      </div>
    </div>
  )
}
