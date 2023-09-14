import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Error404 from './Error404';

function CustomerDetails() {
    const { cid } = useParams();
    const [customer, setCustomer] = useState({})
    const [invalid, setInvalid] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8000/customer/${cid}`).then((response) => {
            return response.json();
        }).then((respond) => {
            if (Object.keys(respond).length === 0) {
                setInvalid(true)
            }
            setCustomer(respond);
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    return (
        <div className='container'>
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Customer Details</h2>
                </div>
                <div className="card-body">

                    {invalid ? <Error404 /> : customer &&
                        <div>
                            <h2>The Customer name is : <b>{customer.name}</b>  ({customer.id})</h2>
                            <h3>Contact Details</h3>
                            <h5>Email is : {customer.email}</h5>
                            <h5>Phone is : {customer.phone}</h5>
                            <Link className="btn btn-danger" to="/customer-info">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomerDetails