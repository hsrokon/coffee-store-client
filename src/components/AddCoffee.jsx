import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        console.log(name,chef,supplier,taste,category,details,photo);

        const coffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo
        }

        fetch('https://coffe-store-server-smoky.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(coffee)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue?',
            icon: 'success',
            confirmButtonText: 'Cool'
            })
        })
    }

    return (
        <div className='w-10/12 mx-auto mt-8'>
            <h1 className='text-3xl font-semibold'>Add coffee</h1>
            <form onSubmit={handleSubmit}>
                {/* form name and chef row */}
                <div className='flex gap-8'>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input w-full" name='name' placeholder="Name" />
                    </fieldset>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Chef</legend>
                        <input type="text" className="input w-full" name='chef' placeholder="Chef" />
                    </fieldset>
                </div>
                {/* form supplier taste  row */}
                <div className='flex gap-8'>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Supplier</legend>
                        <input type="text" className="input w-full" name='supplier' placeholder="Supplier"/>
                    </fieldset>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Taste</legend>
                        <input type="text" className="input w-full" name='taste' placeholder="Taste" />
                    </fieldset>
                </div>
                {/* form row */}
                <div className='flex gap-8'>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Category</legend>
                        <input type="text" className="input w-full" name='category' placeholder="Category" />
                    </fieldset>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend">Details</legend>
                        <input type="text" className="input w-full" name='details' placeholder="Details" />
                    </fieldset>
                </div>
                {/* form row */}
                <div className='flex gap-8'>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Photo</legend>
                        <input type="text" className="input w-full" name='photo' placeholder="Photo URL" />
                    </fieldset>
                </div>
                <button type="submit" className='btn btn-block mt-4 border border-white'>Add</button>
            </form>
        </div>
    );
};

export default AddCoffee;