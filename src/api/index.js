import axios from 'axios';

const api = axios.create({
    baseURL: process.env.LOCAL_APP,
    headers: {
        'Content-Type': 'application/json'
    }
  });

export const getBookedMeetingList = () => {
    return api.get(`data.json`);
  };