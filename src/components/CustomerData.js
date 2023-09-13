import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function CustomerData() {

    const [customer, setCustomer] = useState(null)
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate('/customer/edit/' + id)
    }
    const handleRemove = (id) => {
        if (window.confirm('Are you sure?')) {
            fetch(`http://localhost:8000/customer/${id}`, {
                method: 'DELETE',
            }).then((response) => {
                alert('Removed Successfully')
                window.location.reload()
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
    const handleDetails = (id) => {
        navigate('/customer/details/' + id)
    }

    useEffect(() => {
        fetch('http://localhost:8000/customer').then((response) => {
            return response.json();
        }).then((respond) => {
            setCustomer(respond);
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])
    return (
        <div className='contianer'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Customer Data</h2>
                </div>
                <div className='card-body'>
                    <div className='add-btn'>
                        <Link to="/customer/create" className='btn btn-success'>Add New Customer (+)</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='text-white bg-dark'>
                            <tr>
                                <td>ID</td>
                                <td>Customer Name</td>
                                <td>Email</td>
                                <td>Contact</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customer &&
                                customer.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a onClick={() => { handleEdit(item.id) }} className='btn btn-success'>Edit</a>
                                            <a onClick={() => { handleRemove(item.id) }} className='btn btn-danger'>Remove</a>
                                            <a onClick={() => { handleDetails(item.id) }} className='btn btn-primary'>Details</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CustomerData