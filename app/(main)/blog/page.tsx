import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Search, Tag,} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Metadata } from "next"
import Head from "next/head"

// Enhanced metadata with more keywords and structured data
export const metadata: Metadata = {
  title: 'Educational Insights, Career Tips & Design Inspiration | Inframe School Blog',
  description: 'Explore expert insights on design education, career guidance, placement opportunities, and industry trends at Inframe School - the top arts & design institute in Rajasthan, India.',
  keywords: 'design school, best design college in Rajasthan, arts education, creative curriculum, design career, design placement, Inframe alumni, design facilities, student life',
  openGraph: {
    title: 'Educational Insights, Career Tips & Design Inspiration | Inframe School Blog',
    description: 'Explore expert insights on design education, career guidance, placement opportunities, and industry trends at Inframe School.',
    images: ['/images/gallery/DSC04232.JPG'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Educational Insights, Career Tips & Design Inspiration | Inframe School Blog',
    description: 'Explore expert insights on design education, career guidance, and industry trends at Inframe School.',
    images: ['/images/gallery/DSC04232.JPG'],
  },
};

// Blog card data with enhanced SEO elements (tags, keywords)
const blogPosts = [
  {
    id: "top-5-reasons-to-choose-inframe-school",
    title: "Top 5 Reasons to Choose Inframe School for Your Child's Education",
    excerpt:
      "Discover why Inframe School stands out as one of the best design schools in India and the top arts & design school in Rajasthan.",
    image:
      "/images/gallery/1717492615506 - Copy (2).jpg",
    category: "Education",
    date: "Feb 28, 2025",
    readTime: "5 min read",
    tags: ["design education", "arts school", "best design college", "creative education", "Rajasthan"],
    keywords: "top design school, arts education in Rajasthan, best design college in India",

  },
  {
    id: "why-inframe-school-is-the-best-choice",
    title: "Why Inframe School is the Best Choice for Your Child's Future",
    excerpt:
      "Explore the perfect blend of education, expertise, and exposure at Inframe School for students after 12th grade.",
    image:
      "/images/gallery/1721737773149.jpg",
    category: "Career",
    date: "Feb 25, 2025",
    readTime: "6 min read",
    tags: ["career guidance", "after 12th", "design career", "career planning", "design education"],
    keywords: "design career after 12th, best design college, career opportunities in design",

  },
  {
    id: "state-of-the-art-facilities",
    title: "Explore the State-of-the-Art Facilities at Inframe School",
    excerpt: "Take a virtual tour of our modern design labs, creative spaces, and innovative learning environments.",
    image:
      "/images/gallery/SKF02844.JPG",
    category: "Facilities",
    date: "Feb 20, 2025",
    readTime: "4 min read",
    tags: ["design labs", "creative spaces", "modern facilities", "design infrastructure", "technology"],
    keywords: "design school facilities, creative studio, design labs, modern campus",

  },
  {
    id: "success-stories-from-inframe-alumni",
    title: "Success Stories from Inframe School Alumni",
    excerpt: "Read inspiring stories of our graduates who are making waves in the design and creative industries.",
    image:
      "/images/gallery/1721366034581.jpg",
    category: "Alumni",
    date: "Feb 15, 2025",
    readTime: "7 min read",
    tags: ["alumni success", "design careers", "industry leaders", "graduate achievements", "placements"],
    keywords: "design school alumni, successful designers, career after design school, placement success",

  },
  {
    id: "creative-curriculum-at-inframe",
    title: "The Creative Curriculum at Inframe School",
    excerpt:
      "Discover our innovative approach to design education that combines theory, practice, and industry exposure.",
    image:
      "/images/gallery/1717475821142 - Copy (8).jpg",
    category: "Curriculum",
    date: "Feb 10, 2025",
    readTime: "5 min read",
    tags: ["design curriculum", "creative education", "practical learning", "industry exposure", "design theory"],
    keywords: "design school curriculum, creative education, practical design training, industry-focused learning",

  },
  {
    id: "industry-partnerships-and-placements",
    title: "Industry Partnerships and Placement Opportunities at Inframe",
    excerpt:
      "Learn about our extensive network of industry partners and how they help our students launch successful careers.",
    image:
      "/images/gallery/1717475821142 - Copy (8).jpg",
    category: "Placements",
    date: "Feb 5, 2025",
    readTime: "6 min read",
    tags: ["placements", "industry partnerships", "career opportunities", "internships", "job placement"],
    keywords: "design school placements, industry partnerships, design internships, career launch",

  },
  {
    id: "faculty-spotlight-meet-our-experts",
    title: "Faculty Spotlight: Meet Our Industry Experts",
    excerpt: "Get to know the accomplished professionals who make up our teaching faculty at Inframe School.",
    image:
      "/images/gallery/DSC04264.JPG",
    category: "Faculty",
    date: "Jan 30, 2025",
    readTime: "8 min read",
    tags: ["expert faculty", "industry professionals", "design mentors", "experienced teachers", "design education"],
    keywords: "design school faculty, industry experts teaching, professional mentors, design educators",

  },
  {
    id: "student-life-at-inframe-school",
    title: "Student Life at Inframe School: Beyond the Classroom",
    excerpt:
      "Explore the vibrant student community, extracurricular activities, and creative events at Inframe School.",
    image:
      "/images/gallery/1721738128651.jpg",
    category: "Student Life",
    date: "Jan 25, 2025",
    readTime: "5 min read",
    tags: ["student life", "campus activities", "creative events", "community", "extracurricular"],
    keywords: "design school campus life, creative activities, student community, design school events",

  },
]

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

// Popular tags from all blog posts for SEO
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

export default function Home() {
  return (
    <>
      <Head>
        {/* Schema.org JSON-LD structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Inframe School Blog",
              "description": "Insights, stories, and information about the best design school in Rajasthan",
              "url": "https://inframeschool.edu.in/blog",
              "publisher": {
                "@type": "Organization",
                "name": "Inframe School",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://inframeschool.edu.in/logo.png"
                }
              },
              "blogPost": blogPosts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "keywords": post.keywords,
                "datePublished": post.date,
                "image": post.image
              }))
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section with Enhanced SEO */}
        <div className="relative z-10">
          <div className="relative h-[80vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
            <Image
              src="/images/gallery/DSC04232.JPG"
              alt="Inframe School - Best Design School in Rajasthan - Campus Life"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIfIR0jIyUkJSMiIiMlKy4wLisqMx8hJzQnKi46PT4+JSZHSUFQLTc6Tj7/2wBDARUXFx4bHt0dHT4qIio+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1.5 h-12 bg-yellow-500" />
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                      Inframe School Blog
                    </h1>
                  </div>
                  <p className="text-xl text-white/90 max-w-2xl mb-8">
                    Insights, stories, and inspiration from the top design school in Rajasthan focused on creating future-ready creative professionals
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-grow max-w-lg">
                      <input 
                        type="text" 
                        placeholder="Search articles, topics, keywords..." 
                        className="w-full py-3 px-4 pl-12 rounded-md text-black"
                        aria-label="Search blog posts"
                      />
                      <Search className="absolute left-3 top-3 text-gray-500" size={20} />
                    </div>
                    <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-6">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Tags Section for SEO */}
        <section className="bg-gray-50 py-8 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <Tag className="text-yellow-500" />
              <h2 className="text-xl font-semibold">Popular Topics</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag, index) => (
                <Link key={index} href={`/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}>
                  <Badge className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 px-3 py-1">
                    #{tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles Section with Enhanced UI */}
        <section id="featured-articles" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
              <span className="w-2 h-8 bg-yellow-400 inline-block"></span>
              Featured Articles
            </h2>
            <div className="flex gap-2 mt-4 sm:mt-0">
              <Button variant="outline" className="border-yellow-400 text-black hover:bg-yellow-50">
                All Categories
              </Button>
              <Button variant="outline" className="border-yellow-400 text-black hover:bg-yellow-50">
                Most Popular
              </Button>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex gap-2 min-w-max pb-2">
              <Button className="bg-black text-white hover:bg-yellow-400 hover:text-black">
                All
              </Button>
              {Object.keys(categoryColors).map((category) => (
                <Button 
                  key={category}
                  variant="outline" 
                  className={`border-2 ${categoryColors[category].replace('bg-', 'border-').replace(' text-white', '')} hover:bg-opacity-10`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post - Hero Format
          <div className="mb-12">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${categoryColors[blogPosts[0].category]} px-3 py-1 text-xs font-semibold`}>
                      {blogPosts[0].category}
                    </Badge>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} />
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={16} />
                    <span>{blogPosts[0].readTime}</span>
                    <span className="mx-2">•</span>
                  </div>
                  <Link href={`/blog/${blogPosts[0].id}`}>
                    <h3 className="text-2xl font-bold mb-4 hover:text-yellow-600 transition-colors">
                      {blogPosts[0].title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    
                    <Button className="bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors">
                      Read Article <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div> */}

          {/* Blog Cards Grid - Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} id={post.id} className="scroll-mt-16">
              <Link href={`/blog/${post.id}`} className="group">
                <Card className="overflow-hidden border-2 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${categoryColors[post.category]} px-3 py-1 text-xs font-semibold`}>
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Button className="mt-4 bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors w-full">
                      Read More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>

        
        </section>

        {/* Enhanced Newsletter Section with SEO */}
        <section className="py-16 my-10 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Inframe School</h2>
            <p className="mb-8">Subscribe to our newsletter to receive the latest articles, news, and updates about design education and career opportunities.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow text-black"
                aria-label="Email for newsletter"
              />
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-6">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-gray-400">By subscribing, you`ll receive exclusive content about design education, career opportunities, and admission updates.</p>
          </div>
        </section>

        

          </main>
          </>)}