"use client"
import React from 'react'
import { useContext } from 'react';
import Storedata, { CentralizeData } from '../context';
import Link from 'next/link';
const search = () => {
  // const [data,setdata] = useContext(Storedata);
  const [data, setdata] = useContext(CentralizeData);
  const [slug, setslug] = useContext(CentralizeData);
  const [navslug, navsetslug] = useContext(CentralizeData);
  console.log(slug,"its slug");



  let searchimages = <h1>Loading....</h1>;
  
  console.log(data,"its a data");
  let dnd = `&force=true`;
  if(data.length>0){
    searchimages = data.map((el,idx)=>{
      console.log(el);
       return(
        <div key={idx}>
          <Link href={`/details/${el.id}`}>
            <div className="result">
                {/* <img src={el.links.download} alt="" /> */}
                <img style={{aspectRatio:`${el.width}/${el.height}`}} src={el.links.download} alt="" />
                <div className="overlay">
                <div className="llll">
                <div className="user_u">
                  <img
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                    src={el.user.profile_image.medium}
                    alt=""
                  />
                  <small style={{fontSize:'1.2vmax',color:"#fff",fontFamily:"gilroy",fontWeight:"600",marginLeft:".3vmax"}}>{el.user.first_name}{el.user.last_name}</small>
                </div>
                <p style={{color:"#fff"}}>{el.user.for_hire? 'Available for hire' : 'Not Available'}</p>
                
                </div>

                <div className="dwn">
                  <a
                    data-test="non-sponsored-photo-download-button"
                    rel="nofollow"
                    download=""
                    target="_blank"
                    className="CyIN2 DQBsa p1cWU jpBZ0 EzsBC KHq0c OHtll I0aPD dEcXu yn5eT jpBZ0 NP4SP gC6PP"
                    title="Download photo"
                    href={`${el.links.download} ${dnd}`}>
                    <svg
                      width="32"
                      height="32"
                      className="m9vYO"
                      viewBox="0 0 24 24"
                      version="1.1"
                      aria-hidden="false"
                    >
                      <desc lang="en-US">Arrow pointing down</desc>
                      <path d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Link>

          <br />
              <Link href={`/details/${el.id}`}>
                {el.author}
              </Link>
        </div>
       )
    })
  }

  
  return (
    <div>
       <div id="mains">
           <div className="results">
              {searchimages}
           </div>
       </div>
    </div>
  )
}

export default search