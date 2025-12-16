import Image from "next/image";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  const res = await fetch(
    `https://ivory-stingray-579496.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  const data = await res.json();
  return data?.[0] ?? null;
}

// Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  return {
    title: post?.title?.rendered || "Blog",
    description:
      post?.excerpt?.rendered
        ?.replace(/<[^>]+>/g, "")
        .slice(0, 160) || "Read our blog article.",
  };
}

// Page
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="p-8 text-center text-gray-600 text-lg">
        Blog not found.
      </div>
    );
  }

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;

  return (
    <div className="px-5 md:px-10 max-w-5xl mx-auto mt-20 py-16">
      <h1
        className="text-4xl md:text-5xl font-bold text-black leading-tight"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      {featuredImage && (
        <div className="mt-10">
          <Image
            src={featuredImage}
            alt={post.title.rendered}
            width={1200}
            height={600}
            className="rounded-lg w-full object-cover"
          />
        </div>
      )}

      <div
        className="mt-10 prose prose-lg max-w-none text-black"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}
