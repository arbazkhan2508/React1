"use client"
import Image from "next/image";
import { CentralizeData } from "./context";
import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import { use } from "react";



export default function Home() {
  // const router = useRouter();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const GettrandingImages = async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/photos?client_id=zPjCLEodnXSkXMl1uvjydLDZSJSJ1UzDzUX2Br4PfAo&page=${page}&per_page=12`
      );
      setimages(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [images, setimages] = useState(use(GettrandingImages())||[]);
  
  const [slug, setslug] = useState("");
  const [data, setdata] = useContext(CentralizeData);

  // let search = searchHandler;

  const searchHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=zPjCLEodnXSkXMl1uvjydLDZSJSJ1UzDzUX2Br4PfAo&query=${slug}`
      );
      setdata(data.results);
      router.push("/search");
      console.log(slug);
      setslug("");
    } catch (error) {
      console.log(error);
    }
  };

 

  let allimages = <h1>Loading....</h1>;
  let dnd = `&force=true`;
  if (images.length > 0) {
    allimages = images.map((el, idx) => {
      return (
        <div key={idx}>
          <Link href={`/details/${el.id}`}>
            <div className="pic">
              <img  src={el.links.download} alt="" />
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
        </div>
      );
    });
  }

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  useEffect(() => {
    GettrandingImages();
  }, [page]);

  return (
    <>
      <div id="main">
        <Nav
          searchHandler={searchHandler}
          slug={slug}
          setslug={setslug}
          data={data}
          setdata={setdata}
        ></Nav>
        <div id="pg1">
          <div className="text">
            <h1>Myplash</h1>
            <small>The internet’s source for visuals.</small> <br />
            <small>Powered by creators everywhere.</small>
            <form onSubmit={searchHandler}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
              </svg>
              <input
                value={slug}
                onChange={(e) => setslug(e.target.value)}
                type="text"
                placeholder="Search high-resolution images"
              />
            
            </form>
          </div>
        </div>
        <div className="ak">
          <div className="inner">{allimages}</div>
        </div>
        <div className="div">
          <ReactPaginate
            className="pg"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageCount={10}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
}
