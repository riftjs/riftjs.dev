import { findContent, Page, paginate } from "@riftjs/rift/common";
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

        posts = posts.sort((a, b) => a.date > b.date ? -1 : 1);

        let featured = posts.find(post => post.featured);
        ctx.data["featured"] = featured;
        
        paginate(posts, 4).forEach(page => ctx.param({ page }));

    }

    permalink(ctx: Context, params: { page: Page<any> })
    {
        if (params.page.index === 0)
        {
            return "/blog/";
        }

        return `/blog/page/${params.page.index + 1}/`;
    }
}