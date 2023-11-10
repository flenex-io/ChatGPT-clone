import { Configuration, OpenAIApi } from "openai";

const apiKey = "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";

const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return res.data.choices[0].text;
}

// import OpenAI from 'openai';

// const openai = new OpenAI({
//     apiKey: '8psZhSNP1kFKNNDonPDQT3BlbkFJyOA7izvCDWIbfAaCxRVL' // This is also the default, can be omitted
//   });

// export async function sendMsgToOpenAI(message) {
//   const res = await openai.createCompletion({
//     model: 'text-davinci-003',
//     prompt: message,
//     temperature: 0.7,
//     max_tokens: 256,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0
//   });
//   return res.data.choices[0].text;
// }
