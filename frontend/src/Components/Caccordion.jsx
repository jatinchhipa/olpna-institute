import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Caccordion() {
  const id = React.useId();
  return (
    <div>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
        <Typography component="span" className="!text-[#062a35] !font-bold cursor-pointer !mt-5">Best Online Course For Basic Web Design For Beginners</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <div className='flex w-[95%] gap-5'>
             <div className='w-[25%] '>   
              <img src="course7.jpg" alt="" className='w-full h-[100px]'/>
             </div>  

              <div className='w-[70%]'>
                <p className="text-[15px] text-gray-500  ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan mque laud totam rem aperiam, eaque ipsa quae ab illo inventore veritatis etq ectosd beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quiatas sit asperatur aut odit aut fugit sed quia consequuntur magni dolores</p>
              </div>     
            </div>
        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span" className="!text-[#062a35] !font-bold cursor-pointer !mt-5">
            Why We Are The Best Online Course ?
            </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <div className='flex w-[95%] gap-5'>
            <div className='w-[25%] '>   
              <img src="course7.jpg" alt="" className='w-full h-[100px]'/>
            </div>  

            <div className='w-[70%]'>
                <p className="text-[15px] text-gray-500  ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan mque laud totam rem aperiam, eaque ipsa quae ab illo inventore veritatis etq ectosd beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quiatas sit asperatur aut odit aut fugit sed quia consequuntur magni dolores</p>
            </div>     
           </div> 
        </AccordionDetails>

      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel3-content`}
          id={`${id}-panel3-header`}
        >
          <Typography component="span" className="!text-[#062a35] !font-bold cursor-pointer !mt-5">Creating Secure Password Flows With Node.JS And MySQL </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <div className='flex w-[95%] gap-5'>
             <div className='w-[25%] '>   
              <img src="course7.jpg" alt="" className='w-full h-[100px]'/>
             </div>  

              <div className='w-[70%]'>
                <p className="text-[15px] text-gray-500  ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan mque laud totam rem aperiam, eaque ipsa quae ab illo inventore veritatis etq ectosd beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quiatas sit asperatur aut odit aut fugit sed quia consequuntur magni dolores</p>
              </div>     
            </div>
        </AccordionDetails>
        
      </Accordion>
    </div>
  );
}