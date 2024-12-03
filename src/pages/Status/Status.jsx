import React from 'react';
import {MdOutlineUpdateDisabled, MdOutlineMailOutline } from 'react-icons/md';
import AppWrapper from '../../layouts/AppWrapper';
import { GiSandsOfTime } from 'react-icons/gi';

const Status = () => {
    const tickets = [
        {
            id: '05675',
            title: 'CPU/Desktop Configuration',
            agent: 'Mr. Rotimi',
            department: 'Registry',
            createdAt: '10:30 AM, July 5',
            status: 'Open',
        },
        {
            id: '00575',
            title: 'Offline Printer',
            agent: 'Mr. Abubakar',
            department: 'SPU',
            createdAt: '2:15 PM, July 10',
            status: 'In Progress',
        },
        {
            id: '00045',
            title: 'Configure New Network Printer',
            agent: 'Mr. Raybuturo',
            department: 'Registry-General',
            createdAt: '9:00 AM, July 8',
            status: 'Closed',
        },
    ];

    return (
        <AppWrapper>
            <div className="p-4">
                <header className="bg-black text-white text-center py-3 rounded-md mb-6">
                    <h1 className="text-2xl font-bold">Ticket Status</h1>
                </header>
                {tickets.map((ticket, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200 w-full flex flex-col md:flex-row md:space-x-4"
                    >
                        <div className="flex items-center space-x-2 md:flex-1">
                            <MdOutlineMailOutline className="text-3xl text-black" />
                            <div>
                                <h2 className="text-xl font-semibold mb-3">{ticket.title}</h2>
                                <div className="text-sm text-gray-600 flex flex-wrap gap-4">
                                    <p>{ticket.id}</p>
                                    <p>{ticket.agent}</p>
                                    <p>{ticket.department}</p>
                                    <p className="flex items-center">
                                        <GiSandsOfTime className="mr-1" /> {ticket.createdAt}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <select
                                className="bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                                defaultValue={ticket.status}
                            >
                                <option value="Open">Open</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </div>
                    </div>
                ))}
            </div>
        </AppWrapper>
    );
};

export default Status;




{/*import React from 'react';
import { MdOutlineUpdateDisabled } from 'react-icons/md';
import AppWrapper from '../../layouts/AppWrapper';

<TbMessage />
<TbMessageCheck />
<TbMessageCircle />
<TbMessageCircleCheck />
<MdOutlineMailOutline />
<MdOutlineMarkEmailRead />
<GiSandsOfTime />
const Status = () => {
    return (
        <AppWrapper>
            <div className="">
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 space-y-4 max-w-screen-md w-full">
                    <div className="flex items-center space-x-4">
                        <span className="text-lg lg:text-xl font-semibold text-black">Email:
                            career@peacevillafoundation.com</span>
                    </div>
                </div>
                <br />
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 space-y-4 max-w-screen-md w-full">
                    <div className="flex items-center space-x-4">
                        <span className="text-lg lg:text-xl font-semibold text-black">Email:
                            career@peacevillafoundation.com</span>
                    </div>
                </div>
                <br />
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 space-y-4 max-w-screen-md w-full">
                    <div className="flex items-center space-x-4">
                        <span className="text-lg lg:text-xl font-semibold text-black">Email:
                            career@peacevillafoundation.com</span>
                    </div>
                </div>
                <div>
                   
                </div>
            </div>

        </AppWrapper>
    );
}

export default Status;*/}