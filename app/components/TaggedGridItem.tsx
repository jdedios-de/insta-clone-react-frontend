import type {Tagged} from "~/schemas/tagged.schema";

export function TaggedGridItem({ tagged }: { tagged: Tagged }) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const imageSrc = `${backendUrl}${tagged.img_url}`;

    return (

        <div className='relative w-full aspect-[9/16] overflow-hidden bg-gray-200'>
            <img
                src={imageSrc}
                alt={tagged.caption || "Reel thumbnail"}
                className='w-full h-full object-cover'
            />
            <div className='absolute bottom-2 left-2 text-white text-sm font-semibold flex items-center'>
                Tagged By:  {tagged.tagged_by_user}
            </div>
        </div>
    );
}