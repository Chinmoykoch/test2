import DynamicBlogDetail from "@/components/DynamicBlogDetail"

type BlogPostParams = Promise<{ slug: string }>;

export default async function BlogPost({ params }: { params: BlogPostParams }) {
  const { slug } = await params

  return <DynamicBlogDetail slug={slug} />;
}

// Generate static params for existing static blog posts
export async function generateStaticParams() {
  // Static blog posts data has been removed, return empty array
  // const { blogPostsData } = await import("../../../../utils/constant");
  // return Object.keys(blogPostsData).map((slug) => ({
  //   slug,
  // }));
  return [];
}