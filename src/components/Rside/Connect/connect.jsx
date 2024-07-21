// import "./connect.css";
// import {IoIosContact} from "react-icons/io"
// import qr from './qr.jpeg'
// import { useState } from "react";
// const Connect = () =>{
//     const [data,setData] = useState({
//         name:'',
//         email:'',
//         subject:'',
//         message:'',
//         phoneno:'',
//     })
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(data);

//         const {name,email,subject,message,phoneno} = data;
//         setData({
//             name:'',
//             email:'',
//             subject:'',
//             message:'',
//             phoneno:'',
//         })
        
//     }

//     const handleInputChange = (event) =>{
//         const {name,value} = event.target;

//         setData((prevData)=>({
//             ...prevData,[name]:value,
//         }))
            
//     }
//     return(
//         <div id="cn" className="conn-box">
//               <div className="c-heading">
//                   <span className="head_text">Connect with me on Whatsapp</span>
//               </div>
           
//               <div className="cbox">
            
//                   <img src={qr} className="qr"/>
            
//                   <div className="w_fill">
//                   <form action="submit" onSubmit={handleSubmit}>
//                   <div className="box-elem">
                      
//                       <input className="f-prop" 
//                         type="text" 
//                         name="name"
//                         value={data.name}  
//                         placeholder="Name" 
//                         onChange={handleInputChange}
//                         required
//                      />
//                       <input className="f-prop" 
//                         type="text" 
//                         name="email"
//                         value={data.email} 
//                         placeholder="Email" 
//                         onChange={handleInputChange}
//                         required
//                      />
//                    </div>

//                    <div className="box-elem">
//                       <input className="f-prop" 
//                         type="number" 
//                         name="phoneno"
//                         value={data.phoneno} 
//                         placeholder="Phone Number" 
//                         onChange={handleInputChange}
//                         required
//                      />
//                       <input className="f-prop" 
//                         type="text" 
//                         name="subject"
//                         value={data.subject} 
//                         placeholder="Subject" 
//                         onChange={handleInputChange}
//                         required
//                       />
//                    </div>
                   
//                    <div className="box-elem">
//                       <input className="f-prop" 
//                        type="text" 
//                        name="message"
//                        value={data.message} 
//                        placeholder="Message" 
//                        onChange={handleInputChange}
//                        required
//                     />
                      
//                       <button className="bgk" type="submit">Send Message</button>
                      
//                    </div>
//                   </form>
                    
//                </div>
//            </div>
//         </div>
//     )

// }
// export default Connect;

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./connect.css";
import qr from './qr.jpeg';

const Connect = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phoneno: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.send('service_q8cjh0u', 'template_2faue4i', data, '_Uri4ER9oWnw0qmLl')
      .then((result) => {
        console.log(result.text);
        toast.success('Message Sent Successfully!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to Send Message. Try Again!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    setData({
      name: '',
      email: '',
      subject: '',
      message: '',
      phoneno: '',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData, [name]: value,
    }));
  };

  return (
    <div id="cn" className="conn-box">
      <div className="c-heading">
        <span className="head_text">Connect with me on Whatsapp</span>
      </div>
      <div className="cbox">
        <img src={qr} className="qr" />
        <div className="w_fill">
          <form action="submit" onSubmit={handleSubmit}>
            <div className="box-elem">
              <input
                className="f-prop"
                type="text"
                name="name"
                value={data.name}
                placeholder="Name"
                onChange={handleInputChange}
                required
              />
              <input
                className="f-prop"
                type="text"
                name="email"
                value={data.email}
                placeholder="Email"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="box-elem">
              <input
                className="f-prop"
                type="number"
                name="phoneno"
                value={data.phoneno}
                placeholder="Phone Number"
                onChange={handleInputChange}
                required
              />
              <input
                className="f-prop"
                type="text"
                name="subject"
                value={data.subject}
                placeholder="Subject"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="box-elem">
              <input
                className="f-prop"
                type="text"
                name="message"
                value={data.message}
                placeholder="Message"
                onChange={handleInputChange}
                required
              />
              <button className="bgk" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Connect;
