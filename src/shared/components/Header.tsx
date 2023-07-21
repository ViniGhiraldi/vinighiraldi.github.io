import { AnimationSequence, useAnimate } from "framer-motion";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen ? [
      [
        "nav",
        { transform: "translateY(0%)" },
        { duration: 0.3 }
      ],
      [
        "li",
        { transform: "translateY(0)", opacity: 1 }
      ]
    ] : [
      [
        "li",
        { transform: "translateY(-100px)", opacity: 0 },
      ],
      [
        "nav",
        { transform: "translateY(-100%)" }
      ]
    ]

    animate(menuAnimations as AnimationSequence);
  }, [isOpen])

    return(
      <div className='flex flex-col relative'>
      <header className='px-8 h-16 flex justify-between items-center gap-8 text-xl fixed top-0 w-full z-50 backdrop-blur-sm'>
        <span className='text-white font-bold whitespace-nowrap'>Vinícius Ghiraldi</span>
        <nav className='flex gap-8 text-white font-bold sm:hidden'>
          <a href='#home' className='relative flex after:content-start after:absolute after:bg-orange-500/50 after:w-full after:h-2 after:bottom-1 after:-z-10 hover:after:bg-orange-500'>Home</a>
          <a href='#about' className='relative flex after:content-start after:absolute after:bg-orange-500/50 after:w-full after:h-2 after:bottom-1 after:-z-10 hover:after:bg-orange-500'>Sobre</a>
          <a href='#projects' className='relative flex after:content-start after:absolute after:bg-orange-500/50 after:w-full after:h-2 after:bottom-1 after:-z-10 hover:after:bg-orange-500'>Projetos</a>
          <a href='#contact' className='relative flex after:content-start after:absolute after:bg-orange-500/50 after:w-full after:h-2 after:bottom-1 after:-z-10 hover:after:bg-orange-500'>Contato</a>
        </nav>
        <nav className='hidden sm:flex'>
          <button onClick={() => setIsOpen(oldIsOpen => !oldIsOpen)}>
            <Menu className='text-white' size={24}/>
          </button>
        </nav>
      </header>
      <div ref={scope}>
        <nav className='hidden sm:block backdrop-blur-sm fixed z-10 pt-16 h-full w-full -translate-y-full' onClick={() => setIsOpen(oldIsOpen => !oldIsOpen)}>
          <ul className='flex h-full max-h-full flex-col items-center p-4 gap-4 overflow-y-auto text-white'>
            <li className='text-3xl font-bold'><a href="#home" className='relative flex after:content-start after:absolute after:bg-orange-500/50 after:w-full after:h-2 after:bottom-1 after:-z-10 hover:after:bg-orange-500'>Home</a></li>
            <li className='text-3xl font-bold'><a href="#about" className='relative flex after:content-start after:absolute after:bg-orange-500/50 after:w-full after:h-2 after:bottom-1 after:-z-10 hover:after:bg-orange-500'>Sobre</a></li>
            <li className='text-3xl font-bold'><a href="#projects" className='relative flex after:content-start after:absolute after:bg-orange-500/50 after:w-full after:h-2 after:bottom-1 after:-z-10 hover:after:bg-orange-500'>Projetos</a></li>
            <li className='text-3xl font-bold'><a href="#contact" className='relative flex after:content-start after:absolute after:bg-orange-500/50 after:w-full after:h-2 after:bottom-1 after:-z-10 hover:after:bg-orange-500'>Contato</a></li>
          </ul>
        </nav>
      </div>
      </div>
    );
}