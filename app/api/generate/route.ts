import { Ratelimit } from "@upstash/ratelimit";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

// Create a new ratelimiter, that allows 3 requests per 24 hours
// const ratelimit = redis
//   ? new Ratelimit({
//       redis: redis,
//       limiter: Ratelimit.fixedWindow(3, "1440 m"),
//       analytics: true,
//     })
//   : undefined;

export async function POST(request: Request) {
  // Rate Limiter Code
  // if (ratelimit) {
  //   const headersList = headers();
  //   const ipIdentifier = headersList.get("x-real-ip");
  //   console.log(ipIdentifier)

  //   const result = await ratelimit.limit(ipIdentifier ?? "");

  //   if (!result.success) {
  //     return new Response(
  //       "Too many uploads in 1 day. Please try again in a 24 hours.",
  //       {
  //         status: 429,
  //         headers: {
  //           "X-RateLimit-Limit": result.limit,
  //           "X-RateLimit-Remaining": result.remaining,
  //         } as any,
  //       }
  //     );
  //   }
  // }

  const {
    imageUrl,
    theme,
    room,
    location,
    season,
    material,
    houseStyle,
    buildingType,
    extraPrompt
  } = await request.json();

  // POST request to Replicate to start the image restoration generation process
  let startResponse = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + process.env.REPLICATE_API_KEY,
    },
    body: JSON.stringify({
      version:
        "854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b",
      input: {
        image: imageUrl,
        prompt: `A stunning visual of a ${houseStyle} ${material} ${buildingType}, the season is ${season}, the house's location is ${location}, ${extraPrompt}, realistic sky, brilliant architecture, breathtaking, 8K, architecture photography,`,
        a_prompt: "ultrarealistic",
        n_prompt:
          "blurry, details are low, overlapping, grainy, multiple angles, deformed structures, weird colors, unnatural, unrealistic, humans, unrealistic sky, people, animals, cartoon, anime, painting, drawing, sketch",
      },
    }),
  });

  let jsonStartResponse = await startResponse.json();

  let endpointUrl = jsonStartResponse.urls.get;

  // GET request to get the status of the image restoration process & return the result when it's ready
  let restoredImage: string | null = null;
  while (!restoredImage) {
    // Loop in 1s intervals until the alt text is ready
    console.log("polling for result...");
    let finalResponse = await fetch(endpointUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + process.env.REPLICATE_API_KEY,
      },
    });
    let jsonFinalResponse = await finalResponse.json();

    if (jsonFinalResponse.status === "succeeded") {
      restoredImage = jsonFinalResponse.output;
    } else if (jsonFinalResponse.status === "failed") {
      break;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  return NextResponse.json(
    restoredImage ? restoredImage : "Failed to restore image"
  );
}
