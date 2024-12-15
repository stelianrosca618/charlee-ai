import { AllPlatform } from "../../../components/Contents/seecharleepage/AllPlatform"
import { Footer } from "../../../components/footers/Footer"
import { FooterBanner } from "../../../components/footers/FooterBanner"
import { HomeHeader } from "../../../components/headers/HomeHeader"
import { SeeCharleeHero } from "../../../components/heros/SeeCharleeHero"

import SplitType from 'split-type'
import gsap, {} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
export const SeeCharlee = () => {
  const seeCharleeRef = useRef();
  useGSAP(() => {
    const seeCharleeLogo = gsap.utils.toArray('.seecharlee-logo');
    const seeCharleeLogoTxt =  new SplitType('.askcharlee-logoText', {
          types: 'lines, words, chars',
          tagName: 'h5'
        });
    const seeCharleeHead = new SplitType('.askCharlee-head', {
      types: 'lines, words, chars',
      tagName: 'h2'
    });
    const seeCharleeText = new SplitType('.askCharlee-text', {
      types: 'lines, words, chars',
      tagName: 'p'
    });
    const seeCharleeBook = gsap.utils.toArray('.askCharlee-book');
    const seeCharleeReviewTxt = new SplitType('.askCharlee-reveiwTxt', {
      types: 'lines, words, chars',
      tagName: 'p'
    });
    const seeCharleeReviewer = gsap.utils.toArray('.askCharlee-reviewer');
    const seeCharleeDashboardImg = gsap.utils.toArray('.seeCharlee-bashboardImg');
    
    const seeCharleeTimeline = gsap.timeline();
    seeCharleeTimeline.fromTo(seeCharleeLogo[0], {opacity: 0, clipPath: 'inset(100%)'}, {opacity: 1, clipPath: 'inset(0%)', duration: 0.5});
    seeCharleeTimeline.fromTo(
      seeCharleeLogoTxt.chars,
      { 
        opacity: 0
      },
      {
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power4.out',
      }, '+=0'
    );
    seeCharleeTimeline.fromTo(seeCharleeHead.chars,
      {
        y: '50%',
        opacity: 0
      },
      {
        y: '0',
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power4.out',
      },
      "+=0"
    )
    seeCharleeTimeline.fromTo(
      seeCharleeText.lines,
      {
        y: '-50%',
        opacity: 0
      },
      {
        y: '0',
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power4.out',
      },
      "+=0"
    )
    seeCharleeTimeline.fromTo(
      seeCharleeBook[0],
      {
        opacity: 0,
        clipPath: 'inset(0% 0% 100% 0%)',
      },
      {
        opacity: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.5
      },
      '+=0'
    )
    seeCharleeTimeline.fromTo(
      seeCharleeReviewTxt.chars,
      {
        opacity: 0,
      },
      {
        y: '0',
        opacity: 1,
        stagger: 0.01,
        duration: 0.3,
        ease: 'power4.out',
      },
      "+=0"
    )
    seeCharleeTimeline.fromTo(
      seeCharleeReviewer[0],
      {
        opacity: 0,
        clipPath: 'inset(100% 0% 0% 0%)'
      },
      {
        opacity: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.5 
      },
      "+=0"
    )

    gsap.fromTo(seeCharleeDashboardImg[0], {opacity: 0, x: '-100%'}, {opacity: 1, x: '0', duration: 2})
        // gsap.utils.toArray('.seecharlee-logoText')
  },  {
    scope: seeCharleeRef
  })
  return (
    <div className="w-full overflow-hidden bg-[#F9F9F9]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div ref={seeCharleeRef} className="seeCharlee-page">
        <SeeCharleeHero />
        <AllPlatform />
      </div>
      <FooterBanner />
      <Footer />
    </div> 
  )
}