import DynamicBlogDetail from "@/components/DynamicBlogDetail"

type BlogPostParams = Promise<{ slug: string }>;

export default async function BlogPost({ params }: { params: BlogPostParams }) {
  const { slug } = await params

  return <DynamicBlogDetail slug={slug} />;
}

// Force dynamic rendering for all blog posts
export const dynamic = 'force-dynamic';

// Disable static generation for this route
export const revalidate = 0;