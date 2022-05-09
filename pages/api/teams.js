import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
    const teams = await prisma.team.findMany();

    res.status(200).json(teams);
}