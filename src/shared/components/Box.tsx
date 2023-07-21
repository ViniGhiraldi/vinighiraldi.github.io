import { HTMLMotionProps, Variants, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const variants: Variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: .5 } },
    hidden: { opacity: 0, scale: .75 }
}

interface IBox extends HTMLMotionProps<'div'>{
    children?: React.ReactNode;
}

export const Box = ({children, ...rest}: IBox) => {
    const control = useAnimation();
    const contentRef = useRef<HTMLDivElement>(null);
    const inView = useInView(contentRef);

    useEffect(()=> {
        if(inView){
            control.start('visible');
        }else{
            control.start('hidden');
        }
    }, [inView, control]);

    console.log(inView)

    return(
        <motion.div
        variants={variants}
        initial='hidden'
        animate={control}
        ref={contentRef} 
        {...rest}
        >
            {children}
        </motion.div>
    );
};