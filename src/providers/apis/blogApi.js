import axios from 'axios';

// const host = '34.74.92.111';
export const backendHost = 'https://charleenode.duckdns.org';

const backendPath = `https://charleenode.duckdns.org/api/`;
// const backendPath = `http://localhost:4000/api/`;

export const getAllActivities = async () => {
    const getActivitiesUrl = `${backendPath}activities/`

    try {
        const response = await axios.get(getActivitiesUrl);
        return response.data;
    } catch (error) {
        console.log('Error Get all articles', error);
        throw error;
    }
}

export const getAllBlogs = async() => {
    const getBlogsUrl = `${backendPath}activities/blogs`
    try {
        const response = await axios.get(getBlogsUrl);
        return response.data;
    } catch (error) {
        console.log('Error Get data: ', error);
        throw error;
    }
}

export const getBlog = async(name) => {
    const getBlogsUrl = `${backendPath}activities/blogs/`+name;
    try {
        const response = await axios.get(getBlogsUrl);
        return response.data;
    } catch (error) {
        console.log('Error Get data: ', error);
        throw error;
    }
}

export const getAllPodcasts = async () => {
    const getPodcastsUrl = `${backendPath}activities/podcasts`
    try {
        const response = await axios.get(getPodcastsUrl);
        return response.data;
    } catch (error) {
        console.log('Error Get data: ', error);
        throw error;
    }
}

export const getAllEvents = async () => {
    const getEventsUrl = `${backendPath}activities/events`
    try {
        const response = await axios.get(getEventsUrl);
        return response.data;
    } catch (error) {
        console.log('Error Get data: ', error);
        throw error;
    }
}

export const getEvent = async (name) => {
    const getEventUrl = `${backendPath}activities/events/`+name;
    try {
        const response = await axios.get(getEventUrl);
        return response.data;
    } catch (error) {
        console.log('Error Get data: ', error);
        throw error;
    }
}

export const getAllNews = async () => {
    const getNewsUrl = `${backendPath}activities/news`
    try {
        const response = await axios.get(getNewsUrl);
        return response.data;
    } catch (error) {
        console.log('Error Get data: ', error);
        throw error;
    }
}