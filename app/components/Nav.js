import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Nav = (props) => {
  const router = useRouter();
  const [navslug, setnavslug] = useState('')
  const {data,setdata,slug,setslug,searchHandler} = props;

  const searchNav = async (e)=>{
    e.preventDefault()
      try{
          const {data} = await axios.get(`https://api.unsplash.com/search/photos?client_id=jk88sXh6iBjRr-gcQU4dqHbJRezFT6Rah6Ab80BY3c0&page=1&query=${navslug}`);
          setdata(data.results);
          router.push("/search");
          setnavslug("")
      }catch(error){
        console.log(error);
      }
}

  return (
    <div>
         <div id="nav">
          <div className="nl">
            <a
              aria-current="page"
              className="XDKcL eziW_"
              title="Home — Unsplash"
              href="/"
            >
              <svg
                width="32"
                height="32"
                className="UP8CN"
                viewBox="0 0 32 32"
                version="1.1"
                aria-labelledby="unsplash-home"
                aria-hidden="false"
              >
                <desc lang="en-US">Unsplash logo</desc>
                <title id="unsplash-home">Unsplash Home</title>
                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
              </svg>
            </a>
            <form onSubmit={searchNav}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
              </svg>
              <input type="text"
                value={navslug}
                onChange={(e)=>setnavslug(e.target.value)}
                placeholder="Search high-resolution images"
              />
            </form>
          </div>
          <div className="nr">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
            </svg>
          </div>
        </div>
    </div>
  )
}

export default Nav