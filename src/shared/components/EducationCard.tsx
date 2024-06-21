import { LuCheckCircle, LuGraduationCap, LuHourglass, LuLandmark } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

interface IEducationCard extends React.ComponentProps<'div'>{
    course: string
    institution: string;
    graduation: string;
    duration: string;
    concluded?: boolean;
}

export const EducationCard = ({course, duration, graduation, institution, concluded = false, className, ...rest}: IEducationCard) => {
    return (
        <div className={twMerge('relative p-4 rounded-md shadow-[0_5px_10px_0_#00000099] bg-gradient-to-br from-orange-500 to-red-500 space-y-2', className)} {...rest}>
            <h1 className='text-2xl font-normal tracking-tighter line-clamp-2' title={course}>{course}</h1>
            <div className='px-4 sm:px-0 space-y-4'>
                <p className='flex sm:flex-col gap-8 sm:gap-0'>
                    <LuLandmark className='min-h-[24px] min-w-[24px]' />
                    <span className='text-base font-inter line-clamp-2'>{institution}</span>
                </p>
                <p className='flex sm:flex-col gap-8 sm:gap-0'>
                    <LuGraduationCap className='min-h-[24px] min-w-[24px]' />
                    <span className='text-base font-inter line-clamp-2'>{graduation}</span>
                </p>
                <p className='flex sm:flex-col gap-8 sm:gap-0'>
                    <LuHourglass className='min-h-[24px] min-w-[24px]' />
                    <span className='text-base font-inter line-clamp-2'>{duration}</span>
                </p>
            </div>
            {concluded && <LuCheckCircle className='absolute right-2 bottom-2 text-emerald-500'/>}
            
        </div>
    );
}