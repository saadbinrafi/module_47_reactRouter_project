import React from 'react';
import { VscLocation } from "react-icons/vsc";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, location, job_type, salary, remote_or_onsite } = job;

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>

                <div>
                    <button className='px-5 py-2 font-extrabold border rounded-lg mx-3 '>{remote_or_onsite}</button>

                    <button className='px-5 py-2 my-2 font-extrabold border rounded-lg '>{job_type}</button>
                </div>


                <div className='flex justify-between'>
                    <h2 className='flex gap-1 mt-4 px-2'><VscLocation className='text-2xl'></VscLocation>{location}</h2>

                    <h2 className='text-1xl font-bold flex mt-4'><AiOutlineDollarCircle className='text-2xl'></AiOutlineDollarCircle> {salary}</h2>
                </div>

                <div className="card-actions justify-start px-2">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">Vew Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;