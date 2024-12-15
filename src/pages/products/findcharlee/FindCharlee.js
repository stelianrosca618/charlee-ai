import { FindCharleeBenefits } from "../../../components/Contents/findcharleepage/FindCharleeBenefits"
import { Footer } from "../../../components/footers/Footer"
import { FooterBanner } from "../../../components/footers/FooterBanner"
import { HomeHeader } from "../../../components/headers/HomeHeader"
import { FindCharleeHero } from "../../../components/heros/FindCharleeHero"
import SplitType from 'split-type'
import gsap, {} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import { useRef } from "react"

export const FindCharlee = () => {
  const findCharleeRef = useRef()

  useGSAP(() => {
    const findCharleeDashboard = gsap.utils.toArray('.findCharlee-dashboard');
    const findCharleeLogo = gsap.utils.toArray('.findCharlee-logo');
    const findCharleeLogoTxt = new SplitType('.findCharlee-logoTxt', {
              types: 'lines, words, chars',
              tagName: 'h5'
            });
    const findCharleeHead = new SplitType('.findCharlee-head', {
        types: 'lines, words, chars',
        tagName: 'h5'
      });
    const findCharleeText = new SplitType('.findCharlee-text', {
        types: 'lines, words, chars',
        tagName: 'h5'
      });
    const findCharleeBook = gsap.utils.toArray('.findCharlee-book');
    const findCharleeFeatures = new SplitType('.findCharlee-features', {
        types: 'lines, words, chars',
        tagName: 'h4'
    })
    const findCharleeTimeline = gsap.timeline();
    findCharleeTimeline.fromTo(findCharleeLogo[0], {opacity: 0, clipPath: 'inset(100%)'}, {opacity: 1, clipPath: 'inset(0%)', duration: 0.5});
    findCharleeTimeline.fromTo(
      findCharleeLogoTxt.chars,
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
    findCharleeTimeline.fromTo(findCharleeHead.chars,
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
    findCharleeTimeline.fromTo(
      findCharleeText.lines,
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
    findCharleeTimeline.fromTo(
      findCharleeBook[0],
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
    findCharleeTimeline.fromTo(findCharleeFeatures.chars,
      {
        y: '-50%',
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
    gsap.fromTo(findCharleeDashboard[0], {opacity: 0, zIndex: 2, x: '-100%'}, {opacity: 1, zIndex: 1, x: '0', duration: 2})
  }, {
    scope: findCharleeRef
  })

  return (
    <div className="w-full overflow-hidden bg-[#F9F9F9]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div ref={findCharleeRef} className="findCharlee-page">
        <FindCharleeHero /> 
        <FindCharleeBenefits />
      </div>
      <FooterBanner />
      <Footer />
    </div> 
  )
}