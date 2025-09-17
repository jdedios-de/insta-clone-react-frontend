import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { api } from "~/services/api";
import { type Highlight } from "~/schemas/highlight.schema";
import HighlightStory from "~/components/HighlightStory";

export async function loader({ params }: LoaderFunctionArgs) {
    const id = params.id;

    try {
        const response = await api.get(`/highlights/${id}`);

        return response.data;
    } catch (error) {
        console.error(error);
        throw new Response("Highlight not found", { status: 404 });
    }
}

export default function HighlightDetail() {
    const highlight: Highlight = useLoaderData() as Highlight;

    return (
        <div>
            <h1>{highlight.title}</h1>
            <HighlightStory highlight={highlight} />
        </div>
    );
}