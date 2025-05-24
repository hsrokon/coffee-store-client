import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import Swal from 'sweetalert2';
import { useState } from 'react';

function App() {

  const loadedCoffee = useLoaderData();
  const [coffee, setCoffee] = useState(loadedCoffee)

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
          fetch(`https://coffe-store-server-smoky.vercel.app/coffee/${id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount>0) {
              const remainingCoffee = loadedCoffee.filter(cof => cof._id !==id)
              setCoffee(remainingCoffee);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
        }
      });
  }

  return (
    <>
      <h1 className='my-10 text-center text-4xl'>Coffee Store. Total coffee: {coffee.length}</h1>
      <div className='flex justify-center my-4'>
        <Link to={'/addCoffee'} className='btn border border-white'>Add a coffee</Link>
        <Link to={'/users'} className='btn border border-white'>Users</Link>
        <Link to={'/signup'} className='btn border border-white'>SignUP</Link>
        <Link to={'/login'} className='btn border border-white'>Login</Link>
      </div>
      <div className='grid grid-cols-3 gap-4 w-11/12 mx-auto'>
        {
          coffee.map(cof => <div key={cof._id}>
            <div className="card bg-base-100 w-96 shadow-sm h-96">
              <figure className='w-80 h-80'>
                <img className='w-full h-full object-cover'
                  src={cof.photo}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {cof.name}
                  <div className="badge badge-secondary">{cof.category}</div>
                </h2>
                <p>{cof.description}</p>
                <div className='w-auto mx-auto my-2'>
                  <div className="join flex gap-2">
                    <Link to={`/coffee/${cof._id}`} className="btn join-item border border-white">View</Link>
                    <Link to={`/updateCoffee/${cof._id}`} className="btn join-item border border-white">Edit</Link>
                    <button className="btn join-item border border-white bg-red-400" onClick={()=>handleDelete(cof._id)}>Delete</button>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{cof.supplier}</div>
                  <div className="badge badge-outline">{cof.chef}</div>
                  <div className="badge badge-outline">{cof.test}</div>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>

    </>
  )
}

export default App
