import Stripe from 'stripe';
import { STRIPE_API_KEY, HOSTNAME, API_VERSION } from '$env/static/private';

const stripe = new Stripe(STRIPE_API_KEY, {
    apiVersion: API_VERSION
});

export const POST = async ({ request }) => {
    try {
        const { items } = await request.json();
        let lineItems = [];

        await items.forEach((item) => {
            lineItems.push({
                price: item.stripe_id,
                quantity: 1
            });
        });

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: `${HOSTNAME}/payment-success`,
            cancel_url: `${HOSTNAME}/payment-canceled`
        });

        return new Response(
            JSON.stringify({
                url: session.url
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }
    catch (e) {
        return new Response(
            JSON.stringify({
                message: "Something went wrong while trying to checkout",
                error: e
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }
}
