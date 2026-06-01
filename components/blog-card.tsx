import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

export default function BlogCard({
  post,
}: {
  post: any;
}) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader>
        <Badge>
          {post.category}
        </Badge>

        <h3 className="text-xl font-bold mt-3">
          {post.title}
        </h3>
      </CardHeader>

      <CardContent>
        <p>
          {post.excerpt}
        </p>
      </CardContent>

      <CardFooter>
        <Button asChild>
          <Link
            href={`/blogs/${post.slug}`}
          >
            Read More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}