import React from 'react';
import { Container, Box, Grid2 } from '@mui/material';
import blogImg from "../../../assets/imgs/news/blog7.png"
export const AskCharleeClamInsight2 = () => {
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
                Utilizing Artificial Intelligence to Summarize Claims and Generate Executive and Detailed Summaries in Property and Casualty Insurance
              </h6>
            </div>
          </Grid2>
        </Grid2>
        <Grid2 container className="w-full z-0 absolute bottom-0">
          <Grid2 size={2}></Grid2>
          <Grid2 size={10} className="bg-[#0099B0] text-start text-[#0099B0] py-10">
            <h4 className="text-[42px] leading-[54.6px] font-medium uppercase">Use Case</h4>
            <h6 className="text-[24px] leading-[32px] font-normal py-5">
              Utilizing Artificial Intelligence to Summarize Claims and Generate Executive and Detailed Summaries in Property and Casualty Insurance
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
                Property and casualty insurance claims involve large volumes of data, including adjuster notes, supporting documents, reports, witness statements, and communications. Manually reviewing and summarizing these materials is time-consuming and can lead to inconsistencies or overlooked details. Insurers need an automated solution to efficiently synthesize this information into concise summaries for different audiences.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Solution</h3>
              <p>
                Implement the Charlee AI-powered platform to analyze and summarize entire claims, producing both an executive summary for high-level stakeholders and a detailed summary for claims adjusters or legal teams. This solution streamlines claim management, improves decision-making, and enhances operational efficiency.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Results</h3>
              <p className="font-bold">Improved Efficiency</p>
              <p>
                Reduces the time spent manually reviewing and summarizing claims by up to 70%.
              </p>
              <p className="font-bold">Enhanced Accuracy</p>
              <p>
                Ensures comprehensive and consistent summaries, reducing the risk of missed details.
              </p>
              <p className="font-bold">Streamlined Communication</p>
              <p>
                Provides stakeholders with tailored summaries that align with their specific needs.
              </p>
              <p className="font-bold">Proactive Risk Management</p>
              <p>
                Highlights critical issues early, enabling timely interventions.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Example Scenario</h3>
              <p>
                Claim Details: A business owner files a claim for fire damage to a warehouse. Supporting materials include incident reports, repair estimates, photos, and communications with contractors.
              </p>
              <p>System Analysis: Charlee:</p>
              <ul className="list-outside list-disc pl-4">
                <li>Extracts key information: Incident date (2024-12-10), estimated loss ($500,000), policy coverage (fire and business interruption).</li>
                <li>
                  <p>Generates:</p>
                  <ul className="list-outside list-disc pl-4">
                    <li>
                      <b>Executive Summary</b>: "Fire damage claim for warehouse at 456 Market Street. Estimated loss: $500,000. Coverage confirmed. Claim under review for settlement."
                    </li>
                    <li>
                      <b>Detailed Summary</b>: Includes timelines, repair estimates, adjuster notes on structural damage, and contractor communications.
                    </li>
                  </ul>
                </li>
                <li>Highlights: Identifies a delay in contractor response and missing documentation for lost inventory.</li>
              </ul>
              <p>
                Outcome: The Charlee summaries provide clarity for executives and actionable details for adjusters, leading to a faster and more accurate resolution.
              </p>
            </Box>
          </Grid2>
          <Grid2 size={6} className="text-start">
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">How It Works</h3>
              <p className="font-bold">Data Ingestion</p>
              <p>
                Charlee integrates with claims management systems to ingest:
              </p>
              <ul className="list-outside list-disc pl-4">
                <li>Adjuster notes</li>
                <li>Incident and repair reports</li>
                <li>Supporting documents (e.g., photos, invoices, police reports)</li>
                <li>Witness statements</li>
                <li>Email and communication logs</li>
              </ul>
              <p className="font-bold">Text and Entity Analysis</p>
              <p>
                Natural Language Processing (NLP) extracts key entities and data points such as
              </p>
              <ul className="list-outside list-disc pl-4">
                <li>Claimant details</li>
                <li>Incident date and location</li>
                <li>Damages and injuries</li>
                <li>Policy coverages and exclusions</li>
              </ul>
              <p className="font-bold">Summarization</p>
              <p>Charlee generates:</p>
              <ul className="list-outside list-disc pl-4">
                <li><b>Executive Summary</b>: High-level overview, including key facts, settlement amount, and claim status.</li>
                <li><b>Detailed Summary</b>: In-depth breakdown of events, findings, and supporting evidence.</li>
              </ul>
              <p className="font-bold">Insights and Highlights</p>
              <p>Charlee identifies:</p>
              <ul className="list-outside list-disc pl-4">
                <li>Critical issues (e.g., potential fraud indicators, coverage disputes)</li>
                <li>Key milestones and delays</li>
                <li>Missing or contradictory information</li>
              </ul>
              <p className="font-bold">Formatting and Customization</p>
              <p>Summaries are formatted for easy consumption, with options to:</p>
              <ul className="list-outside list-disc pl-4">
                <li>Tailor reports for executives, adjusters, or legal teams</li>
                <li>Include visual elements such as timelines or charts</li>
              </ul>
              <p className="font-bold">Integration with Workflow</p>
              <p>Summaries are automatically added to the claims management system, triggering next steps or review processes.</p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Why It Matters</h3>
              <p>Charlee’s AI-driven claim summarization enables insurers to:</p>
              <ul className="list-outside list-disc pl-4">
                <li>Save time and reduce manual effort in claims review.</li>
                <li>Improve decision-making with clear and actionable summaries.</li>
                <li>Enhance collaboration among teams with consistent, tailored information.</li>
                <li>Deliver better service to policyholders through faster resolutions.</li>
              </ul>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Get Started Today</h3>
              <p>
                Transform your claims management process with Charlee’s AI-powered summarization tools. Contact us to learn how our solutions can optimize your workflows, reduce costs and improve outcomes.
              </p>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};