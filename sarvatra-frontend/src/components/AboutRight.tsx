
interface AboutRightProps {
    imgSrc: string;
    title: string;
    para1: string;
    para2: string;
}

const AboutRight = ({ imgSrc, title, para1, para2 }: AboutRightProps) => {
  return (
    <div className="h-screen bg-[#131313] flex md:flex-none">
        <div className="flex flex-col md:flex-row items-center my-8 md:my-20 md:mr-[72px] md:py-8 md:gap-x-6 text-[#EDE6E6]">
            <div 
                className='h-[40vh] w-[100vw] md:h-[100vh] md:w-[60%] mx-auto'
                style={{
                    background: `url(${imgSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                    }} 
            />
            <div className='flex flex-col justify-center w-[90%] md:w-[50%] mx-auto md:pl-[80px]'>
                <h1 className='font-staatliches text-4xl md:text-6xl tracking-[0.125em] mt-[47px] mb-4'>{title}</h1>
                <p className='font-avenir font-light text-[16px] md:text-[20px] my-4 md:mt-[28px] leading-[1.5rem] md:leading-9 md:w-[85%]'>{para1}</p>
                <p className='font-avenir font-light text-[16px] md:text-[20px] my-4 md:mt-[28px] leading-[1.5rem] md:leading-9  md:w-[75%]'>{para2}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutRight