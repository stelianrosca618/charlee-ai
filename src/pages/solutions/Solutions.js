import { LineBusiness } from "../../components/Contents/solutionpage/LineBusiness"
import { UseCases } from "../../components/Contents/solutionpage/UseCases"
import { Footer } from "../../components/footers/Footer"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { SolutionHero } from "../../components/heros/SolutionHero"

import SplitType from 'split-type'
import gsap, {} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
export const Solutions = () => {
  const solutionRes = useRef();

  useGSAP(() => {
    const solutionSubTitle = new SplitType('.solution-subTitle', {
      types: 'lines, words, chars',
      tagName: 'h6'
    }) 
    const solutionTitle = new SplitType('.solution-title', {
      types: 'lines, words, chars',
      tagName: 'h2'
    }) 
    const countDetails =  gsap.utils.toArray(".countDetail")
    const items = gsap.utils.toArray(".numbCount")
    const solutionCards = gsap.utils.toArray('.solution-cards');
    const solutionTimeline = gsap.timeline();
    solutionTimeline.from(solutionSubTitle.lines, {y: '100%', opacity: 0, ease: 'power1.out', stagger: 0.5, duration: 1}, "+=0");
    solutionTimeline.from(solutionTitle.chars, {y: '-100%', opacity: 0, ease: 'power1.out', stagger: 0.02, duration: 0.5}, "+=0");
    items.map(item => {
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
    
    solutionTimeline.from(countDetails, {y: '100%', opacity: 0, ease: 'power1.out', stagger: 0.5, duration: 1}, "+=0");
    solutionTimeline.from(solutionCards, {clipPath: 'circle(0)', opacity: 0, ease: 'power1.out', stagger: 0.5, duration: 1}, "+=0");

  }, {scope: solutionRes})

  return (
    <div className="w-full overflow-hidden bg-[#F9F9F9]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div ref={solutionRes} className="solutions-page">
        <SolutionHero />
        <UseCases />
        <LineBusiness /> 
      </div>
      <Footer />
    </div> 
  )
}