import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useRef } from "react";

interface ICarousel {
    children?: React.ReactNode;
}

export const Carousel = ({children}: ICarousel) => {
    const listRef = useRef<HTMLUListElement>(null);

    const scrollRight = () => {
        listRef.current!.scrollLeft += listRef.current!.offsetWidth;
    }

    const scrollLeft = () => {
        listRef.current!.scrollLeft -= listRef.current!.offsetWidth;
    }

    return(
        <div className='flex w-full justify-between'>
            {listRef.current?.scrollWidth !== listRef.current?.offsetWidth && (
                <button onClick={scrollLeft} className='flex items-center text-white'> <LuChevronLeft className='h-6 w-6'/> </button>
            )}
            <ul ref={listRef} className='flex gap-8 overflow-x-auto scrollbar-none scroll-smooth bg-black/10'>
                {children}
            </ul>
            {listRef.current?.scrollWidth !== listRef.current?.offsetWidth && (
                <button onClick={scrollRight} className='flex items-center text-white'> <LuChevronRight className='h-6 w-6'/> </button>
            )}
        </div>
    );
}