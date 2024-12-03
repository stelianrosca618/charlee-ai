import { Typography } from "@mui/material"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { HomeHero } from "../../components/heros/HomeHero"
import { HomeLeftSection } from "../../components/Contents/homepage/HomeLeftSection"
import { HomeRightSection } from "../../components/Contents/homepage/HomeRightSection"
import seeCharleeDashboard from "../../assets/imgs/Dashboards/seeCharleeDashboard.png";
import inteligenceDashboard from "../../assets/imgs/Dashboards/inteligenceDashboard.png"
import inshitesDashboard from "../../assets/imgs/Dashboards/inshitesDashboard.png";
import flagDashboard from "../../assets/imgs/Dashboards/flagDashboard.png";

import securityCoverIco from "../../assets/imgs/icons/security-cover.png"
import folderCoverIco from "../../assets/imgs/icons/folder-cover.png";
import searchCoverIco from "../../assets/imgs/icons/search-cover.png";
import unionCoverIco from "../../assets/imgs/icons/union-cover.png"
import { Features } from "../../components/Contents/homepage/Features"
import { Parteners } from "../../components/Contents/homepage/Parteners"
import { Testimonials } from "../../components/Contents/homepage/Testimonials"
import { FooterBanner } from "../../components/footers/FooterBanner"
import { Footer } from "../../components/footers/Footer"
// import anime from "animejs";
import gsap, {} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

import { useEffect, useRef } from "react";

const sections = [
  {
    isLeft: true,
    bottomAct: false,
    prodIco: securityCoverIco,
    link: '/product/seecharlee',
    prodItem: '4SeeCharlee',
    title:  'Predict & Prevent',
    detail: `Charlee.ai is an AI-powered predictive analytics solution for the P&C industry, delivering actionable insights on every claim—designed to empower claims professionals with precision and ease.`,
    items: [
      'Predicts attorney involvement, litigation, severity, and reserves.',
      'Flags claims with data-driven insights.',
      'Provides insights via dashboards, reports, APIs, and emails.',
      'Optimizes claims workflows from assignment to settlement.',
      'Reduces cycle time and litigation costs.'
    ],
    itemImage: seeCharleeDashboard
  },
  {
    isLeft: false,
    bottomAct: true,
    prodIco: folderCoverIco,
    link: '/product/docucharlee',
    prodItem: 'DocuCharlee',
    title:  'Document Intelligence',
    detail: `DocuCharlee harnesses the power of AI and natural language processing to effortlessly summarize claim files and documents, enabling insurers to save time and enhance decision-making through streamlined claims processing.`,
    items: [
      'AI-Powered Text Analysis',
      'Our patented NLP technology transforms lengthy claims documents into concise summaries.',
      'Summarizes claim adjuster notes, highlighting critical information for quick status and issue assessment',
      'Extracts key points from complex documents, minimizing manual review for extensive claims.',
      'Charlee understands context in text, detecting subtle cues about claim progression and risks missed by manual reviews.'
    ],
    itemImage: inteligenceDashboard
  },
  {
    isLeft: true,
    bottomAct: false,
    prodIco: searchCoverIco,
    link: '/product/askcharlee',
    prodItem: 'AskCharlee',
    title:  'Instant Insights',
    detail: `Introducing your intelligent AI assistant, delivering instant insights from complex insurance data to streamline decision-making and enhance efficiency.`,
    items: [
      'Charlee quickly interprets insurance queries and retrieves precise insights from various data sources.',
      'Advanced Natural Language Processing interprets user questions for precise responses.',
      'Enables querying of claims data, documents, and insights, yielding results like claims lists, KPIs, graphs, and reports.',
      'Summarizes lengthy documents and claims histories into concise insights for quick identification of key points.',
      'Efficiently searches unstructured data, like claim files and medical records, pulling relevant documents or sections to save time compared to manual searches.'
    ],
    itemImage: inshitesDashboard
  },
  {
    isLeft: false,
    bottomAct: false,
    prodIco: unionCoverIco,
    link: '/product/findcharlee',
    prodItem: 'FindCharlee',
    title:  'Identify & Flag',
    detail: `Charlee.ai uses advanced AI to detect and flag suspicious insurance claims, ensuring smarter, faster fraud detection.`,
    items: [
      'Proactively spot fraud risks with predictive AI models.',
      'Detect unusual claimant behavior and flag inconsistencies instantly.',
      'Get instant alerts on suspicious claims for swift action.',
      'Clear explanations for flagged claims, empowering confident decisions.',
      'Seamlessly integrates to enhance fraud detection without disruption.'
    ],
    itemImage: flagDashboard
  },
]
gsap.registerPlugin(useGSAP, ScrollTrigger);
export const Home = () => {

  useGSAP(() => {
    const charleeBotObj = gsap.utils.toArray(".charleeBot")
    const headerTitle = gsap.utils.toArray(".homeHero-title")
    const headerDetail = gsap.utils.toArray(".homeHero-detail")
    const homeProductTitle =gsap.utils.toArray(".home-productTitle")
    const homeProdCards = gsap.utils.toArray('.homeProd-card');
    const tlProcess = gsap.timeline();
    console.log(charleeBotObj)
    tlProcess.fromTo(charleeBotObj[0], {translateX: 5000}, {translateX: 0}, "+=0.1");
    tlProcess.fromTo(headerTitle[0], {translateY: -1000}, {translateY: 0}, "+=0.1");
    tlProcess.fromTo(headerDetail[0], {translateY: 1000}, {translateY: 0}, "+=0.1");
    tlProcess.fromTo(homeProductTitle[0], {clipPath: `inset(0% 100% 0% 0%)`}, {clipPath: `inset(0% 0% 0% 0%)`}, "+=0.1");
    homeProdCards.map(cardItem => {
      tlProcess.fromTo(cardItem, {clipPath: `inset(0% 0% 100% 0%)`}, {clipPath: `inset(0% 0% 0% 0%)`}, "+=0");
    })

    // const items = gsap.utils.toArray(".numbCount");
    // const numberAnim = gsap.timeline();
    // numberAnim.from(items[0], {textContent: 1, duration: 2, snap: { textContent: 1 },
    //   stagger: {
    //     each: 1.0,
    //     onUpdate: function() {
    //       this.targets()[0].innerHTML = this.targets()[0].textContent;
    //     },
    //   }}, "+0");

      ScrollTrigger.create({
        trigger: `.numberCounter`,
        start: "+100px bottom",
        end: "bottom center",
        markers: false,
        scrub: 1,
        onEnter: () => {
          
          const items = gsap.utils.toArray(".numbCount");
          const detailItems = gsap.utils.toArray(".countDetail")
          console.log('Checking Trigger Enter', items)
          
          items.map(item => {
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
          gsap.fromTo(detailItems, {clipPath: `inset(0% 0% 100% 0%)`}, {clipPath: `inset(0% 0% 0% 0%)`, duration: 1.5});
        }
      })
  }, )


    return (
      <div className="w-full overflow-x-hidden">
        <HomeHeader headerColor={'#021744'} textColor={'#ffffff'}/>
        <div className="home-page ">
          <HomeHero />
          {sections.map((sectionItem, key) => (
            <div key={key}>
              {sectionItem.isLeft? <HomeLeftSection detailObject={sectionItem} /> : <HomeRightSection detailObject={sectionItem}/>}
            </div>
          ))}
          <Features />
          <Parteners />
          <Testimonials />
        </div>
        <FooterBanner />
        <Footer />
      </div>
    )
}