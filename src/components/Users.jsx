import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount>0) {
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });

                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                })
            }
            });
    }

    return (
        <div className='w-10/12 mx-auto my-10'>
            <h2 className='text-3xl'>Total users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created time</th>
                        <th>Last login</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */} 
                    {
                        users.map(user=> 
                        <tr key={user._id} className="hover:bg-base-300">
                        <th>1</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user?.createdAt}</td>
                        <td>{user?.lastSignInTime}</td>
                        <td className='flex gap-2 text-2xl'>
                        <FaEdit className='cursor-pointer'/> 
                        <MdDeleteForever className='cursor-pointer' onClick={()=> handleDelete(user._id)}/></td>
                    </tr>)
                    }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default Users;