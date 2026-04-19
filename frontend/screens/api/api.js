import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const signup = (username, email, password) => 
  axios.post(`${API_URL}/auth/signup`, { username, email, password });

export const login = (email, password) => 
  axios.post(`${API_URL}/auth/login`, { email, password });

export const getFeed = (token) => 
  axios.get(`${API_URL}/posts`, { headers: { Authorization: `Bearer ${token}` } });

export const createPost = (token, content_text, content_type) => 
  axios.post(`${API_URL}/posts`, { content_text, content_type }, { headers: { Authorization: `Bearer ${token}` } });

export const checkIn = (token, mood, intent) => 
  axios.post(`${API_URL}/checkin`, { mood, intent }, { headers: { Authorization: `Bearer ${token}` } });

export const getRandomPrompt = (token) =>
  axios.get(`${API_URL}/prompts/random`, { headers: { Authorization: `Bearer ${token}` } });

export const submitReflection = (token, prompt_id, response_text) =>
  axios.post(`${API_URL}/prompts/respond`, { prompt_id, response_text }, { headers: { Authorization: `Bearer ${token}` } });

export const getMyReflections = (token) =>
  axios.get(`${API_URL}/prompts/my-responses`, { headers: { Authorization: `Bearer ${token}` } });
