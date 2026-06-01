"use client";

import { useState } from "react";
import { posts } from "@/data/posts";
import BlogCard from "@/components/blog-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const POSTS_PER_PAGE = 6;

export default function BlogsPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(
    filteredPosts.length / POSTS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;

  const currentPosts = filteredPosts.slice(
    startIndex,
    endIndex
  );

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          All Blogs
        </h1>

        <p className="text-muted-foreground mt-2">
          Explore our latest articles and tutorials.
        </p>
      </div>

      <Input
        placeholder="Search blogs..."
        value={search}
        onChange={handleSearch}
        className="mb-8 max-w-md"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((prev) => prev - 1)
            }
          >
            Previous
          </Button>

          {Array.from(
            { length: totalPages },
            (_, index) => (
              <Button
                key={index + 1}
                variant={
                  currentPage === index + 1
                    ? "default"
                    : "outline"
                }
                onClick={() =>
                  setCurrentPage(index + 1)
                }
              >
                {index + 1}
              </Button>
            )
          )}

          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => prev + 1)
            }
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}