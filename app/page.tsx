import BlogCard from "@/components/blog-card";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main>
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold">
          Discover Amazing Stories
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Explore modern web development,
          technology, startups and AI.
        </p>
      </section>

      <section className="container mx-auto py-10">
        <h2 className="mb-8 text-3xl font-bold">
          Featured Posts
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
  <BlogCard
    key={post.id}
    post={post}
  />
))}
        </div>
      </section>
    </main>
  );
}