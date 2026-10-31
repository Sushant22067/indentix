"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
export function SiteShell({children}:{children:React.ReactNode}) {
 const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false),[progress,setProgress]=useState(0);
 useEffect(()=>{const update=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max>0?window.scrollY/max*100:0);setScrolled(window.scrollY>20)};update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update)},[]);
 const close=()=>setOpen(false);
 return <>
  <div className="progress" style={{width:`${progress}%`}}/>
  <header className={`header ${scrolled?"scrolled":""}`}>
   <Link href="/" className="logo" onClick={close}><span className="logo-icon">i<span>.</span></span><span>INDENTIX<small>CREATIVE STUDIO</small></span></Link>
   <button className={`hamb ${open?"on":""}`} onClick={()=>setOpen(!open)} aria-label="Toggle navigation"><i/><i/></button>
   <nav className={open?"nav show":"nav"}><Link href="/work" onClick={close}>Work <sup>04</sup></Link><Link href="/services" onClick={close}>What we do</Link><Link href="/about" onClick={close}>Studio</Link><Link href="/contact" className="nav-pill" onClick={close}>Let's talk <b>↗</b></Link></nav>
  </header>
  <main>{children}</main>
  <footer className="footer">
   <div className="footer-main"><div><Link href="/" className="footer-logo">INDENTIX<span>✳</span></Link><p>Independent by nature.<br/>Intentional by design.</p></div><div className="footer-links"><span>EXPLORE</span><Link href="/work">Selected work</Link><Link href="/services">Services</Link><Link href="/about">Our studio</Link><Link href="/contact">Contact</Link></div><div className="footer-contact"><span>HAVE A GOOD ONE?</span><Link href="/contact">Tell us about it ↗</Link><a href="mailto:hello@indentixstudio.com">hello@indentixstudio.com</a></div></div>
   <div className="footer-bottom"><span>© {new Date().getFullYear()} INDENTIX STUDIO</span><span>MADE FOR THE CURIOUS <b>✳</b></span><Link href="#">BACK TO TOP ↑</Link></div>
  </footer>
 </>;
}
