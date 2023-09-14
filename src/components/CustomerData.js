import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'



function CustomerData() {

    const [customer, setCustomer] = useState([])
    const [loading, setLoading] = useState(false)
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
        setLoading(true)
        const delay = 500;
        setTimeout(() => {
            fetch('http://localhost:8000/customer').then((response) => {
                return response.json();
            }).then((respond) => {
                setCustomer(respond);
            }).catch((err) => {
                console.log(err.message)
            })
            setLoading(false)
        }, delay)

    }, [])

    if (loading) {
        return (
            <RotatingLines
                strokeColor="black"
                strokeWidth="5"
                animationDuration="0.9"
                width="96"
                visible={true}
            />
        )
    }
    else {
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
                        {customer.length > 0 ? (
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
                        ) : (
                            <h3>No data available</h3>
                        )}
                    </div>
                </div>
            </div>
        )
    }

}

export default CustomerData