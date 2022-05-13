import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
BigInt.prototype.toJSON = function() { return this.toString()  }

export default async function handler(req, res) {
    const {
        query: { id, name },
        method,
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            res.status(200).json({ id, name: `User ${id}` })
            break
        case 'PUT':
            const result = await prisma.game.create({
                data: {
                    home_team_id: parseInt(req.body.homeTeamID),
                    away_team_id: parseInt(req.body.awayTeamID),
                    home_team_score: 0,
                    away_team_score: 0
                },
            })
            res.status(200).json(result)
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }



}