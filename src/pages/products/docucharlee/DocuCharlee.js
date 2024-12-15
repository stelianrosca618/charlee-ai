import { DocuAllPlatforms } from "../../../components/Contents/docucharleepage/DocuAllPlatforms"
import { DocuDashboard } from "../../../components/Contents/docucharleepage/DocuDashboard"
import { DocuGrid } from "../../../components/Contents/docucharleepage/DocuGrid"
import { DocuNumbers } from "../../../components/Contents/docucharleepage/DocuNumbers"
import { Footer } from "../../../components/footers/Footer"
import { FooterBanner } from "../../../components/footers/FooterBanner"
import { HomeHeader } from "../../../components/headers/HomeHeader"
import { DocuCharleeHero } from "../../../components/heros/DocuCharleeHero"

import SplitType from 'split-type'
import gsap, {} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import { useRef } from "react"

export const DocuCharlee = () => {
  const docuCharleeRef = useRef();

  useGSAP(() => {
    const docuChaleeLogo = gsap.utils.toArray('docuChalee-logo')
    const docucharleeLogoTxt =  new SplitType('.docuChalee-logoTxt', {
          types: 'lines, words, chars',
          tagName: 'h5'
        });
    const docuChaleeHead = new SplitType('.docuChalee-head', {
      types: 'lines, words, chars',
      tagName: 'h2'
    });
    const docuChaleeTxt = new SplitType('.docuChalee-txt', {
      types: 'lines, words, chars',
      tagName: 'p'
    });
    const docuChaleeBook = gsap.utils.toArray('.docuChalee-book');
    const docuChaleeBoard = gsap.utils.toArray('.docuChalee-board');
    const docuChaleeGridCard = gsap.utils.toArray('.docuGrid-card');
    const docuCharleeTimeline = gsap.timeline();
    docuCharleeTimeline.fromTo(docuChaleeLogo[0], {opacity: 0, clipPath: 'circle(0%)'}, {opacity: 1, clipPath: 'circle(100%)', duration:1})
    docuCharleeTimeline.fromTo(docucharleeLogoTxt.chars,  { 
      opacity: 0
    },
    {
      opacity: 1,
      stagger: 0.05,
      duration: 0.5,
      ease: 'power4.out',
    });
    docuCharleeTimeline.fromTo(docuChaleeHead.chars,  { 
      y: '-100%',
      opacity: 0
    },
    {
      y: '0%',
      opacity: 1,
      stagger: 0.05,
      duration: 0.5,
    })
    docuCharleeTimeline.fromTo(docuChaleeTxt.lines,  { 
      y: '-10%',
      opacity: 0
    },
    {
      y: '0%',
      opacity: 1,
      stagger: 0.05,
      duration: 0.3,
    })
    docuCharleeTimeline.fromTo(docuChaleeBook, {opacity: 0}, {opacity: 1, duration: 0.5})
    docuCharleeTimeline.fromTo(docuChaleeBoard[0], {
      clipPath: 'inset(100% 0% 0% 0%)',
      y: '50%',
      opacity: 0
    }, {
      clipPath: 'inset(0% 0% 0% 0%)',
      y: '0%',
      opacity: 1, 
      duration: 0.5
    })
    ScrollTrigger.create({
      trigger: '.docuGrid',
      start: "-200px bottom",
      end: "bottom top",
      markers: false,
      scrub: 1,
      onEnter: () => {
        const gridTimeline = gsap.timeline();
        docuChaleeGridCard.map(gridCard => {
        
          gridTimeline.fromTo(gridCard, {
            y: '10%',
            opacity: 0,
          }, {
            y: '0%',
            opacity: 1,
            duration: 0.3
          }, '+=0')
        })
      }
    })
    ScrollTrigger.create({
      trigger: '.docuNumbers',
      start: "top bottom",
      end: "bottom top",
      markers: false,
      scrub: 1,
      onEnter: () => {
        const docuNumItems = gsap.utils.toArray('.docuNumber-item');
        const docuNumCount = gsap.utils.toArray('.docuNum-counter');
        gsap.fromTo(docuNumItems, {opacity: 0, y: '30%'},{opacity: 1, y: '0%', duration: 0.5})
        docuNumCount.map(item => {
          console.log(item.innerText);
          const itemText = item.innerText;

          gsap.fromTo(item, { innerText: 0, 
            snap: {
              innerText:1
            } 
            }, { innerText: itemText, duration: 1.5, 
              snap: {
                innerText:1
              }
            });
        })
      }
    })
  }, {
    scope: docuCharleeRef
  })

  return (
    <div className="w-full overflow-hidden bg-[#F9F9F9]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div ref={docuCharleeRef} className="docuCharlee-page">
        <DocuCharleeHero />
        <DocuDashboard />
        <DocuGrid />
        <DocuNumbers />
        <DocuAllPlatforms />
      </div>
      <FooterBanner />
      <Footer />
    </div> 
  )
}