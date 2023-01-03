import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.INPUT_OPENAI_API_KEY || process.env.OPENAI_API_KEY,

});

const openai = new OpenAIApi(configuration);


const basePromptPrefix = "";
const generateAction = async (req, res) => {

    const basePromptPrefix = 
    `provide an authentic hadith  (from sources: Sahih al-Bukhari, Sahih Muslim)that fits in response to the prompt the user gives. be sure to provide the hadith from the following format - 
    (Bold out each section nicely)
    Specific Reference: 

    Hadith (Original Arabic): 

    Hadith (English Interpretation): 

    (Be sure to discuss the implementation in great detail with specific exammples)
    How to Implement (In Relation to the prompt):`;

  // Run first prompt
  console.log(`API:${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.7,
    max_tokens: 1000,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
