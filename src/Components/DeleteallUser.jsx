import React from 'react'
import { useDispatch } from 'react-redux'
import { MdDeleteForever } from "react-icons/md"
// import { deleteallUser } from '../Store/slices/UserSlice'
import { deleteallUsers } from '../Store/actions'

const DeleteallUser = () => {

  const dispatch  = useDispatch();
  const deleteUsers = () => {
    dispatch(deleteallUser())
  } 



  return (
    <div>
      <button className='text-[45px]' onClick={() => deleteUsers()}>
        <MdDeleteForever />
      </button>
    </div>
  )
}

export default DeleteallUser