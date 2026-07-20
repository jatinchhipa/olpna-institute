import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthContext";
import axios from "axios";


function MyCourses() {

  const{user} = useContext(AuthContext)

  const[courses , setCourses] = useState([]);

  useEffect(()=>{

    if(user?._id){
      fetchCourses()
    }

  },[user])

  const fetchCourses = async()=>{

    try{

      const res = await axios.get(`http://localhost:9000/mycourse/${user._id}`)

        setCourses(res.data)

    }catch(err){
      console.log(err)
    }

  };


  return (

      <>

      {
        courses.map((item)=>(

          <div key={item._id} className="w-full flex justify-between p-5 border border-gray-200 shadow-sm">

            <img src={`http://localhost:9000/uploads/${item.course.courseImg}`} alt="" className="w-[28%] h-[120px] rounded-md"/>

            <div className="w-[70%] ">
              <h2 className="font-semibold text-lg text-red-900">{item.course.courseName}</h2>
              <p className="text-gray-600 pt-1 text-sm font-semibold">Duration: {item.course.courseDuration}</p>  

            <span className="flex items-center gap-8 pt-4">
             <p className="border border-gray-300 px-2 py-0 rounded-lg text-red-600 text-sm">{item.course.language}</p>
             <p className="text-gray-500 border border-gray-300 px-2 py-0 text-sm rounded-lg ">price: {item.course.coursePrice}</p>
            </span>    

            </div>

        </div>
        

          ))}

    
  
  </>
  );
}

export default MyCourses;