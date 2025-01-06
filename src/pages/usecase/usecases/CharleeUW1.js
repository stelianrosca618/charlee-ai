import React from 'react';
import { Container, Box, Grid2 } from '@mui/material';
import blogImg from "../../../assets/imgs/news/blog7.png"

export const CharleeUW1 = () => {
    return (
        <Container maxWidth="lg">
          <Box className="w-full relative">
            <Grid2 container className="z-10">
              <Grid2 size={4} className="z-10">
                <img src={blogImg} alt="usecase" className="w-full h-full rounded-b-full" />
              </Grid2>
              <Grid2 size={8} className="text-start z-10 pt-32">
                <div className="w-full bg-[#0099B0] z-10 text-white px-2 py-10">
                  <h4 data-aos="fade-up" className="text-[42px] leading-[54.6px] font-medium uppercase">Use Case</h4>
                  <h6 data-aos="fade-up" className="text-[24px] leading-[32px] font-normal py-5">
                  Leveraging AI Insights from Property & Casualty Claims to Enhance Underwriting Risk Assessment
                  </h6>
                </div>
              </Grid2>
            </Grid2>
            <Grid2 container className="w-full z-0 absolute bottom-0">
              <Grid2 size={2}></Grid2>
              <Grid2 size={10} className="bg-[#0099B0] text-start text-[#0099B0] py-10">
                <h4 className="text-[42px] leading-[54.6px] font-medium uppercase">Use Case</h4>
                <h6 className="text-[24px] leading-[32px] font-normal py-5">
                Leveraging AI Insights from Property & Casualty Claims to Enhance Underwriting Risk Assessment
                </h6>
              </Grid2>
            </Grid2>
          </Box>
          <Box className="w-full">
            <Grid2 container spacing={4}>
              <Grid2 size={6} className="text-start">
                <Box className="w-full py-3">
                  <h3 className="text-[#0099B0] text-[25px] font-bold">Problem</h3>
                  <p>
                  Traditional underwriting risk assessment for property and casualty (P&C) insurance relies heavily on generalized models and historical data. However, this approach often fails to account for nuanced factors such as:
                  </p>
                  <ul className='list-outside list-disc pl-4'>
                    <li>Subtle regional trends in claims frequency and severity.</li>
                    <li>Emerging risks like climate change, fraud patterns, or shifts in economic activity.</li>
                    <li>Variability in building materials, construction standards, or property maintenance that affect risk levels.</li>
                  </ul>
                  <p>These gaps can lead to underpricing, overpricing, or misidentification of high-risk policies, negatively impacting profitability and customer satisfaction.</p>
                </Box>
                <Box className="w-full py-3">
                  <h3 className="text-[#0099B0] text-[25px] font-bold">Solution</h3>
                  <p>
                  Charlee’s Artificial Intelligence (AI) Platform offers a revolutionary approach to underwriting risk assessment by analyzing vast volumes of structured and unstructured claims data. AI identifies patterns, predicts potential risks, and provides a more granular view of factors impacting risk.
                  </p>
                </Box>
                <Box className="w-full py-3">
                  <h3 className="text-[#0099B0] text-[25px] font-bold">Results</h3>
                  <p className="font-bold">Improved Risk Identification</p>
                  <p>
                  Charlee’s risk insights from its deep understanding of the claims severity indicators provides for a great risk management solution.
                  </p>
                  <p className="font-bold">Enhanced Underwriting Precision</p>
                  <p>
                  By incorporating granular insights, underwriters refined pricing models to reflect individual property risks more accurately, leading to an increase in policy profitability.
                  </p>
                  <p className="font-bold">Fraud Detection</p>
                  <p>
                  Charlee Machine learning identified patterns indicating potential fraud in claims data, saving millions in payouts.
                  </p>
                  <p className="font-bold">Proactive Risk Mitigation</p>
                  <p>
                  Offering policyholders incentives for risk-reducing improvements, like impact-resistant windows, reduced claims frequency in high-storm areas.
                  </p>
                </Box>
                
              </Grid2>
              <Grid2 size={6} className="text-start">
                <Box className="w-full py-3">
                  <h3 className="text-[#0099B0] text-[25px] font-bold">How It Works</h3>
                  <p className="font-bold">Claims Data Integration</p>
                  <p>
                  The Charlee platform aggregates claims data, including structured fields (e.g., claim amounts, causes of loss) and unstructured data (e.g., adjuster notes, photos, and third-party reports).
                  </p>
                  <p className="font-bold">Pattern Recognition</p>
                  <p>
                  Charlee identifies trends and anomalies within claims data, such as:
                  </p>
                  <ul className="list-outside list-disc pl-4">
                    <li>High wind-related claims in certain geographic areas.</li>
                    <li>Increased fire-related claims linked to outdated electrical systems.</li>
                  </ul>
                  <p className="font-bold">Risk Scoring</p>
                  <p>The system assigns dynamic risk scores to properties based on claims history and external factors (e.g., weather patterns, crime rates, proximity to fire stations).</p>
                  <p className="font-bold">Actionable Insights</p>
                  <p>Charlee recommends tailored underwriting strategies:</p>
                  <ul className="list-outside list-disc pl-4">
                    <li>Adjusting premiums for properties in high-risk zones.</li>
                    <li>Introducing discounts for proactive risk mitigation measures, such as installing fire alarms or weather-resistant roofing.</li>
                    <li>Identifying fraudulent or high-risk policies early in the underwriting process.</li>
                  </ul>
                </Box>
                <Box className="w-full py-3">
                  <h3 className="text-[#0099B0] text-[25px] font-bold">Why It Matters</h3>
                  <p>Charlee enables P&C insurers to make smarter underwriting decisions by leveraging the wealth of data in claims records. It provides:</p>
                  <ul className="list-outside list-disc pl-4">
                    <li>A deeper understanding of risks at an individual property level.</li>
                    <li>The ability to respond quickly to emerging trends or changing risk profiles.</li>
                    <li>Improved profitability through precise pricing and better risk selection.</li>
                    <li>Enhanced customer satisfaction with personalized pricing and proactive recommendations.</li>
                  </ul>
                </Box>
                <Box className="w-full py-3">
                  <h3 className="text-[#0099B0] text-[25px] font-bold">Get Started Today</h3>
                  <p>
                  Revolutionize your underwriting process with Charlee’s AI-powered insights from P&C claims data. Contact us to learn how Charlee can help you assess risks with precision and grow your business sustainably.
                  </p>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Container>
      );
}