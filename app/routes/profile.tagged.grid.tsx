import {api} from "~/services/api";

import {type Tagged, taggedsSchema} from "~/schemas/tagged.schema";
import {useLoaderData} from "react-router";
import {TaggedGridItem} from "~/components/TaggedGridItem";

export async function loader() {
    try{
        const response = await api.get("/tagged/grid");

        return taggedsSchema.parse(response.data);
    }catch(err){
        console.error("Failed to load tagged grid.", err);
        throw new Response("Could not load tagged grid.", { status: 500 });
    }
}

export default function TaggedGrid() {
    const taggeds = useLoaderData() as Tagged[];
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-1'>
            {taggeds.map((tagged) => (
                <TaggedGridItem key={tagged.id} tagged={tagged} />
            ))}
        </div>
    );
}