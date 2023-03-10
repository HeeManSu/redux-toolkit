import React from 'react'
import { useDispatch } from 'react-redux'
import fakeuseData from '../api'
import { addUser } from '../Store/slices/UserSlice'
import DisplayUsers from './DisplayUsers'
import DeleteallUser from './DeleteallUser'


const UserDetials = () => {

    const dispatch = useDispatch();

    const addnewUser = (name) => {
        console.log(name)
        dispatch(addUser(name));
    }

    return (
        <div className='content w-full rounded-xl border-red-500 border-2 mt-52 max-w-[1000px] mx-auto'>
            <div className='admin-table flex  justify-between p-7'>
                <div className='admin-subtitle text-[30px] text-gray-500'>List of users details</div>
                <button onClick={() => addnewUser(fakeuseData())} className='border-2 text-white px-5 text-[21px] py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg '>Add new users</button>
            </div>

            <ul>
                <DisplayUsers />
            </ul>
            <hr />
            
           
            <hr />
            <DeleteallUser />
        </div>
    )
}

export default UserDetials