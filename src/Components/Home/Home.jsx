import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import homeStyle from "./home.module.css";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

export default function Home() {
  const [respApiGame, setApiGame] = useState([0]);

  async function getApiGame() {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/filter",
      params: { tag: "3d.mmorpg.fantasy.pvp", platform: "pc" },
      headers: {
        "X-RapidAPI-Key": "18ed92c0e8mshc528884bcf732bdp1634f8jsn9463ef451ea9",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let { data } = await axios.request(options);
    let newData = {...respApiGame};
    
    newData = data.slice(0,3);
    setApiGame(newData);
    console.log(newData, ' oen');

  }

  useEffect(() => {
    getApiGame();
 
  }, []);

  return (
    <>
    

    { respApiGame.length == 0 ? <div className="loadingScreen vh-100 bg-secondary d-flex justify-content-center align-items-center position-fixed fixed-top">
      <i className="fa-solid fa-spinner fa-spin fa-7x text-white"> </i>
    </div> :   <div className="container">
    <Header /> 
        <div>
          <p className="fs-1 text-secondary">
            <i className="fa-solid fa-robot p-3 text-secondary fs-1"></i>
            Personalized Recommendations
          </p>
        </div>

        <div className="row">
          {  respApiGame.map(  ( el , idx) => { return <div className={homeStyle.colStyle + " col-lg-4 col-md-4 col-12 "}>
            <div className={homeStyle.contentStyle + " text-secondary"}>
              <img
                src={el.thumbnail}
                alt={el.title}
                className="w-100"
              />
              <div className="d-flex justify-content-between align-items-center py-2 px-4">
                <p className="my-auto fs-3">{el.title}</p>
                <span className={homeStyle.freeBtn + " badge bg-primary p-2"}>
                  FREE
                </span>
              </div>
            </div>
          </div> }  )}
          
        </div>
      </div>}
    
      
    </>
  );
}
