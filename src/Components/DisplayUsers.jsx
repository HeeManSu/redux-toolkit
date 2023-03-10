import React from 'react'
import { useSelector } from 'react-redux'
import { MdDeleteForever } from "react-icons/md"
import { removeUser } from '../Store/slices/UserSlice'
import { useDispatch } from 'react-redux'

const DisplayUsers = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    })

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

    return (
        <div className='mt-4 max-w-[1000px] p-7 list-none flex flex-col'>
            {data.map((user, id) => {
                return  <li className='pb-3 text-gray-600 text-[23px]' key={id}>
                        <hr />
                        {user}
                        <button onClick={() => deleteUser(id)} className='text-[30px] ' color='red'>
                            <MdDeleteForever />
                        </button>
                    </li>
               
            })}

        </div>
    )
}

export default DisplayUsers