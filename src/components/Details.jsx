import React from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {

    const location = useLocation()
    const userData = location.state

    console.log(userData, "mellow")
  return (
    <div className='w-full'>
        <div className='flex items-center justify-between'>
            <p className='font-sans text-base text-[#1C1C1E] font-semibold text-[18px]'>Details</p>
            <div className='flex items-center gap-4'>
                <div className='w-[82px] h-[34px] cursor-pointer rounded-lg flex items-center justify-center bg-[#F4003D1A] '>
                    <p className='text-[#F4003D] font-sans text-[12px] font-medium'> No Show</p>
                </div>
                <div className='w-[82px] h-[34px] cursor-pointer rounded-lg flex items-center justify-center bg-[#1EC6771A] '>
                    <p className='text-[#1EC677] font-sans text-[12px] font-medium'>Completed</p>
                </div>
            </div>
        </div>
        <div className='lg:w-[620px] h-[515px] flex flex-col mt-[32px] gap-10'>
            <div className='flex items-center gap-5'>
                <div className='flex flex-col w-[300px] gap-2'>
                    <p className='font-sans text-[#1C1A3C] text-sm font-medium'>Name</p>
                    <p className='text-[#817F9B] text-base font-sans'>{userData?.profile?.fullName}</p>
                </div>
                <div className='flex flex-col w-[300px] gap-2'>
                    <p className='font-sans text-[#1C1A3C] text-sm font-medium'>Email/Phone</p>
                    <p className='text-[#817F9B] text-base font-sans'>{userData?.profile?.emailOrphone}</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='flex flex-col w-[300px] gap-2'>
                    <p className='font-sans text-[#1C1A3C] text-sm font-medium'>Phone Number</p>
                    <p className='text-[#817F9B] text-base font-sans'>N/A</p>
                </div>
                <div className='flex flex-col w-[300px] gap-2'>
                    <p className='font-sans text-[#1C1A3C] text-sm font-medium'>Status</p>
                    <div className='w-[78px] bg-[#F4CB0042] h-[23px] flex items-center justify-center rounded-xl'>
                        <p className='text-[#FF9909] text-[10px] font-sans'>{userData?.status}</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='flex flex-col w-[300px] gap-2'>
                    <p className='font-sans text-[#1C1A3C] text-sm font-medium'>Date/Time</p>
                    <p className='text-[#817F9B] text-base font-sans'>{userData?.date} <span>{userData?.time}</span></p>
                </div>
                <div className='flex flex-col w-[300px] gap-2'>
                    <p className='font-sans text-[#1C1A3C] text-sm font-medium'>Location</p>
                    <p className='text-[#817F9B] text-base font-sans'>{userData?.location}</p>
                </div>
            </div>
            <div className='flex flex-col w-[300px] gap-2'>
                <p className='font-sans text-[#1C1A3C] text-sm font-medium'>Service</p>
                <div className='flex items-center gap-2'>
                    {
                        userData.about?.services?.map((s, index) => (
                            <p key={index} className='text-[#817F9B] text-base font-sans'>
                                {s}
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-sans text-[#1C1A3C] text-sm font-medium'>Description</p>
                <p className='text-[#817F9B] text-base font-sans'>
                    {userData?.about?.story}
                </p>
            </div>

            {/* <div className='bg-[#E1E5F3] w-full h-[1px] mt-[43px]'></div> */}

            <div className='mt-[41px] gap-[32px] flex flex-col'>
                <p className='font-sans text-lg font-semibold text-[#1C1C1E]'>Doctor Information</p>

                <div className='flex flex-col w-[300px] gap-2'>
                    <p className='font-sans text-[#1C1A3C] text-sm font-medium'>Name</p>
                    <p className='text-[#817F9B] text-base font-sans'>{userData?.docName || "N/A"}</p>
                </div>

                <div className='flex flex-col gap-2  mb-5'>
                    <p className='font-sans text-[#1C1A3C] text-sm font-medium'>Description</p>
                    <p className='text-[#817F9B] text-base font-sans'>
                        {userData?.docSummary || "N/A"}
                    </p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Details