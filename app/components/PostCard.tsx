import type { Post } from "~/schemas/post.schema";

export function PostCard({ post }: { post: Post }) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const imageSrc = `${backendUrl}${post.img_url}`;

    return (
        <article className="w-full max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-sm mb-6 overflow-hidden">
            {/* User Header */}
            <div className="flex items-center px-4 py-3">
                <span className="font-semibold text-sm">webeet_user</span>
            </div>

            {/* Post Image */}
            <div>
                <img
                    src={imageSrc}
                    alt={post.caption || "Instagram post"}
                    className="w-full aspect-square object-cover"
                />
            </div>

            {/* Caption */}
            <div className="px-4 pb-4 text-sm">
                <span className="font-semibold mr-2">webeet_user</span>
                {post.caption}
            </div>
        </article>
    );
}
