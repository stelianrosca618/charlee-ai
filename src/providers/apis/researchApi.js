import axios from 'axios';
// const host = '72.167.46.56';
const host = '34.74.92.111';
// const host = 'localhost';

const backendPath = `https://charleenode.duckdns.org/api/`;


export const getArticles = async (searchOptions) => {
  const getArticleUrls = `${backendPath}charlee-accolades`;
  try {
    const response = await axios.get(getArticleUrls, {
      params: searchOptions, // Pass searchOptions as query parameters
    });
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error; // Re-throw the error for further handling
  }
};