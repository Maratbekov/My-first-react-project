import React from "react"
import "./Footer.css"
import {style} from "../../style/styles";

const Footer = () => {
    return (
       <header id="footer">
           <div className="container">
               <div className="footer">

                  <div>
                      <p style={style.p}>© 2022 Nevis</p>
                  </div>

                   <div>
                       <p style={style.p}>Разработано лучшей студей</p>
                       <p style={style.m}>Motion-Web IT Company</p>
                   </div>

               </div>
           </div>
       </header>
    )
}

export default Footer