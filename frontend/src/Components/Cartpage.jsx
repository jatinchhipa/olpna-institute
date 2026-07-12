import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";

import { MdDelete } from "react-icons/md";







function Cartpage(){

    const{user} = useContext(AuthContext);

    const[cart , setCart]= useState([]);

    useEffect(()=>{
        if(user?._id){
            fetchCart() 
        }
    },[user]);


    const fetchCart = async ()=>{

        try{
            const res = await axios.get(`http://localhost:9000/cart/${user._id}`);

            setCart(res.data)

        }catch(err){
            console.log(err)
        }

    }

    const totalPrice = cart.reduce((sum , item)=>{

        return sum + item.course.coursePrice * item.quantity;

    },0)



return(
    <>

        <Navbar/>


        <div className="min-h-screen bg-gray-100 py-10">

      <div className="w-[90%] lg:w-[80%] mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        {
          cart.length === 0 ?

            <div className="bg-white p-10 rounded-xl shadow text-center">

              <h2 className="text-2xl font-semibold">
                Your Cart is Empty
              </h2>

            </div>

            :

            <div className="grid lg:grid-cols-3 gap-8">

              {/* Left */}

              <div className="lg:col-span-2 space-y-5">

                {

                  cart.map((item) => (

                    <div
                      key={item._id}
                      className="bg-white rounded-xl shadow-lg p-5 flex flex-col md:flex-row gap-5"
                    >

                      <img
                        src={`http://localhost:9000/uploads/${item.course.courseImg}`}
                        alt=""
                        className="w-44 h-32 rounded-lg object-cover"
                      />

                      <div className="flex-1">

                        <h2 className="text-2xl font-bold">
                          {item.course.courseName}
                        </h2>

                        <p className="text-gray-600 mt-2">
                          {item.course.courseProfessor}
                        </p>

                        <p className="text-orange-600 font-bold text-xl mt-3">
                          ₹ {item.course.coursePrice}
                        </p>

                        <p className="mt-2">
                          Quantity : {item.quantity}
                        </p>

                      </div>

                      <div className="flex items-center">

                        <button
                          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full"
                        >
                          <MdDelete size={22} />
                        </button>

                      </div>

                    </div>

                  ))

                }

              </div>

              {/* Right */}

              <div>

                <div className="bg-white shadow-lg rounded-xl p-6 sticky top-20">

                  <h2 className="text-2xl font-bold mb-6">
                    Order Summary
                  </h2>

                  <div className="flex justify-between mb-4">

                    <span>Total Courses</span>

                    <span>{cart.length}</span>

                  </div>

                  <div className="flex justify-between mb-4">

                    <span>Total Price</span>

                    <span className="font-bold text-xl">
                      ₹ {totalPrice}
                    </span>

                  </div>

                  <hr />

                  <button
                    className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold"
                  >

                    Checkout

                  </button>

                </div>

              </div>

            </div>

        }

      </div>

    </div>
  );



    </>
)
}

export default Cartpage;
