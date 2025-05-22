import { Link, useLoaderData } from 'react-router-dom'
import './App.css'

function App() {

  const coffee = useLoaderData();

  return (
    <>
      <h1 className='my-10 text-center text-4xl'>Coffee Store {coffee.length}</h1>
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
                    <button className="btn join-item border border-white">Edit</button>
                    <button className="btn join-item border border-white">Delete</button>
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
