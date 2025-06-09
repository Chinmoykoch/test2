import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp, MessageSquare } from "lucide-react"
import { blogPostsData } from "../../../../utils/constant"

type BlogPostParams = Promise<{ slug: string }>;
// Category colors mapping
const categoryColors: Record<string, string> = {
  Education: "bg-yellow-400 text-black",
  Career: "bg-blue-500 text-white",
  Facilities: "bg-green-500 text-white",
  Alumni: "bg-purple-500 text-white",
  Curriculum: "bg-red-500 text-white",
  Placements: "bg-indigo-500 text-white",
  Faculty: "bg-pink-500 text-white",
  "Student Life": "bg-orange-500 text-white",
}

export default async function BlogPost({ params }: { params: BlogPostParams }) {
    const { slug } = await params
    const post = blogPostsData[slug as keyof typeof blogPostsData]
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">{`The blog post you're looking for doesn't exist.`}</p>
          <Link href="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image src={post.heroImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-4">
          <div className="max-w-4xl">
            <Badge className={`${categoryColors[post.category]} px-3 py-1 text-sm font-semibold mb-4`}>
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" /> Back to Blog
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Index Sidebar */}
          <aside className="md:w-1/4 md:sticky md:top-8 md:self-start md:h-[calc(100vh-120px)] md:overflow-auto">
            <Card className="border-2 border-yellow-400">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-4">Index</h3>
                <ul className="space-y-2">
                  {post.sections.map((section) => (
                    <li key={section.id}>
                      <Link
                        href={`#${section.id}`}
                        className="text-left w-full py-2 px-3 rounded hover:bg-yellow-100 transition-colors block"
                      >
                        {section.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Author Card */}
            <Card className="mt-6 border-2 border-yellow-400">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-4">Author</h3>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={post.author.image || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{post.author.name}</h4>
                    <p className="text-sm text-gray-600">Content Writer at Inframe School</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share Card */}
            <Card className="mt-6 border-2 border-yellow-400">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-4">Share</h3>
                <div className="flex gap-2">
                  <Button variant="outline" className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90 w-full">
                    Facebook
                  </Button>
                  <Button variant="outline" className="bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 w-full">
                    Twitter
                  </Button>
                </div>
                <Button variant="outline" className="bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 w-full mt-2">
                  LinkedIn
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="md:w-3/4">
            <article className="prose prose-lg max-w-none">
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-12 scroll-mt-16">
                  {section.id !== "intro" && <h2 className="text-3xl font-bold mb-6 border-b pb-4">{section.title}</h2>}

                  {section.image && (
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={section.title}
                        width={1000}
                        height={500}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  {section.content.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))}

                  {section.quote && (
                    <blockquote className="border-l-4 border-yellow-400 pl-6 py-2 my-6 bg-yellow-50 rounded-r-lg">
                      <p className="italic text-xl mb-2">{`"${section.quote}"`}</p>
                      {section.quoteAuthor && (
                        <footer className="text-right font-medium">– {section.quoteAuthor}</footer>
                      )}
                    </blockquote>
                  )}

                  {section.highlights && (
                    <div className="bg-yellow-50 p-6 rounded-lg my-6 border-l-4 border-yellow-400">
                      <h4 className="font-bold text-xl mb-4">{section.highlightTitle}</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {section.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              ))}

              {/* Engagement Section */}
              <div className="border-t border-b py-6 my-8 flex justify-between items-center">
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Comment
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {post.relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                      <Card className="overflow-hidden border hover:border-yellow-400 transition-all h-full">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge className={`${categoryColors[relatedPost.category]} px-2 py-1 text-xs`}>
                              {relatedPost.category}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-bold group-hover:text-yellow-600 transition-colors">
                            {relatedPost.title}
                          </h4>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Inframe School</h2>
          <p className="mb-8">Subscribe to our newsletter to receive the latest articles, news, and updates.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md flex-grow text-black"
            />
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export async function generateStaticParams() {
    return Object.keys(blogPostsData).map((slug) => ({
      slug,
    }))
  }