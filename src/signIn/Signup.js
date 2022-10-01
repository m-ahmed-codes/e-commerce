import React, { useState } from 'react'
import { Link, useNavigate,  } from 'react-router-dom';


export default function Signup() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate()


    const handleSignout = (e)=>{
        e.preventDefault()
        // console.log('test')
        const user = JSON.stringify({email,password})

        // fetch('http://localhost:8000/auth/signin', {method :'POST', headers: {'Content-Type':'application/json'}, body:user })
        fetch('http://localhost:8000/auth/register',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:user
  
    })
        .then((res)=>{
            if(!res.ok){
                throw new Error(res.status)
            }else{
                return res.json()
            }
        })
        .then((data)=>{
            console.log(data)
            navigate('/login')

        })   
        .catch((error)=>{

        }) 
    }

  return (
    <>
     
            <div className='container py-4'>
                <div className='row justify-content-center py-4'>
                    <div className="col-6 py-4">
                        <h4>SignUp Here</h4>
                        <form action=""  onSubmit={(e)=>{handleSignout(e)}}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" onChange={(e)=>{setemail(e.target.value)}} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" onChange={(e)=>{setpassword(e.target.value)}} placeholder="password" />
                            </div>
                            <div className='text-center '>
                            <input type="submit" value='SignUp' className='btn btn-outline-dark w-75' />
                            </div>
                        </form>
                        <p className='py-5'>Already registred <Link to="/login">Login here</Link></p>
                        
                    </div>
                </div>
            </div>
    </>
  )
}
