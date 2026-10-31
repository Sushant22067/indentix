"use client";
import {useEffect,useState} from "react";
export function Mascot(){
 const [y,setY]=useState(0),[talk,setTalk]=useState(false);
 useEffect(()=>{const fn=()=>setY(window.scrollY);window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn)},[]);
 const messages=["Psst… nice to meet you.","Keep going. The good stuff is below.","Have a project? Let's make noise."];
 return <div className="mascot-wrap" style={{transform:`translateY(${Math.min(y*.10,190)}px)`}}>
  {talk&&<div className="mascot-bubble">{messages[Math.min(Math.floor(y/950),2)]}</div>}
  <button className="mascot" onClick={()=>setTalk(!talk)} aria-label="Say hello"><span className="mascot-shine"/><span className="eyes"><i/><i/></span><span className="mouth"/></button>
 </div>
}
