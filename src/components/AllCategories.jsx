import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const AllCategories = () => {

    const [categories, setCategoreys] = useState([])

    useEffect(() => {
        fetch("/data/categories.json")
            .then(res => res.json())
            .then(data => setCategoreys(data))
    }, [])

    return (
        <div className="p-3 space-y-2">

            <h3 className="text-xl font-semibold my-4">All categoty</h3>

            {
                categories?.map((category) => <NavLink
                    className="block text-lg font-medium py-2 px-4"
                    key={category.id}
                    to={`/category/${category.id}`}
                >{category.name}
                </NavLink>)
            }


        </div>
    );
};

export default AllCategories;