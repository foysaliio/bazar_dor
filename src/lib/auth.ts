import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";

import { db, mongoClient } from "@/lib/mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client: mongoClient,
  }),

  emailAndPassword: {
    enabled: true,
  },
});
