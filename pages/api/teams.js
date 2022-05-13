import { teams } from "../../data";

export default function handler(req, res) {
    console.log(teams);
    res.status(200);
}