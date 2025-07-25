"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function BlogDetails({ params }) {
  const { slug } = params;
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Blog Title";
  const image = searchParams.get("image") || "/placeholder.jpg";
  const author = searchParams.get("author") || "John Doe";
  const date = searchParams.get("date") || "July 25, 2025";
  const readTime = searchParams.get("time") || "6 min read";

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 pt-12 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{title}</h1>
        <div className="text-sm text-gray-500 mb-6">
          By <span className="font-medium">{author}</span> · {date} · {readTime}
        </div>
        <div className="relative w-full h-64 md:h-[500px] rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-4 pb-20 prose prose-lg prose-slate">
        <h2>Introduction</h2>
        <p>
          Building a magnetic brand identity is about creating a strong emotional connection with your audience. In this guide, we’ll walk through...
        </p>

        <h2>1. Understand Your Audience</h2>
        <p>
          Before you can build a brand that attracts the right people, you need to know who those people are...
        </p>

        <Image src="/blog/brand-audience.jpg" alt="Audience" width={800} height={400} className="rounded-lg my-4" />

        <h3>Know Their Pain Points</h3>
        <ul>
          <li>What problems do they face?</li>
          <li>What do they value?</li>
          <li>Where do they spend time online?</li>
        </ul>

        <blockquote>
          "Your brand is the single most important investment you can make in your business." – Steve Forbes
        </blockquote>

        <h2>Conclusion</h2>
        <p>
          A magnetic brand identity sets you apart and builds trust. Take time to invest in the right visuals, voice, and message.
        </p>
      </div>
    </div>
  );
}
