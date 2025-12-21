import Image from "next/image";
import Link from "next/link";

type BlogGridProps = {
  limit?: number;
};

async function getPosts() {
  const res = await fetch(
    "https://ivory-stingray-579496.hostingersite.com/wp-json/wp/v2/posts?_embed",
    { next: { revalidate: 10 } }
  );

  if (!res.ok) return [];
  return res.json();
}

export default async function BlogGrid({ limit }: BlogGridProps) {
  const posts = await getPosts();
  const visiblePosts = limit ? posts.slice(0, limit) : posts;

  if (!visiblePosts.length) {
    return (
      <div className="p-8 text-center text-gray-600 text-lg">
        No blog posts found.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {visiblePosts.map((post: any) => {
        const img =
          post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;

        return (
          <div
            key={post.id}
            className="group rounded-lg p-7 shadow-sm bg-semiblueviolet flex flex-col
            transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            {img && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={img}
                  alt={post?.title?.rendered || "Blog Image"}
                  width={600}
                  height={350}
                  className="rounded-lg w-full object-cover
                  transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            )}

            <h2
              className="text-xl text-black font-semibold"
              dangerouslySetInnerHTML={{ __html: post?.title?.rendered || "" }}
            />

            <p
              className="text-black mt-2"
              dangerouslySetInnerHTML={{
                __html:
                  post?.excerpt?.rendered
                    ?.replace(/<[^>]+>/g, "")
                    .slice(0, 120) + "...",
              }}
            />

            <Link href={`/blog/${post.slug}`} className="mt-auto">
              <button className="mt-4 bg-black text-white px-4 py-2 rounded
              transition-all hover:bg-gray-900 hover:scale-105">
                Read More →
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
