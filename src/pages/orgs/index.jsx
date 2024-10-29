import React, { useEffect, useState } from 'react'
import { CiFilter } from 'react-icons/ci'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { TbDownload } from 'react-icons/tb'
import { FaPlus } from "react-icons/fa6";

import Activity from "../../assets/svg/activity.svg"
import { useNavigate } from 'react-router-dom';

const Orgs = () => {
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [referralsPerPage] = useState(8)
    const [totalPages, setTotalPages] = useState(1);

    const data = [
        {
            id: "#302010",
            date: "12/8/2024",
            name: "Heala Tech",
            email: "Johnb@mail.com",
            phone: "09034543234",
            total: 5
        },
        {
            id: "#302011",
            date: "12/8/2024",
            name: "John Bushmill",
            email: "Johnb@mail.com",
            phone: "09034543234",
            total: 5
        },
        {
            id: "#302012",
            date: "12/8/2024",
            name: "John Bushmill",
            email: "Johnb@mail.com",
            phone: "09034543234",
            total: 5
        },
        {
            id: "#302013",
            date: "12/8/2024",
            name: "John Bushmill",
            email: "Johnb@mail.com",
            phone: "09034543234",
            total: 5
        },
    ]

    const filteredReferrals = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || "")

    useEffect(() => {
        // Update total pages whenever filteredOrders changes
        setTotalPages(Math.ceil(data.length / referralsPerPage));
    }, [referralsPerPage]);

     // Calculate indices for paginated data
     const indexOfLastProduct = currentPage * referralsPerPage;
     const indexOfFirstProduct = indexOfLastProduct - referralsPerPage;
     const currentReferrals = filteredReferrals?.slice(indexOfFirstProduct, indexOfLastProduct);
 
     const handleNextPage = () => {
         if (currentPage < Math.ceil(currentReferrals?.length / referralsPerPage)) {
             setCurrentPage(currentPage + 1);
         }
     };
     
     const handlePrevPage = () => {
         if (currentPage > 1) {
             setCurrentPage(currentPage - 1);
         }
     };

     const navigate = useNavigate()
    
  return (
    <div className='w-full mt-[30px]'>
        <div className='w-[336px] rounded-lg h-[167px] border border-[#E0E2E7] flex flex-col py-[11px] px-5'>
            <div className='flex items-center justify-between'>
                <p className='font-sans text-sm text-[#817F9B]'>Total Organization</p>
                <div className='w-[44px] h-[44px] rounded-lg bg-[#5856D61A] p-2 flex items-center justify-center'>
                    <img src={Activity} alt='Activity' className='w-5 h-5' />
                </div>
            </div>
            <div className='flex flex-col mt-3 gap-5'>
                <p className='font-sans text-[#1C1C1C] text-[30px] font-semibold'>23</p>
            </div>
        </div>
        <div className='w-full mt-10'>
            <div className='flex items-center justify-between px-5'>
                <p className='font-sans text-[18px] font-medium text-[#1C1C1E]'>Organization</p>
                <div className='flex items-center gap-3'>
                    <input 
                        className='w-[290px] h-[40px] outline-[#2D84FF] rounded-lg p-2 border border-[#E1E5F3]'
                        type='text'
                        placeholder='Search...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className='w-[87px] h-[40px] border border-[#EBEDF0] gap-1 cursor-pointer rounded-lg flex items-center p-3'>
                        <TbDownload className='text-base text-[#6B788E]' />
                        <p className='text-xs font-semibold font-sans text-[#7A8699]'>Export</p>
                    </div>
                    <div onClick={() =>  navigate('/orgs/add')} className='w-[173px] h-[45px] cursor-pointer bg-[#2D84FF] gap-2 rounded-lg flex gap-1 justify-center items-center p-3'>
                        <FaPlus className="w-4 h-4 text-[#fff]" />
                        <p className='text-xs font-semibold text-center font-sans text-[#fff]'>Add Organization</p>
                    </div>
                </div>
            </div>

            <div className='mt-5 p-5 w-full'>
                <table>
                    <thead>
                        <tr className='w-full border rounded-t-xl border-[#F0F1F3] '>
                            
                            <th className='w-[243px] h-[18px] text-sm text-left font-sans text-[#333843] p-4 font-medium '>
                                ID
                            </th>
                            <th className='w-[247px] h-[18px] text-left text-sm font-sans text-[#333843] p-4 font-medium '>
                                <div className='flex items-center gap-1'>
                                    <p className='text-sm text-[#333843] font-sans'>Date</p>
                                    <IoIosArrowDown className="text-[#667085] text-base" />
                                </div>
                            </th>
                            <th className='w-[298px] h-[18px] text-left font-sans text-[#333843] p-4 font-medium '>
                                <p className='text-sm text-[#333843] font-sans'>Name</p>
                            </th>
                            <th className='w-[298px] h-[18px] text-left font-sans text-[#333843] p-4 font-medium '>
                                <p className='text-sm text-[#333843] font-sans'>Email</p>
                            </th>
                            <th className='w-[268px] h-[18px] text-left text-sm font-sans text-[#333843] p-4 font-medium '>
                                <p className='text-sm text-[#333843] font-sans'>Phone</p>
                            </th>
                            <th className='w-[157px] h-[18px] text-left font-sans text-[#333843] p-4 font-medium '>
                                <p className='text-sm text-[#333843] font-sans'>Total Referrals</p>
                            </th>
                            {/*  <th className='w-[169px] h-[18px] text-left text-sm font-sans text-[#333843] p-4 font-medium '>
                                Action
                            </th> */}
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            currentReferrals.map((item) => (
                                <tr key={item.id} className='w-full mt-[18px] border border-[#F0F1F3]'>
                                    
                                    <td className='w-[143px] h-[56px] text-left font-sans  p-4 font-medium '>
                                        <p className='font-sans text-[#333843] font-semibold text-sm'>{item?.id}</p>
                                    </td>
                                    <td className='w-[147px] h-[56px] text-left font-sans  p-4 font-medium '>
                                        <p className='font-sans text-[#667085] font-medium text-sm'>{item?.date}</p>
                                    </td>
                                    <td className='w-[147px] h-[56px] text-left font-sans  p-4 font-medium '>
                                        <p className='font-sans text-[#333843] font-medium text-sm '>{item?.name}</p>
                                    </td>
                                    <td className='w-[198px] h-[56px] text-left font-sans  p-4 font-medium '>
                                        <p className='font-sans text-[#667085] font-normal text-sm '>{item?.email}</p>
                                        
                                    </td>
                                    <td className='w-[168px] h-[56px] text-left font-sans  p-4 font-medium '>
                                        <p className='font-sans text-[#333843] font-medium text-sm'>{item?.phone}</p>
                                    </td>
                                    <td className='w-[168px] h-[56px] text-left cursor-pointer font-sans p-4 font-medium ' onClick={() => navigate("/referrals/details")}>
                                        <p className='font-sans text-[#2D84FF] underline font-medium text-sm'>{item?.total}</p>
                                    </td>
                                    {/* <td className='w-[167px] h-[56px] text-left font-euclid text-[#333843] p-4 font-medium '>
                                        <div className={`${item?.status === "Completed" ? "bg-[#E7F4EE]" : item?.status === "No Show" ? "bg-[#FEE5EC]" : "bg-[#FDF1E8]"} w-[95px] p-1 h-auto rounded-xl`}>
                                            <p className={`${item?.status === "Completed" ? "text-[#0D894F]" : item?.status === "No Show" ? "text-[#F4003D]" : "text-[#E46A11]"} font-sans font-semibold text-center text-sm`}>{item?.status}</p>
                                        </div>
                                    </td> */}
                                
                              
            
                                </tr>
            
                            ))
                        }
                    </tbody>
                </table>
            </div>
    
            <div className='w-full flex items-center justify-between p-5'>
                <div className='bg-[#FAFAFE] w-[136px] h-[40px] flex items-center justify-center'>
                    <p className='font-sans text-[#667085] text-base'>Page 1 of 1</p>
                </div>

                <div>
                    <div className='flex h-[34px] justify-center  w-full gap-2 items-center'>

                        <div 
                            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} 
                            className={`bg-[#FAFAFE] transition-all duration-500 ease-in-out  flex justify-center items-center cursor-pointer w-8 h-full  ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
                        >
                            <IoIosArrowBack className='text-[#667085] hover:text-[#fff]'/>
                        </div>

                        {[...Array(totalPages)].map((_, index) => (
                                <div 
                                    key={index} 
                                    onClick={() => setCurrentPage(index + 1)} 
                                    className={`transition-all duration-500 ease-in-out flex justify-center items-center cursor-pointer w-8 h-full bg-[#FAFAFE] ${currentPage === index + 1 ? 'bg-[#FAFAFE] text-[#000]' : 'hover:bg-[#FAFAFE]'}`}
                                >
                                    {index + 1}
                                </div>
                            ))}


                        <div 
                            onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)} 
                            className={`bg-[#FAFAFE] transition-all duration-500 ease-in-out flex justify-center items-center cursor-pointer w-8 h-full  bg-[#FAFAFE] ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
                        >
                            <IoIosArrowForward className='text-[#667085] hover:text-[#fff]'/>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Orgs