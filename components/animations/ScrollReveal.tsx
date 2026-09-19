"use client";
import {useLayoutEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function ScrollReveal(){
 useLayoutEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const ctx=gsap.context(()=>{gsap.utils.toArray<HTMLElement>(".reveal-item").forEach(el=>gsap.to(el,{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%",once:true}}));gsap.utils.toArray<HTMLElement>(".parallax").forEach(el=>gsap.to(el,{yPercent:-10,ease:"none",scrollTrigger:{trigger:el,scrub:true}}))});return()=>ctx.revert()},[]);
 return null;
}
