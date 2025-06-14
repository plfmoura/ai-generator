import { ChatMessage } from "@/utils/chat-mock";
import React from "react";
import { ChatCard } from "./chat-card";

export function ChatList({ messages }: { messages: ChatMessage[] }) {
  return (
    <div className="flex flex-col gap-4 overflow-y-auto px-2 py-4 w-full scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
      {messages.map((msg) => (
        <ChatCard key={msg.id} {...msg} />
      ))}
    </div>
  );
}
