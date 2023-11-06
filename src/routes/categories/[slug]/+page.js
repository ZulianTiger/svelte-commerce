export async function load({ fetch, params }) {
    const response = await fetch(`/api/categories/${params.slug}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
    const category = await response.json();

    return category;
}
