import React from 'react';
import { Container, Box, Grid2 } from '@mui/material';
import blogImg from "../../../assets/imgs/news/blog7.png"
export const AskCharleeClamInsight4 = () => {
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
                                AI-Assisted Subrogation in Property and Casualty Insurance
                            </h6>
                        </div>
                    </Grid2>
                </Grid2>
                <Grid2 container className="w-full z-0 absolute bottom-0">
                    <Grid2 size={2}></Grid2>
                    <Grid2 size={10} className="bg-[#0099B0] text-start text-[#0099B0] py-10">
                        <h4 className="text-[42px] leading-[54.6px] font-medium uppercase">Use Case</h4>
                        <h6 className="text-[24px] leading-[32px] font-normal py-5">
                            AI-Assisted Subrogation in Property and Casualty Insurance
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
                                Subrogation in property and casualty (P&C) insurance involves recovering claim payouts from responsible third parties. Traditional subrogation processes are often labor-intensive, requiring significant time and expertise to identify opportunities, assess liability, and pursue recoveries. Charlee’s Artificial Intelligence (AI) capabilities streamline this process, improving efficiency, accuracy, and recovery rates.
                            </p>
                        </Box>
                        <Box className="w-full py-3">
                            <h3 className="text-[#0099B0] text-[25px] font-bold">Example Scenario</h3>
                            <p>
                                An insurance company handles a claim involving water damage caused by a faulty plumbing fixture. Charlee analyzes the claim data and determines:
                            </p>
                            <ul className="list-outside list-disc pl-4">
                                <li>The fixture was under warranty and had a known defect.</li>
                                <li>The manufacturer was responsible for similar claims in the past. AI identifies subrogation potential, compiles evidence, and automatically notifies the manufacturer’s insurer. This leads to a quick recovery of the payout.</li>
                            </ul>
                        </Box>
                        <Box className="w-full py-3">
                            <h3 className="text-[#0099B0] text-[25px] font-bold">Business Impact</h3>
                            <ul className="list-outside list-disc pl-4">
                                <li><b>Increased Recovery Rates</b>: Charlee improves identification and prioritization of subrogation opportunities, ensuring fewer cases are missed.</li>
                                <li><b>Reduced Costs</b>: Automating parts of the subrogation process minimizes administrative expenses.</li>
                                <li><b>Faster Resolution</b>: Charlee accelerates the identification, assessment, and communication processes, reducing the time to recover funds.</li>
                                <li><b>Enhanced Resource Allocation</b>: Adjusters and legal teams focus on high-value cases, improving overall efficiency.</li>
                            </ul>
                        </Box>
                    </Grid2>
                    <Grid2 size={6} className="text-start">
                        <Box className="w-full py-3">
                            <h3 className="text-[#0099B0] text-[25px] font-bold">How AI is Utilized</h3>
                            <p>
                                <b>Claims Data Analysis</b> Charlee analyzes historical and ongoing claims data to identify cases with subrogation potential. Machine learning models evaluate key indicators, such as:
                            </p>
                            <ul className="list-outside list-disc pl-4">
                                <li>The presence of a third party involved in the claim (e.g., another driver, contractor, or manufacturer).</li>
                                <li>Claim descriptions, adjuster notes, and police reports.</li>
                                <li>Historical patterns of similar cases that resulted in successful subrogation.</li>
                            </ul>
                            <p>
                                <b>Liability Assessment</b> Charlee assesses liability by analyzing data points, such as:
                            </p>
                            <ul className="list-outside list-disc pl-4">
                                <li>Incident details (e.g., time, location, and conditions).</li>
                                <li>Applicable laws or regulations related to the claim.</li>
                                <li>Expert reports or documentation from adjusters and investigators.</li>
                                <li>NLP algorithms extract relevant information from unstructured data (e.g., legal documents, adjuster notes) to build a liability profile for each case.</li>
                            </ul>
                            <p>
                                <b>Automated Opportunity Prioritization</b> Charlee ranks claims based on subrogation potential, prioritizing those with the highest likelihood of recovery and financial impact. This ensures that adjusters focus their efforts on the most promising cases.
                            </p>
                            <p>
                                <b>Third-Party Identification</b> Charlee integrates with external databases to identify third parties potentially responsible for the loss. For example:
                            </p>
                            <ul className="list-outside list-disc pl-4">
                                <li>In auto claims, Charlee might identify a manufacturer defect or another driver's involvement.</li>
                                <li>In property claims, Charlee could pinpoint contractors, builders, or product manufacturers liable for the damage.</li>
                            </ul>
                            <p>
                                <b>Automated Communication and Negotiation</b> Charlee can automate initial communication with third parties or their insurers. Other tools like chatbots and automated email generators provide clear, data-backed claims for subrogation, expediting negotiations.
                            </p>
                            <p>
                                <b>Litigation Support</b> If subrogation leads to legal action, through integrations, Charlee assists by:
                            </p>
                            <ul className="list-outside list-disc pl-4">
                                <li>Organizing evidence for legal teams.</li>
                                <li>Highlighting key points of liability from historical claims.</li>
                                <li>Simulating potential outcomes based on similar cases.</li>
                            </ul>
                            <p>
                                <b>Continuous Learning</b> Charlee continuously refines models by learning from successful and unsuccessful subrogation attempts. This improves the ability to identify opportunities and assess liability over time.
                            </p>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </Container>
    );
};