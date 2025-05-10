import { findContent, paginate } from "@riftjs/rift/common";
import { Context } from "@riftjs/rift/core";
import slugify from "slugify";

export default class PostsController
{
    async params(ctx: Context)
    {
        let posts = await Promise.all(findContent("./src/content/*.md").map(async file => ({
            title: file.metadata.title,
            slug: slugify(file.metadata.title, { lower: true, strict: true }),
            summary: file.metadata.summary,
            featured: file.metadata.featured,
            date: file.metadata.date,
            tags: file.metadata.tags,
            image: file.metadata.image,
            content: await file.content,
        })));

        posts.forEach(post =>
        {
            ctx.param({ post });
        });


    }


    permalink(ctx: Context, params: { post: { slug: string } })
    {
        return `/blog/${params.post.slug}/`;
    }
}