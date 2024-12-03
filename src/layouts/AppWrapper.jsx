import React from 'react'
import Sidebar from '../components/SideBar/SideBar'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const AppWrapper = ({ children }) => {
    return (
        <div>
            <div className='flex items-start h-screen w-full'>
                <Sidebar />
                <Header />
                <div className="flex flex-col overflow-y-scroll md:flex-row items-center justify-center w-full h-screen bg-green-200 text-black p-8 space-y-6 md:space-y-0 md:space-x-12">
                    {children}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AppWrapper
