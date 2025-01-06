import React from 'react';
import { Container, Box, Grid2 } from '@mui/material';
import blogImg from "../../../assets/imgs/news/blog7.png"

export const CharleeUW2 = () => {
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
              Using AI-Driven Claims Insights for Underwriting Management Risk Analysis
              </h6>
            </div>
          </Grid2>
        </Grid2>
        <Grid2 container className="w-full z-0 absolute bottom-0">
          <Grid2 size={2}></Grid2>
          <Grid2 size={10} className="bg-[#0099B0] text-start text-[#0099B0] py-10">
            <h4 className="text-[42px] leading-[54.6px] font-medium uppercase">Use Case</h4>
            <h6 className="text-[24px] leading-[32px] font-normal py-5">
            Using AI-Driven Claims Insights for Underwriting Management Risk Analysis
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
              Insurance companies face challenges in managing their risk portfolios effectively. Underwriting management often relies on manual analysis and outdated models to evaluate risks, which can lead to:
              </p>
              <ul className='list-outside list-disc pl-4'>
                <li>Missed opportunities to identify emerging trends.</li>
                <li>Inefficient allocation of resources toward low-performing segments.</li>
                <li>Increased exposure to high-risk policies.</li>
                <li>Difficulty in forecasting portfolio performance under different scenarios.</li>
              </ul>
              <p>These limitations result in suboptimal profitability and heightened exposure to unforeseen risks.</p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Solution</h3>
              <p>
              Charlee’s Artificial Intelligence (AI) platform provides underwriting management with powerful insights from claims data. By analyzing structured and unstructured claims information, Charlee uncovers hidden patterns, identifies emerging risks, and provides actionable recommendations for portfolio optimization.
              </p>
              <p>
              With Charlee, underwriters gain real-time, data-driven insights to make informed decisions, improve loss ratios, and maintain a balanced portfolio.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Results</h3>
              <p className="font-bold">Improved Profitability</p>
              <p>
              An insurance company reduced its overall loss ratio within a year by adjusting premiums and guidelines based on AI-driven risk assessments.
              </p>
              <p className="font-bold">Enhanced Risk Mitigation</p>
              <p>
              Charlee detected emerging risks, such as increased flood claims in certain regions, allowing underwriting to implement stricter guidelines and mitigate exposure.
              </p>
              <p className="font-bold">Operational Efficiency</p>
              <p>
              Underwriters reduced manual analysis time, focusing instead on strategic decision-making.
              </p>
              <p className="font-bold">Fraud Prevention</p>
              <p>
              AI flagged claims as potentially fraudulent, saving millions in payouts.
              </p>
            </Box>
          </Grid2>
          <Grid2 size={6} className="text-start">
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">How It Works</h3>
              <p className="font-bold">Data Integration</p>
              <p>
              Charlee integrates with existing claims databases, ingesting structured data like payout amounts and loss frequencies, as well as unstructured data like adjuster notes and supporting documents.
              </p>
              <p className="font-bold">Pattern Recognition</p>
              <p>
              Charlee identifies correlations and trends in claims data, such as high-loss regions or demographic patterns associated with specific claim types.
              </p>
              <p className="font-bold">Portfolio Segmentation</p>
              <p>The Charlee platform categorizes policyholders into segments based on risk levels, profitability, and claims activity, helping underwriting management focus on high-value opportunities.</p>
              <p className="font-bold">Actionable Insights</p>
              <p>The Charlee platform provides recommendations, such as adjusting premiums for high-risk areas, diversifying portfolios, or targeting profitable segments for growth.</p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Why It Matters</h3>
              <p>Charlee transforms underwriting management from reactive to proactive. By leveraging insights from claims data, insurers can:</p>
              <ul className="list-outside list-disc pl-4">
                <li>Reduce exposure to high-risk policies.</li>
                <li>Optimize profitability across portfolios.</li>
                <li>Respond quickly to market changes and emerging risks.</li>
                <li>Ensure regulatory compliance with transparent, data-driven decisions.</li>
              </ul>
              <p>
              In an increasingly competitive industry, embracing AI is essential for long-term success.
              </p>
            </Box>
            <Box className="w-full py-3">
              <h3 className="text-[#0099B0] text-[25px] font-bold">Get Started Today</h3>
              <p>
              Unlock the potential of your claims data with our Charlee AI-powered insights. Contact us to learn how we can help your underwriting management team improve risk analysis and optimize portfolio performance.
              </p>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
}