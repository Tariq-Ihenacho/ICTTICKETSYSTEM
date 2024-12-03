import React from 'react';
import { BiAnalyse } from 'react-icons/bi';
import { FaInbox } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';
import { TbTrack } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="h-screen w-60 bg-green-800 text-white  top-0 left-0 z-10">
            <div className="flex flex-col text-2xl font-semibold p-4">
                <ul className="space-y-4">
                    <li className="hover:bg-green-200 hover:text-black p-2 rounded">
                        <Link to="/Add" className="text-xl font-semibold flex items-center space-x-2">
                            <MdAddBox className="text-2xl" />
                            <span>New</span>
                        </Link>
                    </li>
                    <li className="hover:bg-green-200 hover:text-black p-2 rounded">
                        <Link to="/" className="text-xl font-semibold flex items-center space-x-2">
                            <BiAnalyse className="text-2xl" />
                            <span>Status</span>
                        </Link>
                    </li>
                    <li className="hover:bg-green-200 hover:text-black p-2 rounded">
                        <Link to="/Track" className="text-xl font-semibold flex items-center space-x-2">
                            <TbTrack className="text-2xl" />
                            <span>All Ticket</span>
                        </Link>
                    </li>
                    <li className="hover:bg-green-200 hover:text-black p-2 rounded">
                        <Link to="/History" className="text-xl font-semibold flex items-center space-x-2">
                            <FaInbox className="text-2xl" />
                            <span>Ticket History</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
