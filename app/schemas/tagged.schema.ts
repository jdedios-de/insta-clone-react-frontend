import { z } from "zod";

const taggedSchema = z.object({
    id: z.number(),
    img_url: z.string().url(),
    caption: z.string().nullable(),
    tagged_by_user: z.string().nonempty(),
    created_at: z.string(),
});

const taggedsSchema = z.array(taggedSchema);

type Tagged = z.infer<typeof taggedSchema>;

export { taggedSchema, taggedsSchema };
export type { Tagged };