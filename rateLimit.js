import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hours (1 day)
    max: 100, // limit each IP to 100 requests per windowMs
    message: "You've used up all of your free credits for today, come back tomorrow!",
  });