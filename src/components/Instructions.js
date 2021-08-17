import React from "react";

const Instructions = () =>{
   return(
      <div>
         Print server:
         <ol>
         <li className='list'>
            Open Remote desktop Connection
         </li>
         <li className='list' >
            Type in uphsurgpsapp001
         </li>
         <li className='list'>
            Hit connect and log in with your A1
         </li>
         <li className='list'>
         Open Print Management on the desktop

         </li>
         <li className='list'>
            Double click on print servers
         </li>
         <li className='list'>
            Right Click on uphsurgpsapp001 and click on add Printer
         </li>
         <li className='list'>
            Click on add a TCP/IP then click on next
         </li>
         <li className='list'>
            Change Type of device from auto-detect to TCP/IP
         </li>
         <li className='list'>
            In the host name type in the ip address then click next
         </li>
         <li className='list'>
         Make sure its use existing print driver
         </li>
         <li className='list'>
            For Hp printers pick hp universal printing pcl 6 then hit next
         </li>
         <li className='list'>
            For Ricoh pick ricoh pcl6 universaldriver then hit next
         </li>
         <li className='list'>
            For the printer name flilow the flilowing template SURG-SIL6-CARAA1
         </li>
         <li className='list'>First thing after SURG is the location, second is the name that makes sense</li>
         <li className='list'>Copy and paste printer name into the share name</li>
         <li className='list'>For location put in where the print is location for example aa location</li>
         <li className='list'>In comment, put IP address of printer and pennchart name if known</li>
         <li className='list'>Hit next then next again after it installs hit finish</li>
         </ol>
      </div>
   )
}

export default Instructions