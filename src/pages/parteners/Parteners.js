import { useRef } from "react"
import { PartenerList } from "../../components/Contents/partenerpage/PartenerList"
import { Footer } from "../../components/footers/Footer"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { PartenerHero } from "../../components/heros/PartenerHero"
import SplitType from 'split-type'
import gsap, {} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
export const Parteners = () => {
  const partnerRes = useRef();

  useGSAP(() => {
    const partnerHead = gsap.utils.toArray('.partner-header');
    const partnerInputs = gsap.utils.toArray('.partner-inputs');
    let typeSplit = new SplitType('.partners-subTitle', {
      types: 'lines, words, chars',
      tagName: 'h5'
    })
    let titleSplit = new SplitType('.partners-title', {
      types: 'lines, words, chars',
      tagName: 'h4'
    })
    const partnerTimeline = gsap.timeline();
    partnerTimeline.fromTo(partnerHead[0], {clipPath: 'inset(0% 0% 100% 0%)'}, {clipPath: 'inset(0% 0% 0% 0%)', duration: 1});
    partnerTimeline.fromTo(partnerInputs[0], {clipPath: 'inset(100% 0% 0% 0%)'}, {clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5}, "+=0");
    partnerTimeline.from(typeSplit.lines, {y: '100%', opacity: 0, ease: 'power1.out', stagger: 0.5, duration: 1}, "+=0");
    partnerTimeline.from(titleSplit.chars, {y: '100%', opacity: 0, ease: 'power1.out', stagger: 0.02, duration: 0.5}, "+=0");
  }, {scope: partnerRes})

  return (
    <div className="w-full overflow-x-hidden">
      <HomeHeader headerColor={'#0D131E'} textColor={'#ffffff'}/>
      <div ref={partnerRes} className="parteners-page ">
        <PartenerHero />
        <PartenerList />
      </div>
      <Footer />
    </div>
  )
}