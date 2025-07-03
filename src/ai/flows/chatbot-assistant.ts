'use server';

/**
 * @fileOverview An AI-powered chatbot assistant for booking services.
 *
 * - chatbotAssistantForBooking - A function that handles the chatbot assistant process.
 * - ChatbotAssistantForBookingInput - The input type for the chatbotAssistantForBooking function.
 * - ChatbotAssistantForBookingOutput - The return type for the chatbotAssistantForBooking function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotAssistantForBookingInputSchema = z.object({
  language: z.enum(['Hindi', 'Marathi', 'English']).describe('The preferred language of the user.'),
  query: z.string().describe('The user query or voice input for booking a service.'),
});
export type ChatbotAssistantForBookingInput = z.infer<typeof ChatbotAssistantForBookingInputSchema>;

const ChatbotAssistantForBookingOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type ChatbotAssistantForBookingOutput = z.infer<typeof ChatbotAssistantForBookingOutputSchema>;

export async function chatbotAssistantForBooking(input: ChatbotAssistantForBookingInput): Promise<ChatbotAssistantForBookingOutput> {
  return chatbotAssistantForBookingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotAssistantForBookingPrompt',
  input: {schema: ChatbotAssistantForBookingInputSchema},
  output: {schema: ChatbotAssistantForBookingOutputSchema},
  prompt: `You are a multilingual chatbot assistant designed to help users book services in their preferred language ({{{language}}}).

  Your goal is to understand the user's request and provide a clear and concise response to help them book the service they need.

  User Query: {{{query}}}

  Instructions:
  1. Acknowledge the user's language.
  2. Understand what service they're trying to book based on the user query.
  3. Ask clarifying questions if the booking request is ambiguous.
  4. If the booking request is well-defined, summarize the request and prompt the user to confirm.
  5. Respond in the user's language.
  `,
});

const chatbotAssistantForBookingFlow = ai.defineFlow(
  {
    name: 'chatbotAssistantForBookingFlow',
    inputSchema: ChatbotAssistantForBookingInputSchema,
    outputSchema: ChatbotAssistantForBookingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
