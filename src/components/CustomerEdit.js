import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link, Redirect } from 'react-router-dom';
import Error404 from './Error404';

function CustomerEdit() {
    const { cid } = useParams();
    //const [customer, setCustomer] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8000/customer/${cid}`).then((response) => {
            return response.json();
        }).then((respond) => {
            // if (!respond.hasOwnProperty(id)) {
            //     setInvalid(true)
            // }
            if (Object.keys(respond).length === 0) {
                setInvalid(true)
            }
            setId(respond.id)
            setName(respond.name)
            setEmail(respond.email)
            setPhone(respond.phone)
            setIsActive(respond.active)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])
    const [invalid, setInvalid] = useState(false);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const customerData = { name, email, phone, isActive };

        fetch(`http://localhost:8000/customer/${cid}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(customerData)
        }).then((response) => {
            alert('Info Saved')
            navigate('/customer-info');
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='container' onSubmit={handleSubmit}>
                        <div className='card'>
                            <div className='card-title'>
                                <h2>Edit Customer Details</h2>
                            </div>
                            <div className='card-body' style={{ textAlign: 'left' }}>
                                {invalid ? <Error404 /> : (
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className='form-group'>
                                                <label>ID</label>
                                                <input value={id} disabled="disabled" placeholder='Auto-set & Disabled' className='form-control' style={{ borderColor: "teal", background: "papayawhip" }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className='form-group'>
                                                <label>Name</label>
                                                <input value={name} onChange={(event) => { setName(event.target.value) }} className='form-control' style={{ borderColor: "teal", background: "papayawhip" }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className='form-group'>
                                                <label>Email</label>
                                                <input value={email} onChange={(event) => { setEmail(event.target.value) }} className='form-control' style={{ borderColor: "teal", background: "papayawhip" }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className='form-group'>
                                                <label>Phone</label>
                                                <input value={phone} onChange={(event) => { setPhone(event.target.value) }} className='form-control' style={{ borderColor: "teal", background: "papayawhip" }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className='form-check'>
                                                <input checked={isActive} onChange={(event) => { setIsActive(event.target.checked) }} type="checkbox" className='form-check-input' style={{ borderColor: "teal" }} />
                                                <label className='form-check-label'>Is Active</label>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className='form-check'>
                                                <button type="submit" className="btn btn-success">Save</button>
                                                <Link to="/customer-info" className='btn btn-danger'>Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CustomerEdit