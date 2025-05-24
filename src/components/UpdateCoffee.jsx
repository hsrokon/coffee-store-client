import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData()

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        console.log(name,chef,supplier,taste,category,details,photo);

        const updatedCoffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo
        }

        Swal.fire({
                title: "Do you update?",
                text: "You can update anytime again!",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, update it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  fetch(`https://coffe-store-server-smoky.vercel.app/coffee/${coffee._id}`, {
                        method: 'PUT',
                        headers: {'content-type' : 'application/json'},
                        body: JSON.stringify(updatedCoffee)
                    })
                  .then(res => res.json())
                  .then(data => {
                    console.log(data);
                    if (data.modifiedCount>0) {
                      Swal.fire({
                        title: "Updated!",
                        text: "Your file has been updated.",
                        icon: "success"
                      });
                    }
                  })
                }
              });
    }

    return (
        <div className='w-10/12 mx-auto mt-8'>
            <h1 className='text-3xl font-semibold'>Update coffee details</h1>
            <form onSubmit={handleSubmit}>
                {/* form name and chef row */}
                <div className='flex gap-8'>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input w-full" name='name' placeholder="Name"  defaultValue={coffee.name}/>
                    </fieldset>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Chef</legend>
                        <input type="text" className="input w-full" name='chef' placeholder="Chef" defaultValue={coffee.chef} />
                    </fieldset>
                </div>
                {/* form supplier taste  row */}
                <div className='flex gap-8'>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Supplier</legend>
                        <input type="text" className="input w-full" name='supplier' placeholder="Supplier" defaultValue={coffee.supplier}/>
                    </fieldset>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Taste</legend>
                        <input type="text" className="input w-full" name='taste' placeholder="Taste" defaultValue={coffee.taste}/>
                    </fieldset>
                </div>
                {/* form row */}
                <div className='flex gap-8'>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Category</legend>
                        <input type="text" className="input w-full" name='category' placeholder="Category" defaultValue={coffee.category}/>
                    </fieldset>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Details</legend>
                        <input type="text" className="input w-full" name='details' placeholder="Details" defaultValue={coffee.details}/>
                    </fieldset>
                </div>
                {/* form row */}
                <div className='flex gap-8'>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Photo</legend>
                        <input type="text" className="input w-full" name='photo' placeholder="Photo URL" defaultValue={coffee.photo}/>
                    </fieldset>
                </div>
                <button type="submit" className='btn btn-block mt-4 border border-white'>Update</button>
            </form>
        </div>
    );
};

export default UpdateCoffee;