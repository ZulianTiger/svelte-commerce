import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();

        return new Response(
            JSON.stringify({
                categories
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "applicaiton/json"
                }
            }
        )
    }
    catch (e) {
        return new Response(
            JSON.stringify({
                message: "Something went wrong while fetching the categories",
                error: e
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "applicaiton/json"
                }
            }
        )
    }
}