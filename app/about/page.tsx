import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          About ModernBlog
        </h1>

        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          ModernBlog is a modern blogging platform built with
          Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
          Our goal is to share valuable knowledge about
          technology, web development, artificial intelligence,
          startups, and programming.
        </p>
      </section>

    
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-3">
              Our Mission
            </h2>

            <p className="text-muted-foreground">
              To provide high-quality technical content that
              helps developers, students, and tech enthusiasts
              learn modern technologies and grow their careers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-3">
              Our Vision
            </h2>

            <p className="text-muted-foreground">
              To become a trusted source of technology knowledge
              where readers can discover new ideas, improve their
              skills, and stay updated with industry trends.
            </p>
          </CardContent>
        </Card>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-muted-foreground mt-2">
              Articles
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="text-muted-foreground mt-2">
              Readers
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-muted-foreground mt-2">
              Tutorials
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-muted-foreground mt-2">
              Categories
            </p>
          </CardContent>
        </Card>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Read ModernBlog?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">
                Latest Tech News
              </h3>

              <p className="text-muted-foreground">
                Stay updated with the latest trends in web
                development, AI, and software engineering.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">
                Practical Tutorials
              </h3>

              <p className="text-muted-foreground">
                Learn through hands-on guides and real-world
                examples designed for beginners and professionals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">
                Career Growth
              </h3>

              <p className="text-muted-foreground">
                Discover resources, interview tips, and career
                advice to accelerate your journey in tech.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}