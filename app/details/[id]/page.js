"use client";
import "@babel/polyfill";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import { use } from "react";
import Link from "next/link";

const getDets = async (id) => {
  console.log(id, "its id");
  try {
    const { data } = await axios.get(
      `https://api.unsplash.com/photos/${id}?client_id=zPjCLEodnXSkXMl1uvjydLDZSJSJ1UzDzUX2Br4PfAo`
    );
    console.log(data, "its main dat");
    return data;
  } catch (error) {
    console.log(error);
  }
};
let dnd = `&force=true`;
const details = () => {
  const firstref = useRef(null)
  const { id } = useParams();
  const [isDivVisible, setDivVisible] = useState(false);
  const [det, setdet] = useState(use(getDets(id)));

  const handleMouseEnter = () => {
    setDivVisible(true);
  };

  const handleMouseLeave = () => {
    setDivVisible(false);
  };


  return (
    <div id="mmm">
      <Link href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
        </svg>
      </Link>
      <div className="dets">
        <div className="dets_top">
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="muser">
            <div className="mimg">
              <img src={det.user.profile_image.medium} alt="" />
            </div>
            <div className="name">
              <small>
                {det.user.first_name}
                {det.user.last_name}
              </small>
              <p>
                {det.user.for_hire ? "Available for hire" : "Not Available"}
              </p>
            </div>
          </div>
          
          <a href={`${det.links.download} ${dnd}`}>
            <div className="button">Download free</div>
          </a>
        </div>
        <a href={`https://unsplash.com/@${det.user.username}`} >
        <div style={{ display: isDivVisible ? 'flex' : 'none' }} className="profile_card">
            <div className="prf_top" style={{paddingRight:"initial"}}>
              <div className="detai">
                <div className="det_img">
                    <img src={det.user.profile_image.medium} alt="" />
                </div>
                <div className="dset_txt">
                  <small style={{fontSize:"1.8vmax"}}>
                    {det.user.first_name}
                    {det.user.last_name}
                  </small>
                  <small style={{fontSize:"1.4vmax",color:"#666",lineHeight:.5}}>{det.user.twitter_username}</small>
                </div>
              </div>
              <p style={{backgroundColor:"#5a94ce",color:"#fff",padding:".5vmax 1vmax",fontFamily:"gilroy",fontSize:"1vmax",fontWeight:"600",letterSpacing:"1px",borderRadius:"5px",margin:"initial",marginLeft:"1vmax"}}>
                {det.user.for_hire ? "Hire" : ""}
              </p>
            </div>
            <div className="cards">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
            <div className="btnn">
                 View Profile
            </div>
        </div>
        </a>
        <div className="dimg">
          <img width={200} src={det && det.links.download} alt="" />
        </div>
      </div>
      {/* details */}
    </div>
  );
};

export default details;
