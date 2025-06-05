import { usePage } from "@inertiajs/react";
function Category_tb({deleteCat, category, updateCat, insertCat}){
    const Categories = usePage().props.Categories || [];
    return(
        <>
            <button onClick={insertCat} className="btn mx-3">Insert</button>
            <div>
                <div className="overflow">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                    </label>
                                </th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {Categories.map((data) => {
                                return (
                                    <tr>
                                        <th>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    className="checkbox"
                                                    />
                                            </label>
                                        </th>
                                                    <td>{data.id}</td>
                                        <td>
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <div className="font-bold">
                                                        {data.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                            <button className="btn btn-ghost btn-xs" onClick={(event)=>updateCat(data)}>
                                                details
                                            </button>
                                            <button className="btn btn-ghost btn-xs" onClick={(event)=>deleteCat(event, { id: data.id})}>
                                                delete
                                            </button>

                                    </tr>
                                );
                            })}
                        </tbody>
                        {/* foot */}
                        <tfoot></tfoot>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Category_tb;
