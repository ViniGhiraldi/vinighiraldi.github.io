interface ISkillCard{
    icon: React.ReactNode;
    name: string;
}

export const SkillCard = ({icon, name}: ISkillCard) => {
    return(
        <div className='p-4 rounded-lg shadow-lg bg-[#111111] flex flex-col items-center gap-2'>
            {icon}
            <span className='font-inter tracking-widest text-white'>{name}</span>
        </div>
    );
}