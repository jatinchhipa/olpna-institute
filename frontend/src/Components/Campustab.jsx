import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { FaArrowRightLong } from "react-icons/fa6";






export default function Compustab() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

      <TabList
           centered 
            onChange={handleChange}
            aria-label="lab API tabs example"
         sx={{
            "& .MuiTab-root": {
                              color: "#062a35",
                              fontSize: "18px",
                              lineHeight: 2,
                              transition: "all 0.3s ease",
                              textTransform: "capitalize",
                              fontWeight: 700,
                              px: "14px",
                              fontFamily: "Roboto",
                              minWidth: "auto",
                            },

            "& .MuiTab-root.Mui-selected": {
                             color: "#ea5822",
                             
                            },

            "& .MuiTabs-indicator": {
                            display: "none", // agar bottom line hatani ho
                          },
      }}
      >
        
            <Tab label="Show All" value="1" />
            <Tab label="University" value="2" />
            <Tab label="Group Study" value="3" />
            <Tab label="Awards" value="4" />
            <Tab label="Students" value="5" />
            <Tab label="Teachers" value="6" />
            <Tab label="Campus" value="7" />
          </TabList>
        </Box>




  <TabPanel value="1">

      <div className=' w-[90%] flex items-center justify-center flex-wrap mx-auto mt-8 gap-8'>

        <div className='campus-gallery'>
          <img src="/coursec3.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>


      <div className='campus-gallery'>
          <img src="/coursec1.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>



        <div className='campus-gallery'>
          <img src="/coursec2.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
        </div>

        </div>

      </div>  



    <div className=' w-[90%] flex items-center justify-center flex-wrap mx-auto mt-8 gap-8'>

        <div className='campus-gallery'>
          <img src="/gallery1.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>


      <div className='campus-gallery'>
          <img src="/gallery2.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>



        <div className='campus-gallery'>
          <img src="/gallery3.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
        </div>

        </div>
        
      </div>    

      </TabPanel>

















    <TabPanel value="2">
        <div className=' w-[90%] flex items-center justify-center flex-wrap mx-auto mt-8 gap-8'>

        <div className='campus-gallery'>
          <img src="/coursec3.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>


      <div className='campus-gallery'>
          <img src="/coursec1.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>

      </div> 
    </TabPanel>




    <TabPanel value="3">
           <div className=' w-[90%] flex items-center justify-center flex-wrap mx-auto mt-8 gap-8'>

        <div className='campus-gallery'>
          <img src="/gallery1.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>


      <div className='campus-gallery'>
          <img src="/gallery2.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>

      </div>
     </TabPanel>


    <TabPanel value="4">
           <div className=' w-[90%] flex items-center justify-center flex-wrap mx-auto mt-8 gap-8'>

        <div className='campus-gallery'>
          <img src="/gallery1.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>


      <div className='campus-gallery'>
          <img src="/gallery3.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>

      </div>
  </TabPanel>


  <TabPanel value="5">

     <div className=' w-[90%] flex items-center justify-center flex-wrap mx-auto mt-8 gap-8'>

        <div className='campus-gallery'>
          <img src="/coursec3.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>


      <div className='campus-gallery'>
          <img src="/coursec1.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>



        <div className='campus-gallery'>
          <img src="/coursec2.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
        </div>

        </div>

      </div>  



    <div className=' w-[90%] flex items-center justify-center flex-wrap mx-auto mt-8 gap-8'>

        <div className='campus-gallery'>
          <img src="/gallery1.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>

      </div>     

  </TabPanel>


  <TabPanel value="6">
      <div className=' w-[90%] flex items-center justify-center flex-wrap mx-auto mt-8 gap-8'>

        <div className='campus-gallery'>
          <img src="/coursec3.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>


      <div className='campus-gallery'>
          <img src="/coursec1.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>

      </div>
  </TabPanel>



  <TabPanel value="7"><div className=' w-[90%] flex items-center justify-center flex-wrap mx-auto mt-8 gap-8'>

        <div className='campus-gallery'>
          <img src="/coursec2.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>


      <div className='campus-gallery'>
          <img src="/gallery1.jpg" alt="" />

        <div className='compus-hovercontent'>
            <h1 className='text-3xl font-semibold hover:text-orange-500'>Group Study</h1>
            <p>University Compus</p>

          <div className='ml-auto mt-auto'> 
            <FaArrowRightLong className='bg-orange-500 w-[90px] h-[50px] p-2 rounded'/>
          </div>
 
        </div>

        </div>

      </div>
  </TabPanel>
    
      </TabContext>
    </Box>
  );
};