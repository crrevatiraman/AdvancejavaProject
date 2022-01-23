import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import React, { Component } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'


const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const body = {
        email,
        password
      }

      // url to make signin api call
      const url = `${URL}/user/signin`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Welcome to the application')

          // get the data sent by server
          const { id, firstName, lastName } = result['data']

          // persist the logged in user's information for future use
          sessionStorage['id'] = id
          sessionStorage['firstName'] = firstName
          sessionStorage['lastName'] = lastName
          sessionStorage['loginStatus'] = 1

          // navigate to home component
          navigate('/home')
        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }

  return (
    <div className='background-img '>
      <h1 className="title">Log In</h1>

      <div className="row ">
        <div className="col"></div>

        <div className="col border1">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control margin">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div className='btn-margin'>
                No account yet? <Link to="/register">Signup here</Link>
              </div>
              <div className='row'>
              <div className='col'>
              <button onClick={signinUser} className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after">
                Signin
              </button>
             
              </div>
              <div className='col top-margin'>
                 <Link to="/forgot-password">Forgot Password?</Link>
              
              </div>
            
              <div className='col'></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      
      </div>
    </div>
  )
}

export default Signin
