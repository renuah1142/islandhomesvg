"use client";
import {useEffect,useRef} from "react";
import gsap from "gsap";
export default function Preloader(){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{const el=ref.current;if(!el)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){el.remove();return}const progress=el.querySelector(".preloader-progress");const tl=gsap.timeline({onComplete:()=>el.remove()});tl.to(progress,{width:"100%",duration:.8,ease:"power2.inOut"}).to(el,{clipPath:"inset(0 0 100% 0)",duration:.9,ease:"power4.inOut"});return()=>tl.kill()},[]);return <div ref={ref} className="preloader"><div><div className="preloader-mark">ISLAND HOMES <span style={{color:"var(--gold)"}}>SVG</span></div><div className="preloader-line"><div className="preloader-progress"/></div></div></div>}
