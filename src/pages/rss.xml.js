import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  // Fetch posts from multiple collections
  const blogPosts = await getCollection('blog');
  const gunLawsPosts = await getCollection('gun-laws');
  const huntingLawsPosts = await getCollection('hunting-laws');
  const shopPosts = await getCollection('shop');

  // Combine posts from all collections
  const allPosts = [...blogPosts, ...gunLawsPosts, ...huntingLawsPosts, ...shopPosts];

  const feedItems = allPosts.map((post) => ({
    title: post.data.title,
    link: `/${post.slug}/`,
    pubDate: post.data.publishDate,
    category: post.data.category, // Include 'category' field
    content: sanitizeHtml(parser.render(post.body)),
    ...post.frontmatter,
  }));

  return rss({
    title: 'University of Guns | Post Feed',
    description: 'Latest posts from University of Guns',
    site: context.site,
    items: feedItems,
  });
}