export async function load({ fetch, params }) {
    const response = await fetch(`/api/products/${params.id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
    const product = await response.json();

    return product;
}
