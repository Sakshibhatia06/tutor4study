import BlogGrid from "../components/BlogGrid";

export const metadata = {
  title: "Blog – Latest Articles & Updates",
  description:
    "Read the latest blogs, guides, tips, and updates. Stay informed with high-quality articles.",
};

export default function BlogPage() {
  return (
    <div className="p-8 mt-20">
      <BlogGrid />
    </div>
  );
}
