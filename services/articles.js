
export async function fetchArticles() {
    const {$notion} = useNuxtApp();

    const pageTable = await $notion.getPageTable("16a06ffd39694c089fb21c4c7f7bcc2a");

    let postsWithoutCover = pageTable
        .filter((page) => page.Published)
        .sort((a, b) => {
            if (a.Highlighted !== b.Highlighted) {
                return a.Highlighted ? -1 : 1;
            }
            if (a.Category[0] !== b.Category[0]) {
                return a.Category[0].localeCompare(b.Category[0]);
            }
            return new Date(b.Date) - new Date(a.Date);
        });

    const posts = await Promise.all(
        postsWithoutCover.map(async (post) => {
            if (post.Highlighted) {
                return {
                    ...post,
                    Cover: Object.values(await $notion.getPageBlocks(post.id.replace(/-/g, "")))[0].value.format.page_cover,
                };
            } else {
                return post;
            }
        })
    );

    const postsByCategory = pageTable
        .filter((page) => page.Published)
        .reduce((map, currentPage) => {
            currentPage.Category.forEach((Category) =>
                map.has(Category)
                    ? map.set(Category, [...map.get(Category), currentPage])
                    : map.set(Category, [currentPage])
            );
            return map;
        }, new Map());

    return {
        posts,
        postsByCategory,
        categories: [...postsByCategory.keys()].sort(),
    };
}