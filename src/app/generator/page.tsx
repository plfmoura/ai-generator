import { chatMock } from "@/utils/chat-mock";
import { ChatList } from "@/components/shared/chat-list";

export default async function page() {
  return (
    <main className="relative min-h-screen w-full pt-11 pb-28">
      <section className="flex flex-col items-center w-full max-w-md mx-auto mt-4">
        <ChatList messages={chatMock} />
      </section>
    </main>
  );
}

export const metadata = {
  title: "Midjourney",
  description: "Explore the world of AI-generated images with Midjourney",
  openGraph: {
    title: "Midjourney",
    description: "Explore the world of AI-generated images with Midjourney",
  },
};