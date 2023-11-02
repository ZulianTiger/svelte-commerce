export async function load({ fetch }) {
    const productsResponse = await fetch("/api/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });

    const products = await productsResponse.json();

    return products
}
