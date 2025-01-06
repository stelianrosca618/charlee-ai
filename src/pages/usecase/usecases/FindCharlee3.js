import React from 'react';
import { Container, Box, Grid2 } from '@mui/material';
import blogImg from "../../../assets/imgs/news/blog7.png"
export const FindCharlee3 = () => {
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
                Flagging Claims That Do Not Align with Local Weather Data
              </h6>
            </div>
          </Grid2>
        </Grid2>
        <Grid2 container className="w-full z-0 absolute bottom-0">
          <Grid2 size={2}></Grid2>
          <Grid2 size={10} className="bg-[#0099B0] text-start text-[#0099B0] py-10">
            <h4 className="text-[42px] leading-[54.6px] font-medium uppercase">Use Case</h4>
            <h6 className="text-[24px] leading-[32px] font-normal py-5">
              Flagging Claims That Do Not Align with Local Weather Data
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
                Insurance providers often encounter claims for property damage allegedly caused by weather events, such as hailstorms, floods, or high winds. However, not all claims are legitimate, and some may involve fraudulent attempts to secure payouts for damages unrelated to any recent weather event. This results in financial losses and delays in processing valid claims.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Solution</h3>
              <p>
                Implement Charlee, an AI-powered fraud detection system that cross-references claim details with local weather data to identify inconsistencies in reported weather-related incidents.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Results</h3>
              <p className="font-bold">Enhanced Fraud Detection</p>
              <p>
                Identifies weather-related fraud with a 90+% accuracy rate, minimizing false positives and negatives.
              </p>
              <p className="font-bold">Cost Savings</p>
              <p>
                Prevents millions in fraudulent payouts annually by denying claims unsupported by weather data.
              </p>
              <p className="font-bold">Improved Customer Experience</p>
              <p>
                Accelerates the processing of legitimate claims, boosting satisfaction among policyholders.
              </p>
              <p className="font-bold">Operational Efficiency</p>
              <p>
                Reduces the workload for fraud investigators by automating weather verification.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Example Scenario</h3>
              <p>
                Claimant Report: A customer in Tampa, FL, files a claim stating their home’s roof was damaged by hail on March 15th.
              </p>
              <p>
                System Analysis: Charlee cross-references the claim with local weather data, which shows no hailstorms occurred in Tampa on or near March 15th.
              </p>
              <p>
                Outcome: Charlee flags the claim for review. Upon investigation, it is discovered that the damage was pre-existing and not weather-related. The fraudulent claim is denied, saving the insurer thousands of dollars.
              </p>
            </Box>
          </Grid2>
          <Grid2 size={6} className="text-start">
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">How It Works</h3>
              <p className="font-bold">Claim Submission</p>
              <p>
                A customer files a claim for property damage, reporting it as caused by a weather event such as hail or a storm. Supporting documentation (photos, videos, incident description) is provided.
              </p>
              <p className="font-bold">Weather Data Integration</p>
              <p>
                Charlee integrates with meteorological databases and APIs, pulling precise, location-specific weather data for the date and time of the reported incident.
              </p>
              <p className="font-bold">Data Analysis</p>
              <p>
                Charlee compares the reported weather conditions in the claim to verified data, analyzing factors such as:
              </p>
              <ul className="list-outside list-disc pl-4">
                <li>Wind speed and direction</li>
                <li>Rainfall or hail presence</li>
                <li>Temperature fluctuations</li>
                <li>Severe weather alerts</li>
              </ul>
              <p className="font-bold">Risk Scoring</p>
              <p>
                Claims are assigned a risk score based on alignment with verified weather data. High-risk claims, such as those reporting storm damage on a clear-weather day, are flagged for further review.
              </p>
              <p className="font-bold">Fraud Alerts</p>
              <p>
                The flagged claim is routed to the fraud investigation team with detailed insights, including discrepancies between reported and actual weather conditions.
              </p>
              <p className="font-bold">Efficient Claim Handling</p>
              <p>
                Low-risk claims are fast-tracked, ensuring legitimate policyholders receive timely settlements.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Why It Matters</h3>
              <p>
                Weather-related claims are a significant source of insurance fraud. By leveraging Charlee and real-time weather data, insurers can:
              </p>
              <ul className="list-outside list-disc pl-4">
                <li>Maintain financial stability by avoiding fraudulent payouts.</li>
                <li>Enhance trust with honest policyholders through fair and timely settlements.</li>
                <li>Optimize resource allocation, focusing human efforts on complex investigations.</li>
              </ul>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Get Started Today</h3>
              <p>
                Protect your business from fraudulent weather-related claims and other fraudulent activities. Contact us to learn how Charlee, our AI-powered platform, can transform your claims process.
              </p>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};