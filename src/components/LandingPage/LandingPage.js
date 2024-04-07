import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap-trial/InertiaPlugin'
import { CustomEase } from "gsap-trial/CustomEase";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { MotionPathHelper } from "gsap-trial/dist/MotionPathHelper";
import { ScrambleTextPlugin } from "gsap-trial/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react/dist";
import { StyledLandingPage } from './LandingPage.styled';
import {GSDevTools} from "gsap-trial/GSDevTools"
gsap.registerPlugin(GSDevTools)

gsap.config({trialWarn: false})
gsap.registerPlugin(Draggable, MotionPathPlugin, MotionPathHelper, InertiaPlugin, useGSAP,DrawSVGPlugin,ScrambleTextPlugin,CustomEase, MotionPathPlugin, DrawSVGPlugin);



function LandingPage() {

let strokeColor = 'black'
let lineWidth = '1'
let lineCap = 'round'
let lineJoin = 'round'
let offset = '100'

setTimeout(() => {
    const tl = gsap.timeline()
    const logo = document.querySelector('#logo')
    if(logo) { 
        gsap.from('#pathW', {
            motionPath: {
                autoRotate: false,
                path: "M0,0 C6.36,28.784 3.198,23.456 17.232,50.389 27.342,69.792 137.406,266.68 151.251,292.273",
            },
            duration: 3,
            ease: "power1.out",
            });
        MotionPathHelper.create("#pathW");
    }
    }, 1);

// setTimeout(() => {
    
// const logo = document.querySelector('#logo')
// const pathArray = document.querySelectorAll('path')
// let tl
// if(logo) {
    
//     pathArray.forEach((pth) => {

//     let paths = splitPaths(pth);

//     let duration = 5,
//         distance = 0,
//      tl = gsap.timeline();
//     paths.forEach(segment => distance += segment.getTotalLength());
//     paths.forEach(segment => {
//         tl.from(segment, {
//         drawSVG: 0,
//         ease: 'none',
//         duration: duration * (segment.getTotalLength() / distance),
//       });
//     tl.to('#logo', {fillOpacity: 1, duration: 3, ease: "power1.out",})
//     //   gsap.fromTo(segment, {strokeOpacity: 1}, {duration: duration * (segment.getTotalLength() / distance),strokeOpacity: 0})
//     //   tl.fromTo(segment, {filter: 'drop-shadow(0px 0px 0px blue)'}, {duration: duration * (segment.getTotalLength() / distance),filter: 'drop-shadow(1.9985px 0.9993px 0.9993px blue)',ease: "steps(50000)"})
//     });

// })
// GSDevTools.create({animation: tl});
// document.querySelector('.gs-dev-tools').style = "z-index: 5;"
// }
// }, 1);

// function splitPaths(paths) {
//   let toSplit = gsap.utils.toArray(paths),
//       newPaths = [];
//   if (toSplit.length > 1) {
//     toSplit.forEach(path => newPaths.push(...splitPaths(path)));
//   } else {
//     let path = toSplit[0],
//         rawPath = MotionPathPlugin.getRawPath(path),
//         parent = path.parentNode,
//         attributes = [].slice.call(path.attributes);
//     newPaths = rawPath.map(segment => {
//       let newPath = document.createElementNS("http://www.w3.org/2000/svg", "path"),
//           i = attributes.length;
//       while (i--) {
//         newPath.setAttributeNS(null, attributes[i].nodeName, attributes[i].nodeValue);
//       }
//       newPath.setAttributeNS(null, "d", "M" + segment[0] + "," + segment[1] + "C" + segment.slice(2).join(",") + (segment.closed ? "z" : ""));
//       parent.insertBefore(newPath, path);
//       return newPath;
//     });
//     parent.removeChild(path);
//   }
//   return newPaths;
  
  
// }


    return (
        <StyledLandingPage >
            <Link to='/HomePage'>**WikiLinks**</Link>
            <div id='logo-container'>
                <svg id='logo' fillOpacity="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 400 80">
                    <g id="a"/>
                        <g id="b">
                            <g id="c">
                                <g>
                                    <path id='pathW' d="M0,10.64H18.65l.49,1.08c-.85,.49-1.67,1.33-2.54,1.39-2.18,.13-3.3,.94-2.59,3.16,4.38,13.64,8.82,27.27,13.51,41.75,1.89-5.88,3.51-10.92,5.12-15.97,1.19-3.72,2.1-7.55,3.62-11.13,2.13-5,.94-9.61-1.31-13.97-.84-1.62-3.1-2.5-4.71-3.71-.74-.55-1.49-1.1-2.24-1.64l.52-.82h19.53l.5,.84c-.75,.52-1.44,1.37-2.25,1.49-3.55,.49-4.4,1.39-3.36,4.7,4.07,12.98,8.25,25.93,12.41,38.89,.05,.16,.3,.25,.69,.56,.29-.7,.59-1.3,.8-1.94,3.94-12.14,7.88-24.28,11.79-36.43,1.4-4.36,.85-5.12-3.63-5.77-.8-.11-1.5-.88-2.25-1.34l.43-.92h18.58c-.89,1.04-1.41,2.2-2.01,2.24-4.24,.31-5.88,3.13-7.09,6.65-5.11,14.97-10.28,29.93-15.44,44.89-.21,.6-.28,1.32-.66,1.76-.69,.81-1.66,2.09-2.36,2-1-.13-2.21-1.14-2.7-2.1-.9-1.76-1.36-3.76-1.98-5.66-2.68-8.12-5.34-16.23-8.03-24.35-.36-1.08-.78-2.13-1.52-4.13-.83,1.96-1.4,3.09-1.79,4.29-3.03,9.11-5.98,18.25-9.09,27.33-.63,1.84-.45,4.67-3.36,4.72-2.9,.05-2.86-2.72-3.5-4.59-5.13-15.19-10.16-30.41-15.26-45.61-1.61-4.78-2.05-5.04-6.97-5.14v-2.54Z" stroke={strokeColor} strokeWidth={lineWidth} strokeLinecap={lineCap} strokeLinejoin={lineJoin} strokeDashoffset={offset}/>
                                    <path id='pathI' d="M290.54,69c-3.24-.61-6.49-1.22-10.01-1.87-.5-4.51-1.05-9.39-1.58-14.19,2.41-1.33,2.72,.29,3.15,1.72,1.59,5.2,4.21,9.45,9.98,10.81,6.2,1.45,12.44-1.4,14.22-6.54,2.18-6.29-.35-12.49-6.37-15.4-3.79-1.83-7.84-3.2-11.46-5.32-5.64-3.29-9.35-7.97-8.2-15.07,.95-5.87,4.63-9.54,9.89-11.82,1.15-.5,2.36-.87,3.54-1.3h7.61c2.1,.66,4.23,1.24,6.28,2.03,.75,.29,1.75,1.01,1.86,1.66,.65,3.92,1.08,7.88,1.58,11.83l-.76,.7c-.75-.69-1.73-1.24-2.22-2.09-1.41-2.44-2.27-5.28-3.98-7.46-3.64-4.63-11.29-4.88-15.2-.82-4.18,4.33-3.7,10.75,1.45,14.6,2.4,1.8,5.3,2.97,8.03,4.3,2.17,1.05,4.5,1.79,6.66,2.87,6.42,3.21,9.64,8.42,8.93,15.63-.7,7.01-4.55,11.84-11.05,14.55-.95,.4-1.9,.79-2.85,1.19-3.17,0-6.34,0-9.52,0Z" stroke={strokeColor} strokeWidth={lineWidth} strokeLinecap={lineCap} strokeLinejoin={lineJoin} strokeDashoffset={offset}/>
                                    <path id='pathK' d="M198.6,30.98c2.25,0,4.51-.13,6.74,.07,.77,.07,1.63,.85,2.16,1.53,6.22,7.98,12.39,16,18.58,24,.74,.95,1.54,1.85,2.69,3.22,.16-1.18,.31-1.8,.31-2.42,.02-6.84,.03-13.68,0-20.51-.01-3.13-.76-3.88-3.92-4.31-.55-.08-1.05-.5-1.58-.77l.23-.63h12.55l.36,.35c-.42,.36-.8,.96-1.27,1.04-3.24,.57-3.79,1.14-3.8,4.4,0,9.5,.02,19.01-.04,28.51,0,.92-.56,1.83-.85,2.74-.97-.49-2.25-.74-2.87-1.51-6.46-8.05-12.81-16.19-19.2-24.3-.66-.84-1.4-1.61-2.51-2.88-.18,1.18-.35,1.79-.36,2.4-.02,6.91-.04,13.81,0,20.72,.01,2.43,.92,3.26,3.47,3.67,.58,.09,1.1,.63,1.65,.96l-.32,.58h-12.45l-.32-.54c.51-.34,.98-.89,1.53-.98,3.19-.53,3.86-1.25,3.87-4.59,.01-7.93,.01-15.86,0-23.8,0-2.82-1.12-4.36-3.77-5.42-.45-.18-.79-.62-1.18-.94l.3-.59Z" stroke={strokeColor} strokeWidth={lineWidth} strokeLinecap={lineCap} strokeLinejoin={lineJoin} strokeDashoffset={offset}/>
                                    <path id='pathI2' d="M108.22,67.82h-14.3l-.35-.5c.47-.35,.9-.94,1.42-1.02,3.7-.58,3.71-.55,3.71-4.19,0-8.68,0-17.37,0-26.05,0-2.7-.45-3.17-3.16-3.44-.88-.09-2.12,.25-1.78-1.53h14.43l.35,.42c-.47,.36-.9,.96-1.41,1.04-3.75,.6-3.75,.56-3.75,4.37,0,3.61,0,7.22,0,11.57,1.74-.96,3.27-1.44,4.28-2.44,3.4-3.37,6.63-6.9,9.88-10.42,1.78-1.93,1.57-2.41-.93-3.09-.46-.13-.8-.7-.92-1.48h12.22l.34,.45c-.43,.36-.84,.98-1.31,1.04-3.19,.39-5.53,2.12-7.6,4.44-2.63,2.96-5.33,5.87-8.06,8.75-1.17,1.24-1.14,2.25-.03,3.54,4.09,4.77,8.03,9.68,12.2,14.39,1.02,1.15,2.69,1.71,4.04,2.57,.48,.31,.91,.72,1.36,1.08l-.33,.48h-9.83c.03-3.35-2.36-5.43-4.27-7.78-2.03-2.49-3.97-5.07-6.18-7.39-1.13-1.19-2.78-1.89-4.2-2.81l-.65,.5v7.29c0,1.3,0,2.6,0,3.9,0,4.02,0,3.99,3.94,4.78,.47,.09,.83,.69,1.24,1.06l-.34,.46Z" stroke={strokeColor} strokeWidth={lineWidth} strokeLinecap={lineCap} strokeLinejoin={lineJoin} strokeDashoffset={offset}/>
                                    <path id='pathP' d="M239.33,31.03h14.31l.34,.51c-.48,.35-.93,.93-1.45,1.01-3.67,.57-3.77,.65-3.78,4.39,0,3.61,0,7.22,0,11.59,1.79-1.01,3.32-1.49,4.34-2.5,3.4-3.37,6.64-6.9,9.89-10.42,1.79-1.94,1.58-2.39-.96-3.07-.47-.13-.82-.69-1.23-1.05l.27-.42h12.21l.36,.45c-.42,.36-.81,.99-1.27,1.04-3.19,.4-5.54,2.11-7.6,4.44-2.54,2.86-5.14,5.68-7.81,8.43-1.32,1.36-1.53,2.46-.18,4.01,4.04,4.64,7.87,9.47,11.96,14.07,1.06,1.2,2.78,1.82,4.17,2.73,.49,.32,.92,.72,1.38,1.08l-.32,.47h-10.01c.26-2.98-1.67-4.82-3.33-6.81-2.36-2.84-4.7-5.7-7.06-8.54-1.2-1.44-2.68-2.26-4.77-2.09,0,4.57-.05,9.07,.02,13.57,.03,2.11,1.79,2.11,3.28,2.29,.93,.11,2.07-.08,1.61,1.58h-14.31l-.37-.44c.45-.37,.86-.99,1.36-1.07,3.74-.6,3.75-.57,3.75-4.35,0-8.48,0-16.96,0-25.45,0-3.27-.26-3.52-3.53-3.93-.58-.07-1.1-.54-1.65-.83l.39-.7Z" stroke={strokeColor} strokeWidth={lineWidth} strokeLinecap={lineCap} strokeLinejoin={lineJoin} strokeDashoffset={offset}/>
                                    <path id='pathE' d="M149.32,31.03h14.31l.36,.47c-.46,.36-.88,.97-1.39,1.05-3.77,.62-3.78,.58-3.78,4.34,0,8.27,0,16.54,0,24.82,0,3.31,.56,3.86,3.79,3.88,1.23,0,2.46,0,3.69,0,5.06,0,6.58-1.06,8.36-5.83,.35-.93,.51-2.19,2.08-1.09-.47,2.99-.94,6.01-1.43,9.13h-25.99l-.34-.49c.46-.35,.89-.95,1.38-1.01,3.77-.42,3.78-.39,3.78-4.16,0-8.55,0-17.09,0-25.64,0-3.28-.26-3.52-3.53-3.93-.58-.07-1.12-.54-1.67-.83l.38-.72Z" stroke={strokeColor} strokeWidth={lineWidth} strokeLinecap={lineCap} strokeLinejoin={lineJoin} strokeDashoffset={offset}/>
                                    <path id='pathD' d="M194.87,67.82h-14.3l-.34-.5c.47-.35,.91-.95,1.42-1.02,3.69-.57,3.7-.54,3.7-4.19,0-8.61,0-17.23,0-25.84,0-2.98-.38-3.34-3.33-3.69-.63-.08-1.22-.54-1.83-.83l.25-.66h14.44l.34,.45c-.48,.35-.92,.93-1.45,1.01-3.69,.58-3.77,.63-3.77,4.39,0,8.54,0,17.09,0,25.63,0,2.96,.39,3.32,3.38,3.69,.64,.08,1.24,.54,1.86,.82l-.37,.73Z" stroke={strokeColor} strokeWidth={lineWidth} strokeLinecap={lineCap} strokeLinejoin={lineJoin} strokeDashoffset={offset}/>
                                    <path id='pathI3' d="M131.38,31.04h14.29l.33,.5c-.48,.35-.92,.93-1.44,1.01-3.61,.55-3.7,.61-3.7,4.22,0,8.47,0,16.95,0,25.42,0,3.44,.21,3.64,3.59,4.09,.56,.08,1.06,.59,1.59,.89l-.28,.61h-14.25l-.38-.44c.45-.36,.86-.97,1.35-1.05,3.71-.58,3.78-.62,3.78-4.37,0-8.54,0-17.08,0-25.63,0-2.97-.43-3.38-3.36-3.72-.65-.08-1.26-.51-1.89-.78l.36-.76Z" stroke={strokeColor} strokeWidth={lineWidth} strokeLinecap={lineCap} strokeLinejoin={lineJoin} strokeDashoffset={offset}/>
                                    <path id='pathA' d="M90.13,67.82h-14.11l-.34-.52c.47-.35,.91-.93,1.42-1.01,3.58-.55,3.7-.64,3.7-4.24,0-8.55,0-17.1,0-25.64,0-3.11-.38-3.48-3.45-3.84-.61-.07-1.17-.57-1.76-.87l.28-.63h14.28l.37,.43c-.46,.36-.88,.97-1.38,1.05-3.71,.59-3.75,.59-3.75,4.39,0,8.41,0,16.82,0,25.23,0,3.43,.22,3.64,3.6,4.1,.56,.08,1.06,.59,1.59,.89l-.44,.65Z" stroke={strokeColor} strokeWidth={lineWidth} strokeLinecap={lineCap} strokeLinejoin={lineJoin} strokeDashoffset={offset}/>
                                </g>
                                <path d="M168.03,0h-8V4h8c3.3,0,6,2.7,6,6s-2.7,6-6,6h-8v4h8c5.52,0,10-4.48,10-10s-4.48-10-10-10Zm-12,16h-8c-3.3,0-6-2.7-6-6s2.7-6,6-6h8V0h-8c-5.52,0-10,4.48-10,10s4.48,10,10,10h8v-4Zm-6-8h16v4h-16v-4Z" stroke={strokeColor} strokeWidth={lineWidth} strokeLinecap={lineCap} strokeLinejoin={lineJoin} strokeDashoffset={offset}/>
                            </g>
                        </g>
                        
                </svg>
            </div>
        </StyledLandingPage>
    )

}

export {LandingPage}


