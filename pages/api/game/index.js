import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
BigInt.prototype.toJSON = function() { return this.toString()  }

export default async function handler(req, res) {

    const result = await prisma.game.create({
        data: {
            home_team_id: parseInt(req.body.homeTeamID),
            away_team_id: parseInt(req.body.awayTeamID),
            home_team_score: 0,
            away_team_score: 0
        },
    })
    res.json(result)
}