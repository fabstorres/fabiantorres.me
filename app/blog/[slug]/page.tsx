export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(`@/content/${decodeURIComponent(slug).toLowerCase()}.mdx`);
  console.log(metadata);
  return <Post />;
}

export function generateStaticParams() {
  return [];
}

export const dynamicParams = false;
