export async function load({ fetch }) {
    const response = await fetch("/api/categories", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
    const categories = await response.json();

    return categories;
}
