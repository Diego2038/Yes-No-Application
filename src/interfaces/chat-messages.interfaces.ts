export interface ChatMessage {
  id: number;
  message: string;
  isUserMessage: boolean;
  image?: string;
}
