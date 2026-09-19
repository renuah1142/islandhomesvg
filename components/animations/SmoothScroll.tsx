"use client";
import { ReactNode,useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function SmoothScroll({children}:{children:ReactNode}){
 useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const lenis=new Lenis({lerp:.085,smoothWheel:true});const tick=(time:number)=>lenis.raf(time*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);lenis.on("scroll",ScrollTrigger.update);return()=>{gsap.ticker.remove(tick);lenis.destroy()}},[]);
 return <>{children}</>;
}
