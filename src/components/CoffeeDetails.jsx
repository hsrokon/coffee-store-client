import { useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {

    const singleCoffee = useLoaderData();

    return (
        <div className="w-9/12 mx-auto my-20">
            <h2>{singleCoffee.name}</h2>
            <img src={singleCoffee.photo} alt="" />
            <p>{singleCoffee.category}</p>
            <p>{singleCoffee.supplier}</p>
            <p>{singleCoffee.chef}</p>
            <p>{singleCoffee.test}</p>
        </div>
    );
};

export default CoffeeDetails;