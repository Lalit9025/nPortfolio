import "./connect.css";
import {IoIosContact} from "react-icons/io"
import qr from './qr.jpeg'
const Connect = () =>{
    return(
        <div id="cn" className="conn-box">
              <div className="c-heading">
                  <span className="head_text">Connect with me on Whatsapp</span>
              </div>
           
              <div className="cbox">
            
                  <img src={qr} className="qr"/>
            
                  <div className="w_fill">

                     <div className="box-elem">
                        <input className="f-prop" type="text" placeholder="Name" required/>
                        <input className="f-prop" type="text" placeholder="Email" required/>
                     </div>

                     <div className="box-elem">
                        <input className="f-prop" type="number" placeholder="Phone Number" required/>
                        <input className="f-prop" type="text" placeholder="Subject" required/>
                     </div>
                     
                     <div className="box-elem">
                        <input className="f-prop" type="text" placeholder="Message" required/>
                        
                        <button className="bgk">Send Message</button>
                        
                     </div>
               </div>
           </div>
        </div>
    )

}
export default Connect;