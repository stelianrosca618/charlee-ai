import { Container } from "@mui/material"
import { Footer } from "../../components/footers/Footer"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { Velement } from "./velement/Velement"

const videolinkArr = [
	{
		title: 'Overview',
		videolink: '/one-page/CharleeAI-Overview-2024.mp4',
		detail: ''
	},
	{
		title: 'Product',
		videolink: '/one-page/Charlee_ai-Product-overview-2024.mp4',
		detail: ''
	},
	{
		title: 'DocuCharlee',
		videolink: '/one-page/DocuCharlee-Intro-2024.mp4',
		detail: ''
	},
	{
		title: 'User',
		videolink: '/one-page/Charlee_ai-User-Roles.mp4',
		detail: ''
	},
	{
		title: 'POC',
		videolink: '/one-page/Charlee_POC-Overview-2024.mp4',
		detail: ''
	},
	{
		title: 'Overview DEMO',
		videolink: '/one-page/Charlee-AI-Overview-Demo.mp4',
		detail: ''
	}
]
export const VideoPages = () => {
  return (
		<div className="w-full overflow-x-hidden">
			<HomeHeader headerColor={'#021744'} textColor={'#ffffff'}/>
			<div className="home-page bg-[#4CFFE9] pt-20">
				{
					videolinkArr.map((video, index) => (
						<div className="w-full py-6" key={index}>	
							<Container maxWidth="lg" className="h-full">
								<div className="flex flex-col items-center justify-center">
									<h2 className="text-[#021744] text-[36px] md:text-[65px] leading-[39.6px] md:leading-[71.5px] font-medium my-6">
										{video.title}
									</h2>
									<Velement videolink={video.videolink}/>
									{/* <p className="text-lg text-gray-300 text-center my-6">
										Introducing Doc you Charlie. All you have to do is upload the documents that you would like Charlie to process. Once uploaded, Charlie begins an extensive review of the documents using its pre-trained models, which was trained on documents from over 55 million claims. Charlie presents the summarized results to the user. The results are summarized and put into a format that is easy to read. The user finds great information from the summary. The summarized document provides insights and topics that are relevant and helpful. 
									</p> */}
								</div>
							</Container>
						</div>
					))
				}
				
			</div>
			<Footer />
		</div>
	)
}