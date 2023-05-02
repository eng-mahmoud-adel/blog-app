import Image from "next/image";

const PostCard = ({ post }) => {
    console.log(post);
    return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <Image
                    src={post?.featuredImage?.url}
                    alt={post?.title}
                    className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                    fill
                />
            </div>
        </div>
    );
};

export default PostCard;