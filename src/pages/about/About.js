import { LastNews } from "../../components/Contents/aboutpage/LastNews"
import { TeamMember } from "../../components/Contents/aboutpage/TeamMember"
import { Withus } from "../../components/Contents/aboutpage/Withus"
import { Footer } from "../../components/footers/Footer"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { AboutHero } from "../../components/heros/AboutHero"

import gsap, {} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
export const About = () => {
  const aboutScope = useRef();
  useGSAP(() => {
    const aboutEyebrow = gsap.utils.toArray('.about-eyebrow');
    const aboutHead = gsap.utils.toArray('.about-header');
    const aboutHandTxt = gsap.utils.toArray('.aboutHand-text');
    const aboutHandImg = gsap.utils.toArray('.aboutHand-image')
    const aboutTimeline = gsap.timeline();
    aboutTimeline.fromTo(aboutEyebrow[0], {clipPath: 'inset(50%)'}, {clipPath: 'inset(0%)', duration: 0.5});
    aboutTimeline.fromTo(aboutHead[0], {text:""}, {duration: 1, text:"We are transforming Insurance<br /> Through AI Innovation"});
    aboutTimeline.fromTo(aboutHandTxt[0], {clipPath: 'inset(0% 0% 100% 0%)'}, {clipPath: 'inset(0% 0% 0% 0%)', duration: 0.7})
    aboutTimeline.fromTo(aboutHandImg[0], {clipPath: 'inset(0% 0% 100% 0%)'}, {clipPath: 'inset(0% 0% 0% 0%)', duration: 0.7})

    ScrollTrigger.create({
      trigger: `.about-teamMembers`,
      start: "top bottom",
      end: "bottom bottom",
      markers: false,
      scrub: 1,
      onEnter: () => {
        const teamMemberSubTitle = gsap.utils.toArray('.teamMember-subTitle');
        const teamMemberTitle = gsap.utils.toArray(".teamMember-Title");
        const memberAvata = gsap.utils.toArray(".member-avata");
        gsap.fromTo(teamMemberSubTitle[0], {opacity: 0, clipPath: 'inset(50%)'}, {opacity: 1, clipPath: 'inset(0%)', duration: 1.5});
        gsap.fromTo(teamMemberTitle[0], {opacity: 0, clipPath: 'inset(50%)'}, {opacity: 1, clipPath: 'inset(0%)', duration: 1.5})
        gsap.fromTo(memberAvata, {opacity: 0, clipPath: 'circle(0%)'}, {opacity: 1, clipPath: 'circle(100%)', duration: 0.7}, "+=0")
      }
    })

    ScrollTrigger.create({
      trigger: `.about-withUs`,
      start: "top bottom",
      end: "bottom bottom",
      markers: true,
      scrub: 1,
      onEnter: () => {
        const withUsCard = gsap.utils.toArray(".about-withUsCard");
        gsap.fromTo(withUsCard[0], {scale: 0}, {scale: 1, duration: 1});
      }
    })
  }, {scope: aboutScope})

  return (
    <div className="w-full overflow-x-hidden">
      <HomeHeader headerColor={'#0D131E'} textColor={'#ffffff'}/>
      <div ref={aboutScope} className="about-page ">
        <AboutHero />
        <TeamMember />
        <Withus />
        <LastNews />
      </div>
      <Footer />
    </div>
  )
}