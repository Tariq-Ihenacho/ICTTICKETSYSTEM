import React from 'react'
import AppWrapper from '../../layouts/AppWrapper'
import { department, issueType } from '../../data'

const Add = () => {
  return (
    <AppWrapper>
      <div className='bg-slate-300 rounded-xl px-8 h-full w-full'>
        <form action="">
          <div className='text-2xl mt-8 flex justify-center text-center font-semibold '>
            ICT Support Complaint/Request Form 
          </div>
          <br />
          <div className='flex justify-between '>
            <div>
              <label>
                FirstName
              </label>
              <div>
                <input type="text" className='text-lg text-black' />
              </div>
            </div>
            <div>
              <label>
                LastName
              </label>
              <div>
                <input type="text" className='text-lg text-black' />
              </div>
            </div>
          </div>
          <br />
          <div>
            <label >
              Department
            </label>
            <div>
              <select>
                <option>
                  Select an option
                </option>
                {department.map((list, index) => (
                  <option key={index}>
                    {list}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />
          <div>
            <div>
              Nature of Complaint/Request
            </div>
            <div>
              <textarea className='h-12 w-52 px-2 mt-2' />
            </div>
          </div>
          <br />
          <div>
            <label >
              Issue Type (Based on relevance)
            </label>
            <div>
              <select>
                <option>
                  Select issue type
                </option>
                {issueType.map((list, index) => (
                  <option key={index}>
                    {list}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />
            <div className='flex items-center justify-center'>
              <button className='bg-green-600 text-white font-medium py-2 px-6 rounded-full hover:scale-105 transition-transform duration-200 ease-in-out'>Submit</button>
            </div>
          <br />
        </form>
      </div>
    </AppWrapper>
  )
}

export default Add
