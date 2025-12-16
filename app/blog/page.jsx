import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Blog – Latest Articles & Updates",
    description:
        "Read the latest blogs, guides, tips, and updates. Stay informed with high-quality articles on important topics.",
};

// Fetch all posts
async function getPosts() {
    const res = await fetch(
        "https://ivory-stingray-579496.hostingersite.com/wp-json/wp/v2/posts?_embed",
        { next: { revalidate: 10 } }
    );

    if (!res.ok) return [];
    return res.json();
}

export default async function BlogPage() {
    const posts = await getPosts();

    if (!posts || posts.length === 0) {
        return (
            <div className="p-8 text-center text-gray-600 text-lg">
                No blog posts found.
            </div>
        );
    }

    return (
        <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {posts.map((post) => {
                const img =
                    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;

                return (
                    <div
                        key={post.id}
                        className="group border rounded-lg p-5 shadow-sm bg-white flex flex-col
             transition-all duration-300 ease-out
             hover:scale-[1.03] hover:shadow-xl"
                    >
                        {img && (
                            <div className="w-full mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={img}
                                    alt={post?.title?.rendered || "Blog Image"}
                                    width={600}
                                    height={350}
                                    className="rounded-lg w-full object-cover
                   transition-transform duration-500 ease-out
                   group-hover:scale-110"
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
                       transition-all duration-300
                       hover:bg-gray-900 hover:scale-105">
                                Read More →
                            </button>
                        </Link>
                    </div>

                );
            })}
        </div>
    );
}
