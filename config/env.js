import { config } from 'dotenv';

// Load environment variables from a .env file into process.env
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

// Export the environment variables
export const { PORT, NODE_ENV } = process.env;
