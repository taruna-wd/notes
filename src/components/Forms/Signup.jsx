import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'


function Signup() {
    const [ formdata , setFormdata] = useState({
        name:"",
        email : "",
        password : "",
    })

    const navigate = useNavigate()

    const handleform =(e)=>{
        setFormdata({...formdata , [e.target.name]: e.target.value} )
    }

    const submitForm = async(e)=>{
        e.preventDefault();

        

        try {
          const user =   await authService.createAccount({
                
                name : formdata.name ,
                email : formdata.email ,
                password : formdata.password
            })
         if(user){

            navigate(
                '/login'
                )
         }
        } catch (error) {
            console.log("sign up error " , error)
        }
    }
  return (
    <>

    <section className=" dark:bg-gray-900 w-full absolute  ">
     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 text-white bg-black ">

      <div className="w-full bg-grey-900 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 border">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl dark:text-white">
                  Create an account 
              </h1>
              <form className="space-y-4 md:space-y-6" action="/login" onSubmit={submitForm}>
              <div>
                      <label htmlFor ="name" className="block mb-2 text-sm font-medium  dark:text-white">Your name</label>
                      <input type="text" name="name" id="name"  onChange={handleform} className="bg-gray-50 border border-gray-300  text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your name" required=""/>
                  </div>
                  <div>
                      <label htmlFor ="email" className="block mb-2 text-sm font-medium  dark:text-white">Your email</label>
                      <input type="email" name="email" id="email"  onChange={handleform} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor ="password" className="block mb-2 text-sm font-medium  dark:text-white">Password</label>
                      <input type="password" name="password" id="password"   onChange={handleform} placeholder="••••••••" className="bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 
                 
                  <button type="submit" className="w-full text-black bg-white hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-4 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-white-500 dark:text-gray-400">
                      Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline ">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
    </section>
    </>
    
  )
}

export default Signup