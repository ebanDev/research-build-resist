export async function fetchProjects() {
    const {$notion} = useNuxtApp();

    const pageTable = await $notion.getPageTable("0bf83c5ac16a4b078f07a4fddcd722d8");


    const projects = pageTable
        .filter((page) => page.Published)

    return {
        projects
    };
}