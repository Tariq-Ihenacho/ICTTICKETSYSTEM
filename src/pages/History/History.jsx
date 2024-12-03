import React from 'react';
import {MdOutlineMarkEmailRead } from 'react-icons/md';
import AppWrapper from '../../layouts/AppWrapper';

const History = () => {
    const tickets = [
        {
            id: 'Resolved',
            title: 'CPU/Desktop Configuration',
        },
        {
            id: 'Resolved',
            title: 'Offline Printer',
        },
        {
            id: 'Resolved',
            title: 'Configure New Network Printer',
        },
    ];

    return (
        <AppWrapper>
            <div className="p-4">
                {tickets.map((ticket, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200 w-full flex flex-col md:flex-row md:space-x-4"
                    >
                        <div className="flex items-center space-x-2 md:flex-1">
                            <MdOutlineMarkEmailRead className="text-3xl text-black" />
                            <div>
                                <h2 className="text-xl font-semibold mb-3">{ticket.title}</h2>
                                <div className="text-sm text-gray-600 flex flex-wrap gap-4">
                                    <p>{ticket.id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AppWrapper>
    );
};

export default History;

