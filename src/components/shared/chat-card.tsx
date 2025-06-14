import { ChatMessage } from "@/utils/chat-mock";
import { Button } from "@heroui/react";

export function ChatCard({ prompt, status, imageUrl }: ChatMessage) {
  return (
    <div className="space-y-3 bg-zinc-900/60 rounded-3xl shadow-lg px-3 py-3 w-full max-w-xs mx-auto flex flex-col">
      <div className="text-zinc-200 text-xs rounded-t-2xl">
        {prompt}
      </div>
      <div className="w-full flex justify-center items-center min-h-[260px] rounded-2xl border border-zinc-900">
        {status === "loading" ? (
          <div className="w-56 h-72 flex items-center justify-center">
            <span className="animate-pulse text-zinc-500">
              Gerando imagem...
            </span>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt="Generated image"
            className="rounded-2xl shadow object-cover w-full h-72 text-xs text-white/50 p-2"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex gap-2 justify-between">
        <Button
          className=""
          aria-label="Fazer variação"
          color="primary"
          radius="full"
        >
          Make variation
        </Button>
        <Button
          className="bg-zinc-700 hover:bg-zinc-800 text-zinc-200"
          aria-label="Recarregar"
          variant="solid"
          radius="full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582M20 20v-5h-.581M19.418 9A7.978 7.978 0 0 0 12 4c-2.042 0-3.918.764-5.418 2M4.582 15A7.978 7.978 0 0 0 12 20c2.042 0 3.918-.764 5.418-2"
            />
          </svg>
        </Button>
        <Button
          className="bg-zinc-700 hover:bg-zinc-800 text-zinc-200"
          aria-label="Salvar imagem"
          variant="solid"
          radius="full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
