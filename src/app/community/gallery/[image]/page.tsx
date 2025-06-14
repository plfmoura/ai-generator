import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{
    image: string;
  }>;
}) {
  const { image } = await params;
  
  return (
    <div>
      <h1>Image {image}</h1>
    </div>
  );
}
