"use client";
import {useEffect,useRef,useState} from "react";
export function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){
 const ref=useRef<HTMLDivElement>(null);const [show,setShow]=useState(false);
 useEffect(()=>{const el=ref.current;if(!el)return;if(matchMedia("(prefers-reduced-motion: reduce)").matches){setShow(true);return}const ob=new IntersectionObserver(([e])=>{if(e.isIntersecting){setShow(true);ob.disconnect()}},{threshold:.12});ob.observe(el);return()=>ob.disconnect()},[]);
 return <div ref={ref} className={`reveal ${show?"in":""} ${className}`}>{children}</div>
}
