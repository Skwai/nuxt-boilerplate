import { router } from "../trpc";
import { sessionsRouter } from "./sessions";

export const appRouter = router({
  sessions: sessionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
