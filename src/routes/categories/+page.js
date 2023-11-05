export async function load({ fetch }) {
    const response = await fetch("/api/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
    const products = await response.json();

    return products;
}
