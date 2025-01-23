import { useState } from "react"
import { BenefitsSection } from "../../../components/Contents/askcharleepage/BenefitsSection"
import { QueriesSection } from "../../../components/Contents/askcharleepage/QueriesSection"
import { ReviewsSection } from "../../../components/Contents/askcharleepage/ReviewsSection"
import { Footer } from "../../../components/footers/Footer"
import { FooterBanner } from "../../../components/footers/FooterBanner"
import { HomeHeader } from "../../../components/headers/HomeHeader"
import { AskCharleeHero } from "../../../components/heros/AskCharleeHero"
import { BookPopup } from "../../../components/modals/BookPopup"

import SplitType from 'split-type'
import gsap, {} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
export const AskCharlee = () => {
  const askCharleeRes = useRef();

  useGSAP(() => {
    const askCharleeLogo = gsap.utils.toArray('.askcharlee-logo');
    const askCharleeLogoText = new SplitType('.askcharlee-logoText', {
      types: 'lines, words, chars',
      tagName: 'h6'
    }) 
    const askCharleeHead = new SplitType('.askCharlee-head', {
      types: 'lines, words, chars',
      tagName: 'h2'
    })
    const askCharleeText = new SplitType('.askCharlee-text', {
      types: 'lines, words, chars',
      tagName: 'p'
    })
    const askcharleeReview = new SplitType('.askCharlee-reviewer', {
      types: 'lines, words, chars',
      tagName: 'p'  
    })
    const charleeAvata = gsap.utils.toArray('.askCharlee-avata');
    const askCharleeBook = gsap.utils.toArray('.askCharleeBook-btn');
    const askCharleeFeatures = gsap.utils.toArray('.askCharlee-features');
    const askCharleeTimeline = gsap.timeline();
    askCharleeTimeline.from(askCharleeLogo[0], {opacity: 0, clipPath: 'circle(0%)', duration:1})
    askCharleeTimeline.fromTo(
      askCharleeLogoText.chars,
      { 
        opacity: 0
      },
      {
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
      }
    );
    askCharleeTimeline.fromTo(
      askCharleeHead.chars,
      { 
        y: '100%',
        opacity: 0
      },
      {
        y: '0',
        opacity: 1,
        stagger: 0.03,
        duration: 1,
        ease: 'power4.out',
      }
    );
    askCharleeTimeline.fromTo(
      askCharleeText.lines,
      { 
        y: '-100%',
        opacity: 0
      },
      {
        y: '0',
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
      }
    );
    askCharleeTimeline.fromTo(askCharleeBook[0], {clipPath: 'circle(0%)'}, {clipPath: 'circle(100%)', duration:0.5})
    askCharleeTimeline.fromTo(
      askcharleeReview.lines,
      { 
        y: '-100%',
        opacity: 0
      },
      {
        y: '0',
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
      }
    );
    askCharleeTimeline.fromTo(charleeAvata[0], 
      { y: '-100%',
      opacity: 0}
      , {
        y: '0',
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out'
      })
    askCharleeTimeline.fromTo(askCharleeFeatures[0], {clipPath: 'inset(100%)'}, {clipPath: 'inset(-30%)', duration:0.5})
    const benefitLeft = gsap.utils.toArray('.benefits-left');
    const benefitsRightItems = gsap.utils.toArray('.benefits-rightItem');
    const tl = gsap.timeline({repeat:1, repeatDelay:1, yoyo:true});
    tl.from(benefitLeft[0], {opacity: 0} )
    benefitsRightItems.map(benefitsRightItem => {
      tl.from(benefitsRightItem, {opacity: 0}, "+=0" )
    })
    
    ScrollTrigger.create({
      animation: tl,
      trigger: '.askCharlee-benefits',
      start: "+100px center",
      end: "bottom top",
      markers: false,
      scrub: 1,
    })
  }, {
    scope: askCharleeRes
  })

  return (
    <div className="w-full overflow-hidden bg-[#F9F9F9]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div ref={askCharleeRes} className="askCharlee-page">
        <AskCharleeHero />
        <QueriesSection />
        <ReviewsSection />
        <BenefitsSection />
      </div>
      <FooterBanner />
      <Footer />
    </div> 
  )
}