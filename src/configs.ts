import { config } from "dotenv";
config();

if (!process.env.PORT) throw new Error(`PORT must be provided`);
export const CONFIG_PORT = process.env.PORT;