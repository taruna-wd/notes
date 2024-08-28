import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'


function Login() {
  const [loginData , setLoginData] = useState({
    email :"",
    password :""

  })

  const handlechange = (e)=>{
    setLoginData({...loginData , [e.target.name]: e.target.value})    
  }
  const navigate = useNavigate()

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
        const userSession = await authService.login({
            email: loginData.email,
            password: loginData.password
        });

        if (userSession) {
            alert("Login successful! Redirecting to home...");
            navigate('/notes'); // Redirect to the home page after login
        }
    } catch (error) {
        console.error("Error during login:", error.message);
        alert("Login failed. Please check your credentials and try again.");
    }
};

  return (
    <>

    <section className=" dark:bg-gray-900 w-full absolute m-auto ">
   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  bg-black text-white ">

      <div className="w-full bg-grey-900 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 border">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl dark:text-white">
                    Welcome back
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={submitLogin}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium  dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" onChange={handlechange} className="bg-gray-50 border text-gray-800 font-medium border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium  dark:text-white">Password</label>
                      <input type="password" name="password" id="password" onChange={handlechange} placeholder="••••••••"  className="bg-gray-50 border     border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  <button type="submit" className="w-full text-black bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                  <p className="text-sm font-light text-white-500 dark:text-gray-400">
                      Already have  not an account? <Link to="/signup" className="font-medium text-primary-600 hover:underline ">Sign up  here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
    </section>
    </>

    
  )
}

export default Login