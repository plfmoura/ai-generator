"use client";

import { useForm } from "react-hook-form";
import { Button, cn } from "@heroui/react";
import { useState } from "react";

interface PromptFormValues {
  prompt: string;
}

export default function ChatForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
  } = useForm<PromptFormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(values: PromptFormValues) {
    console.log(values);
    setIsSubmitting(true);

    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Here you would typically handle the response, e.g., update state or redirect
      console.log("Prompt submitted:", values.prompt);
    }, 1000);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("w-full flex items-center gap-2 mb-2", className)}
      autoComplete="off"
    >
      <input
        {...register("prompt", { required: "O prompt é obrigatório" })}
        type="text"
        placeholder="Enter image prompt"
        className="flex-1 bg-zinc-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        aria-label="Digite o prompt da imagem"
        tabIndex={0}
      />
      <Button
        type="submit"
        className="bg-indigo-600 p-2 rounded-full hover:bg-indigo-700 transition-colors"
        aria-label="Enviar prompt"
        isIconOnly
        isLoading={isSubmitting}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10l9-6 9 6-9 6-9-6zm0 0v6a9 9 0 0 0 9 9 9 9 0 0 0 9-9v-6"
          />
        </svg>
      </Button>
    </form>
  );
}
