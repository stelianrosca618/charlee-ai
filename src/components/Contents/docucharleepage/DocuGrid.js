import { Box, Container, Grid2 } from "@mui/material"
import aiFile from "../../../assets/imgs/fileIcons/ai_file.png"
import brainFile from "../../../assets/imgs/fileIcons/brain_file.png"
import chatFile from "../../../assets/imgs/fileIcons/chat_file.png"
import checkFile from "../../../assets/imgs/fileIcons/check_file.png"
import doneFile from "../../../assets/imgs/fileIcons/done_file.png"
import folderFile from "../../../assets/imgs/fileIcons/folder_file.png"
import keyFile from "../../../assets/imgs/fileIcons/key_file.png"
import starFile from "../../../assets/imgs/fileIcons/star_file.png"

const gridItems = [
  {
    icon: aiFile,
    title: 'AI-Powered Text Analysis',
    detail: 'DocuCharlee uses cutting-edge Natural Language Processing (NLP) to turn lengthy claim documents into clear, concise summaries, pulling out the key details that matter most.',
  },
  {
    icon: folderFile,
    title: 'Automated Summarization of Claim Notes',
    detail: `DocuCharlee highlights essential details from adjuster notes—like injury info, damage assessments, and claim updates—so teams can quickly understand a claim's status without digging through long records.`
  },
  {
    icon: checkFile,
    title: 'Document Summarization',
    detail: `DocuCharlee pinpoints key sections in complex documents—like medical reports and legal files—highlighting crucial details so you don’t have to comb through every page.`
  },
  {
    icon: starFile,
    title: 'Customizable Summaries',
    detail: `DocuCharlee lets you customize summaries to focus on what matters most—like financial impact, litigation risk, or severity—ensuring you get the insights you need.`
  },
  {
    icon: brainFile,
    title: 'Contextual Understanding',
    detail: 'DocuCharlee goes beyond keywords, understanding context and connections in text to catch subtle clues about claim progress, risks, or missing info that manual reviews might miss.'
  },
  {
    icon: keyFile,
    title: 'Actionable Insights',
    detail: `DocuCharlee summarize documents but I also offers actionable insights, like spotting potential litigation risks or recommending further investigation based on claim patterns.`
  },
  {
    icon: chatFile,
    title: 'Real-Time Summaries',
    detail: `DocuCharlee processes documents in real time, giving claims adjusters instant summaries as new information comes in, speeding up decision-making and response times.`
  },
  {
    icon: doneFile,
    title: 'Seamless Integration',
    detail: `DocuCharlee seamlessly integrates with your existing claims management systems, allowing adjusters to access summaries right within their workflow—no platform switching or manual uploads needed!`
  }
]

export const DocuGrid = () => {
  return (
    <Box className="docuGrid w-full">
      <Container maxWidth="lg">
        <Box className="w-full">
          <Grid2 container spacing={2}>
            {gridItems.map((itemData, key) => (
              <Grid2 key={key} size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} alignItems={'flex-start'} className="docuGrid-card bg-white rounded-2xl shadow-xl text-start p-7">
                <img src={itemData.icon} alt="file-icon" className="h-[52px]" />
                <Box className="w-full pt-6">
                  <h5 className="text-[29px] leading-[40px] font-medium">
                    {itemData.title}
                  </h5>
                  <p className="text-[14px] leading-[26px] mt-4">
                    {itemData.detail}
                  </p>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Container>
    </Box>
  )
}