import React from 'react';
import { Container, Box, Grid2 } from '@mui/material';
import blogImg from "../../../assets/imgs/news/blog7.png"
export const AskCharleeClamInsight3 = () => {
  return (
    <Container maxWidth="lg">
      <Box className="w-full relative">
        <Grid2 container className="z-10">
          <Grid2 size={4} className="z-10">
            <img src={blogImg} alt="usecase" className="w-full h-full rounded-b-full" />
          </Grid2>
          <Grid2 size={8} className="text-start z-10 pt-32">
            <div className="w-full bg-[#0099B0] z-10 text-white px-2 py-10">
              <h4 data-aos="fade-up" className="text-[42px] leading-[54.6px] font-medium uppercase">
                Use Case
              </h4>
              <h6 data-aos="fade-up" className="text-[24px] leading-[32px] font-normal py-5">
                AI for Post-Claim Analysis to Drive Underwriting Insights and New Product Opportunities
              </h6>
            </div>
          </Grid2>
        </Grid2>
        <Grid2 container className="w-full z-0 absolute bottom-0">
          <Grid2 size={2}></Grid2>
          <Grid2 size={10} className="bg-[#0099B0] text-start text-[#0099B0] py-10">
            <h4 className="text-[42px] leading-[54.6px] font-medium uppercase">Use Case</h4>
            <h6 className="text-[24px] leading-[32px] font-normal py-5">
              AI for Post-Claim Analysis to Drive Underwriting Insights and New Product Opportunities
            </h6>
          </Grid2>
        </Grid2>
      </Box>
      <Box className="w-full">
        <Grid2 container spacing={4}>
          <Grid2 size={6} className="text-start">
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Overview</h3>
              <p>
                Post-claim analysis involves reviewing historical claims data to identify patterns, trends, and insights that can improve underwriting processes and inspire the creation of new insurance products. Charlee can analyze large volumes of claims data in real-time, uncovering actionable insights that human analysts might miss.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Example Scenario</h3>
              <p>
                An insurer notices a surge in claims related to extreme weather events. AI identifies that many claims involve outdated roofing in high-risk areas. The insights lead to:
              </p>
              <ul className="list-outside list-disc pl-4">
                <li><b>Underwriting Improvement</b>: Policies in high-risk regions include mandatory roof inspections or premium discounts for roof upgrades.</li>
                <li><b>New Product Opportunity</b>: Launching an add-on policy covering roof reinforcement costs before extreme weather seasons.</li>
              </ul>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Business Impact</h3>
              <ul className="list-outside list-disc pl-4">
                <li><b>Improved Risk Management</b>: Charlee’s AI-driven insights enhance underwriting accuracy, reducing claim payouts for preventable risks.</li>
                <li><b>Enhanced Customer Satisfaction</b>: Tailored products and proactive risk management improve customer trust and retention.</li>
                <li><b>Increased Revenue</b>: New insurance products target unmet needs, attracting new policyholders.</li>
              </ul>
            </Box>
          </Grid2>
          <Grid2 size={6} className="text-start">
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">How AI is Utilized</h3>
              <p>
                <b>Data Aggregation and Cleansing</b> Charlee aggregates and cleans claims data from multiple sources, including policy details, customer demographics, repair invoices, images/videos of damage, and adjuster notes. Natural Language Processing (NLP) ensures unstructured data, like adjuster notes or customer feedback, is analyzed effectively.
              </p>
              <p>
                <b>Pattern Recognition and Trend Analysis</b> Machine learning models analyze historical claims to detect recurring patterns, such as:
              </p>
              <ul className="list-outside list-disc pl-4">
                <li>High claim frequency in specific geographies or industries.</li>
                <li>Certain policy features or coverages that lead to higher-than-average losses.</li>
                <li>Customer behaviors or attributes (e.g., age, occupation, property type) associated with increased risk.</li>
              </ul>
              <p>
                <b>Root Cause Identification</b> Charlee identifies root causes behind certain types of claims, such as:
              </p>
              <ul className="list-outside list-disc pl-4">
                <li>Frequent flooding in specific areas due to inadequate infrastructure.</li>
                <li>Higher theft rates in properties with outdated security systems.</li>
                <li>Recurring auto claims from vehicles with specific manufacturing defects.</li>
              </ul>
              <p>
                <b>Predictive Insights for Underwriting</b> Based on identified patterns, Charlee recommends underwriting adjustments, such as:
              </p>
              <ul className="list-outside list-disc pl-4">
                <li>Adjusting premiums for high-risk profiles or locations.</li>
                <li>Modifying coverage limits for commonly claimed incidents.</li>
                <li>Excluding risky behaviors or conditions from standard policies.</li>
              </ul>
              <p>
                <b>New Product Development</b> Charlee uncovers unmet customer needs and gaps in coverage by analyzing claim trends. For instance:
              </p>
              <ul className="list-outside list-disc pl-4">
                <li>If data shows a spike in water damage claims from smart home devices, insurers could create policies specifically covering smart device failures.</li>
                <li>Charlee might identify a need for micro-insurance products tailored to specific risks, such as short-term natural disaster coverage for renters.</li>
              </ul>
              <p>
                <b>Feedback Loop for Continuous Improvement</b> Charlee creates a feedback loop by integrating claims data back into underwriting models, ensuring they remain dynamic and adapt to emerging risks.
              </p>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};