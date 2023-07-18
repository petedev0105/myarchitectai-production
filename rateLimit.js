import rateLimit from "express-rate-limit";

export  const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hours (1 day)
    max: 2, // limit each IP to 5 requests per windowMs
    message: "You've used up all of your MyArchitectAI free credits for today, come back tomorrow!",
  });