import {GoogleGenAi} from "@google/genai";


// return client instant

let client = null;
const getClient = ()=>{
    if(client)  return client;
    const key = process.env.GEMINI_API_KEY;
    if(!key) return null;
    client = new GoogleGenAi({ apiKey: key });
    return client; 
};


const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

export const isAIEnabled = () => !!process.env.GEMINI_API_KEY;

export const perseJSON = (text) =>{
    let cleaned = (text || "").trim();
    if(cleaned.startWith("```json")){
        cleaned = cleaned.replace(/```json\n?/g, "").replace(/```\n?$/g, "");
    }
    else if(cleaned.startWith("```")) {
        cleaned = cleaned.replace(/```\n?/g, "");
    }
    return JSON.parse(cleaned.trim());
};

export const SYSTEM_PROMPTS = {
    weekly:
    "You are a warm, encouraging habit coach. Anylyse the uwer's last 7 days of habit data and write a short personalised report (120-180 words)",
    suggestion:
    "You are a helpful habit coach. Based on the user's goals, productive time, and past struggles, suggest exactly 3 ",
    recovery:
    "You are a compassionate habit coach. The user broke a streak. write a 3-days recovery plan tailored to this",
    chat:
    "You are a helpful habit analysis assistant. Answer the user's questions using ONLY the provided habit data as context",

    morning:
    "You are a warm, morinig friend. Write a single short morning message (30-50 words) using the user's actual habit"

}