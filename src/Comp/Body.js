import React from "react";
import "./Body.css";
import menjac from './Images/menjacket.jpg'
import womenjac from './Images/womenjacket.jpg'
import jac from './Images/viper.webp'
import tshirt from './Images/tshirt.webp'
import tshirt1 from './Images/tshirt1.webp'
import tshirt2 from './Images/tshirt2.webp'
import tshirt3 from './Images/tshirt3.webp'
import tshirt4 from './Images/tshirt4.webp'
import tshirt5 from './Images/tshirt5.webp'
export default function Body() {
    const imeges = [menjac,womenjac,jac,tshirt,tshirt1,tshirt2,tshirt3,tshirt4,tshirt5];
    const price = ['$100','$110','$120','$85','$80','$90','$85','$90']
    const tags = ['Men Jacket','Women Jacket','Men Jacket','Men Tshirt','Printed Tshirt','Men Oversized','Men Tshirt','Women Tshirt','Women Oversized']
  return (
    <>
      <div className="maincont">
        <div className="jacket">
          <div className="menjack">
          <img src={imeges[0]} alt="" className="menjackpic" />
          <h5>{tags[0]}<br/>{price[0]}</h5>
          </div>
          <div className="menjack">
          <img src={imeges[1]} alt="" className="menjackpic" />
          <h5>{tags[1]}<br/>{price[1]}</h5>
          </div>
          <div className="menjack">
          <img src={imeges[3]} alt="" className="menjackpic" />
          <h5>{tags[3]}<br/>{price[3]}</h5>
          </div>
          <div className="menjack">
          <img src={imeges[7]} alt="" className="menjackpic" />
          <h5>{tags[7]}<br/>{price[7]}</h5>
          </div>
        </div>
        <div className="jacket">
          <div className="menjack">
          <img src={imeges[4]} alt="" className="menjackpic" />
          <h5>{tags[4]}<br/>{price[4]}</h5>
          </div>
          <div className="menjack">
          <img src={imeges[5]} alt="" className="menjackpic" />
          <h5>{tags[5]}<br/>{price[5]}</h5>
          </div>
          <div className="menjack">
          <img src={imeges[6]} alt="" className="menjackpic" />
          <h5>{tags[6]}<br/>{price[6]}</h5>
          </div>
          <div className="menjack">
          <img src={imeges[8]} alt="" className="menjackpic" />
          <h5>{tags[7]}<br/>{price[8]}</h5>
          </div>
        </div>
        <div className="footer">
          <h3 className="name" style={{color:"black", fontWeight:300}} >Walkers</h3>
          <div className="ogfooter">
            <div className="aboutus">
              <h4 className="aboutustext" style={{color:"black", fontWeight:300}}>About us</h4>
              <ul className="listabout">
                <li className="abouttext">About us</li>
                <li className="abouttext">Intenship</li>
                <li className="abouttext">Technology</li>
              </ul>
            </div>
            <div className="contactus">
            <h4 className="aboutustext" style={{color:"black", fontWeight:300}}>Contact us</h4>
              <ul className="listabout">
                <li className="abouttext">+91 9313555159</li>
                <li className="abouttext">rutvikpatel21@gnu.ac.in</li>
              </ul>
            </div>
            <div className="tech">
            <h4 className="aboutustext" style={{color:"black", fontWeight:300}}>Join us</h4>
              <ul className="listabout" style={{marginBottom:"10px"}}>
                <li className="abouttext">Instagram</li>
                <li className="abouttext">Facebook</li>
                <li className="abouttext">Twitter</li>
                <li className="abouttext">Whatsapp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
