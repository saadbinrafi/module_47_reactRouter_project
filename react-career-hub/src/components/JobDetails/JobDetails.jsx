import { parse } from 'postcss';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { AiOutlineDollarCircle } from "react-icons/ai";

import { LuSubtitles } from "react-icons/lu";

import { FaPhoneVolume } from "react-icons/fa";

import { MdMarkEmailRead } from "react-icons/md";

import { FaAddressBook } from "react-icons/fa";
import { saveJobApplication } from '../utility/localStorage';

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)


    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have apply successfully')
    }

    return (
        <div>
            <h2 className='text-center text-2xl font-bold py-5 text-green-300'>Job Details: {job.job_title} </h2>
            <div className='grid gap-4 md:grid-cols-4'>
                <div className='border md:col-span-3 p-5 mx-auto'>
                    <h2 className='text-2xl font-bold text-green-300'>
                        Details Coming hear
                    </h2>
                    <p>{job.company_name}</p>
                    <br />
                    <p>
                        <span className='font-bold text-green-300'>job_description</span>: {job.job_description}
                    </p>
                    <br />


                    <p>
                        <span className='font-bold text-green-300'>job_responsibility :
                        </span> {job.job_responsibility
                        }
                    </p>

                    <br />


                    <p>
                        <span className='font-bold text-green-300'>educational_requirements :
                        </span> {job.educational_requirements
                        }
                    </p>


                    <br />
                    <p><span className='font-bold text-green-300'>experiences:</span> {job.experiences}</p>


                </div>



                <div className='border'>

                    <div className='bg-blue-100 text-black px-2 mx-auto'>


                        <h2 className='text-2xl py-5 text-center font-extrabold'>Job Detail</h2>
                        <hr />
                        <br />


                        <p className='flex gap-2'> <AiOutlineDollarCircle className='text-1xl mt-1'></AiOutlineDollarCircle><span className='font-bold'>Salary :</span> "{job.salary
                        }"(per.month)</p>

                        <br />
                        <p className='flex gap-2'>
                            <LuSubtitles className='text-1xl mt-1'></LuSubtitles>
                            <span className='text-1xl font-bold'>Job.Title : </span>{
                                job.job_title
                            }
                        </p>

                        <br />
                        <br />

                        <h2 className='font-bold  text-center py-3'>Contact Information</h2>

                        <hr />
                        <div>
                            <p className='py-2 flex gap-2'>
                                <FaPhoneVolume className='text-1xl mt-1'></FaPhoneVolume>
                                <span className='font-bold'>Phone: </span>{job.contact_information.phone
                                }</p>


                            <p className='py-2 flex gap-2'>
                                <MdMarkEmailRead className='text-1xl mt-1'></MdMarkEmailRead>
                                <span className='font-bold'>Email: </span>{job.contact_information.email
                                }</p>



                            <p className='py-2 flex gap-2'>
                            <FaAddressBook className='text-1xl mt-1'></FaAddressBook>
                                <span className='font-bold'>Address: </span>{job.contact_information.address
                                }</p>



                        </div>


                    </div>


                    <button onClick={handleApplyJob} className='btn btn-primary w-full mx-auto m-2'>Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;