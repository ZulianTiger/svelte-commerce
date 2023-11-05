import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async ({ params }) => {
    try {
        const { slug } = params;
        const category = await prisma.category.findUnique({
            where: {
                slug: '/' + slug
            },
            include: {
                products: true
            }
        })

        return new Response(
            JSON.stringify({
                category
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
                message: "Something went wrong while trying to fetch category by slug",
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