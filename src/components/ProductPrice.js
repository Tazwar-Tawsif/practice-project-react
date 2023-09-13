import React from 'react'

function ProductPrice() {
    return (
        <div className='contianer'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Product Price</h2>
                </div>
                <div className='card-body'>
                    <table className='table table-bordered'>
                        <thead className='text-white bg-dark'>
                            <tr>
                                <td>ID</td>
                                <td>Product Name</td>
                                <td>Vendor</td>
                                <td>Price</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductPrice