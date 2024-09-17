
import { Typography } from '@mui/material'
// import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';

// const Index = () => {
//     return (
//         <div className='sticky  custom-container flex justify-between items-center'>
//             <div className='flex gap-6'>
//                 <Typography variant='p' className='text-white flex  flex-col text-[28px] font-semibold'>
//                     1.99
//                     s
//                     <span className='text-[16px]'>0-60 mph*</span>
//                 </Typography>
//                 <Typography variant='p' className='text-white flex  flex-col text-[28px] font-semibold'>
//                     200
//                     mph
//                     <span className='text-[16px]'>Top Speed†</span>
//                 </Typography>
//                 <Typography variant='p' className='text-white flex  flex-col text-[28px] font-semibold'>
//                     1,020
//                     hp
//                     <span className='text-[16px]'>Peak Power</span>
//                 </Typography>
//             </div>
//             <div>
//                 <button className='text-white bg-red-600 px-2 py-1 hover:bg-transparent border-[2px] border-red-600 rounded-full' >
//                     Order Now <KeyboardDoubleArrowRightSharpIcon/>
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Index


import React from 'react';
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';

const Footer = ({ activeSlide }) => {
    const colors = ['bg-transparent', 'bg-black', 'bg-blue', 'bg-red-600']; // Define colors for each model

    return (
        <div className='sticky custom-container flex justify-between items-center flex-col gap-4 md:flex-row lg:flex-row'>
            <div className='flex gap-6'>
                <Typography variant='p' className='text-white flex  flex-col text-[28px] font-semibold'>
                    1.99 s
                    <span className='text-[16px]'>0-60 mph*</span>
                </Typography>
                <Typography variant='p' className='text-white flex  flex-col text-[28px] font-semibold'>
                    200 mph
                    <span className='text-[16px]'>Top Speed†</span>
                </Typography>
                <Typography variant='p' className='text-white flex  flex-col text-[28px] font-semibold'>
                    1,020 hp
                    <span className='text-[16px]'>Peak Power</span>
                </Typography>
            </div>
            <div>
                <button className={`text-white ${colors[activeSlide]} px-2 py-1 w-40 hover:bg-transparent border-[2px]  rounded-full`}>
                    Order Now <KeyboardDoubleArrowRightSharpIcon />
                </button>
            </div>
        </div>
    );
};

export default Footer;
