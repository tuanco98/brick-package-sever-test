import { config } from "dotenv";
config();

if (!process.env.PORT) throw new Error(`PORT must be provided`);
export const CONFIG_PORT = process.env.PORT;

if (!process.env.PROVIDER) throw new Error(`PROVIDER must be provided`);
export const CONFIG_PROVIDER = process.env.PROVIDER;