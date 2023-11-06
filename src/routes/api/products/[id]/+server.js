import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async ({ params }) => {
    try {
        const { id } = params;
        const product = await prisma.product.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return new Response(
            JSON.stringify({
                product
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
                message: "Something went wrong while trying to get product by id",
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