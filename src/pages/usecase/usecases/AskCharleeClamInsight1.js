import React from 'react';
import { Container, Box, Grid2 } from '@mui/material';
import blogImg from "../../../assets/imgs/news/blog7.png"
export const AskCharleeClamInsight1 = () => {
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
                Utilizing Artificial Intelligence, NLP, and Machine Learning to Generate a Chronology of Critical Topics, Insights, and Alerts for Property and Casualty Claims
              </h6>
            </div>
          </Grid2>
        </Grid2>
        <Grid2 container className="w-full z-0 absolute bottom-0">
          <Grid2 size={2}></Grid2>
          <Grid2 size={10} className="bg-[#0099B0] text-start text-[#0099B0] py-10">
            <h4 className="text-[42px] leading-[54.6px] font-medium uppercase">Use Case</h4>
            <h6 className="text-[24px] leading-[32px] font-normal py-5">
              Utilizing Artificial Intelligence, NLP, and Machine Learning to Generate a Chronology of Critical Topics, Insights, and Alerts for Property and Casualty Claims
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
                Property and casualty claims often involve complex timelines, extensive documentation, and numerous touchpoints. Claims handlers must piece together a clear chronology of events to ensure accurate assessments and decisions. However, manually reviewing and organizing these details is time-consuming and prone to oversight. Insurers use the AI-based Charlee platform to efficiently extract and organize key information while identifying actionable insights and alerts.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Solution</h3>
              <p>
                Leverage Charlee with Natural Language Processing (NLP) and Machine Learning (ML) capabilities to analyze claims data, generate a detailed chronology of critical topics, and provide actionable insights and alerts. This solution enhances claim processing efficiency, accuracy, and decision-making.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Results</h3>
              <p className="font-bold">Enhanced Efficiency</p>
              <p>
                Reduces the time spent manually reviewing and organizing claims data by up to 70%.
              </p>
              <p className="font-bold">Improved Accuracy</p>
              <p>
                Ensures all critical details are captured and organized in a clear timeline.
              </p>
              <p className="font-bold">Proactive Risk Management</p>
              <p>
                Alerts handlers to potential issues early, mitigating risks of fraud or disputes.
              </p>
              <p className="font-bold">Better Decision-Making</p>
              <p>
                Provides actionable insights and recommendations, enabling faster and more informed resolutions.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Example Scenario</h3>
              <p>
                Claimant Report: A homeowner files a claim for water damage caused by a burst pipe. Supporting documentation includes photos, repair estimates, and communication records.
              </p>
              <p>Charlee’s System Analysis:</p>
              <ul className="list-outside list-disc pl-4">
                <li>Extracts key details: Incident date (2024-12-15), location (123 Elm Street), estimated repair cost ($10,000).</li>
                <li>Generates a timeline: FNOL submitted on 2024-12-16, adjuster assigned on 2024-12-17, inspection completed on 2024-12-20.</li>
                <li>Highlights discrepancies: Witness statement mentions the damage occurred on 2024-12-14, differing from FNOL.</li>
                <li>Alerts: Flags a missed repair contractor deadline for 2024-12-25 and recommends follow-up action.</li>
              </ul>
              <p>
                Outcome: The adjuster uses the Charlee AI-generated timeline and insights to address discrepancies, follow up with the contractor, and resolve the claim promptly.
              </p>
            </Box>
          </Grid2>
          <Grid2 size={6} className="text-start">
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">How It Works</h3>
              <p className="font-bold">Data Ingestion</p>
              <p>
                Charlee ingests structured and unstructured data from multiple sources, including:
              </p>
              <ul className="list-outside list-disc pl-4">
                <li>FNOL (First Notice of Loss) forms</li>
                <li>Witness statements</li>
                <li>Police reports</li>
                <li>Repair estimates</li>
                <li>Medical records</li>
                <li>Email communications</li>
              </ul>
              <p className="font-bold">Text and Entity Analysis</p>
              <p>
                NLP analyzes the data to extract
              </p>
              <ul className="list-outside list-disc pl-4">
                <li>Key entities such as names, dates, locations, damages, and injuries</li>
                <li>Important events and actions (e.g., claim filing, repair progress, settlement negotiations)</li>
                <li>Topics related to policy coverage, disputes, and liabilities</li>
              </ul>
              <p className="font-bold">Chronology Generation</p>
              <p>The system organizes extracted information into a chronological timeline, including</p>
              <ul className="list-outside list-disc pl-4">
                <li>Incident date and time</li>
                <li>Sequence of communications and actions</li>
                <li>Key milestones, such as inspections, approvals, and payments</li>
              </ul>
              <p className="font-bold">Insights Extraction</p>
              <p>Charlee identifies actionable insights, such as</p>
              <ul className="list-outside list-disc pl-4">
                <li>Potential policy violations or coverage gaps</li>
                <li>Patterns indicating fraud or escalation risk</li>
                <li>Discrepancies in reported events</li>
              </ul>
              <p className="font-bold">Alerts and Recommendations</p>
              <p>Charlee generates alerts for critical issues, including</p>
              <ul className="list-outside list-disc pl-4">
                <li>Missed deadlines or delays in processing </li>
                <li>Contradictions between statements or reports</li>
                <li>High-risk indicators, such as exaggerated damages or injuries</li>
              </ul>
              <p className="font-bold">Interactive Dashboard</p>
              <p>Claims handlers access an intuitive dashboard displaying</p>
              <ul className="list-outside list-disc pl-4">
                <li>A chronological timeline of events </li>
                <li>Summarized insights and flagged issues</li>
                <li>Recommendations for next steps or investigations</li>
              </ul>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Why It Matters</h3>
              <p>Charlee’s AI-powered chronology generation and insights enable insurers to:</p>
              <ul className="list-outside list-disc pl-4">
                <li>Streamline claims processing by automating data review and organization.</li>
                <li>Reduce errors and inconsistencies in claims handling.</li>
                <li>Proactively address potential risks and improve claim outcomes.</li>
                <li>Enhance customer satisfaction through timely and accurate resolutions.</li>
              </ul>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Get Started Today</h3>
              <p>
                Revolutionize your claims management process with the AI-driven Charlee platform for generating chronologies, insights, and alerts. Contact us to learn how our solutions can optimize your operations, reduce costs and improve outcomes.
              </p>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};