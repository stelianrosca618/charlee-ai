import React from 'react';
import { Container, Box, Grid2 } from '@mui/material';
import blogImg from "../../../assets/imgs/news/blog7.png"
export const FindCharlee2 = () => {
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
                                Detecting Fraud Rings by Analyzing Connections Between Claimants, Witnesses, and Repair Facilities
                            </h6>
                        </div>
                    </Grid2>
                </Grid2>
                <Grid2 container className="w-full z-0 absolute bottom-0">
                    <Grid2 size={2}></Grid2>
                    <Grid2 size={10} className="bg-[#0099B0] text-start text-[#0099B0] py-10">
                        <h4 className="text-[42px] leading-[54.6px] font-medium uppercase">Use Case</h4>
                        <h6 className="text-[24px] leading-[32px] font-normal py-5">
                            Detecting Fraud Rings by Analyzing Connections Between Claimants, Witnesses, and Repair Facilities
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
                                Fraud rings pose a significant challenge to property and casualty insurers, often operating by coordinating claims through interconnected networks of claimants, witnesses, and repair facilities. These organized schemes can result in substantial financial losses and damage to the insurer's reputation. Identifying these fraud rings manually is resource-intensive and prone to oversight.
                            </p>
                        </Box>
                        <Box className="w-full py-3">
                            <h3 className="text-[#0099B0] text-[25px] font-bold">Solution</h3>
                            <p>
                                Implement Charlee, a network analysis-driven fraud detection platform, that uses advanced algorithms to map relationships and uncover hidden connections between claimants, witnesses, and vendors (e.g. medical professionals, repair facilities, etc) involved in suspicious claims. Also utilize Charlee’s AI capabilities to find entities within the claim for analysis.
                            </p>
                        </Box>
                        <Box className="w-full py-3">
                            <h3 className="text-[#0099B0] text-[25px] font-bold">Results</h3>
                            <p className="font-bold">Enhanced Fraud Detection</p>
                            <p>
                                Identified fraud rings with a 90+% accuracy rate, uncovering complex schemes that manual processes would miss.
                            </p>
                            <p className="font-bold">Cost Savings</p>
                            <p>
                                Prevented fraudulent payouts totaling millions annually by exposing coordinated schemes.
                            </p>
                            <p className="font-bold">Streamlined Investigations</p>
                            <p>
                                Reduced investigation times by 40%, allowing investigators to focus on high-risk networks.
                            </p>
                            <p className="font-bold">Proactive Risk Management</p>
                            <p>
                                Enabled insurers to proactively monitor and mitigate fraud risks before claims are paid out.
                            </p>
                        </Box>
                        <Box className="w-full py-3">
                            <h3 className="text-[#0099B0] text-[25px] font-bold">Example Scenario</h3>
                            <p>
                                Scenario: A claimant files an auto repair claim for damages allegedly caused by a collision. The associated repair facility has handled multiple claims involving the same witness and similar damage descriptions over the past six months.
                            </p>
                            <p>System Analysis: Charlee identifies overlapping patterns:</p>
                            <ul className="list-outside list-disc pl-4">
                                <li>The repair facility has a history of inflated billing.</li>
                                <li>The witness has been involved in five other claims linked to different claimants.</li>
                                <li>Claimants in this network share contact information or have overlapping addresses.</li>
                            </ul>
                            <p>
                                Outcome: Charlee flags this cluster as a potential fraud ring. Upon further investigation, it is revealed that the repair facility and witness are part of an organized scheme coordinating staged accidents. The claims are denied, and legal action is initiated.
                            </p>
                        </Box>
                    </Grid2>
                    <Grid2 size={6} className="text-start">
                        <Box className="w-full py-3">
                            <h3 className="text-[#0099B0] text-[25px] font-bold">How It Works</h3>
                            <p className="font-bold">Claim Submission</p>
                            <p>
                                Claims are submitted, detailing the incident, individuals involved (claimants, witnesses), and associated service providers (repair facilities, contractors).
                            </p>
                            <p className="font-bold">Data Integration</p>
                            <p>
                                Charlee integrates internal claims data with external sources such as public records, social media, and industry databases.
                            </p>
                            <p className="font-bold">Network Mapping</p>
                            <p>Charlee builds a graph-based network, identifying links between claimants, witnesses, and service providers based on:</p>
                            <ul className="list-outside list-disc pl-4">
                                <li>Shared contact information (e.g., phone numbers, addresses)</li>
                                <li>Repeated interactions across multiple claims</li>
                                <li>Patterns of similar damage types or incident locations</li>
                            </ul>
                            <p className="font-bold">Behavioral Pattern Analysis</p>
                            <p>Charlee analyzes behavioral patterns to identify suspicious trends, such as:</p>
                            <ul className="list-outside list-disc pl-4">
                                <li>The same witness appearing in multiple unrelated claims</li>
                                <li>Repair facilities consistently billing higher-than-average amounts</li>
                                <li>Clusters of claims originating from the same geographic area or involving the same individuals</li>
                            </ul>
                            <p className="font-bold">Risk Scoring</p>
                            <p>Each claim is assigned a fraud risk score, with high-risk scores triggering an alert for further investigation. Connections are visualized in an interactive dashboard for investigator review.</p>
                            <p className="font-bold">Fraud Ring Identification</p>
                            <p>Charlee flags clusters of interconnected claims that share overlapping participants or patterns indicative of organized fraud.</p>
                        </Box>
                        <Box className="w-full py-3">
                            <h3 className="text-[#0099B0] text-[25px] font-bold">Why It Matters</h3>
                            <p>Fraud rings are increasingly sophisticated, leveraging coordinated efforts to exploit insurers. By leveraging network analysis and Charlee’s AI-driven insights, insurers can:</p>
                            <ul className="list-outside list-disc pl-4">
                                <li>Safeguard their financial stability by detecting and preventing organized fraud.</li>
                                <li>Enhance the efficiency and effectiveness of their fraud investigation teams.</li>
                                <li>Protect honest policyholders from higher premiums caused by fraudulent activities.</li>
                            </ul>
                        </Box>
                        <Box className="w-full py-3">
                            <h3 className="text-[#0099B0] text-[25px] font-bold">Get Started Today</h3>
                            <p>
                                Ready to uncover hidden fraud networks? Contact us to learn how AI-powered Charlee fraud detection platform can transform your claims process and protect your bottom line.
                            </p>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </Container>
    );
};
