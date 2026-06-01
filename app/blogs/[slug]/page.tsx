import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl py-10">
      <h1 className="mb-4 text-5xl font-bold">
        {post.title}
      </h1>

      <div className="mb-8 flex gap-4 text-gray-500">
        <span>{post.author}</span>
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>

      <p className="text-lg leading-8">
        {post.content}
      </p>

      <div className="mt-8 flex gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-gray-100 px-3 py-1"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}