import axios from 'axios';
// const host = '72.167.46.56';
const host = '147.93.95.131';
// const host = 'localhost';

const backendPath = `http://${host}:4000/api/`;


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