import axios from "axios";
import NodeCache from "node-cache";
import dotenv from "dotenv";
dotenv.config();

const UNSPLASH_API_URL = "https://api.unsplash.com/photos/random";
const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || "";

const cache = new NodeCache({ stdTTL: 3600 }); // Set Cache to 1 hour

export const getPhotoUrls = async (count: number): Promise<string[]> => {
  const cacheKey = `photos_${count}`;
  const cachedData = cache.get<string[]>(cacheKey);

  if (cachedData) {
    console.log("Returning cached data");
    return cachedData;
  }

  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      params: {
        client_id: ACCESS_KEY,
        count,
      },
    });

    const rateLimitRemaining = parseInt(
      response.headers["x-ratelimit-remaining"]
    );

    if (rateLimitRemaining === 0) {
      console.warn("Rate limit reached, can't make more requests until reset.");
      throw new Error("Rate limit reached. Please try again later.");
    }

    const photoUrls = response.data.map((photo: any) => photo.urls.full);

    // Store the response in cache
    cache.set(cacheKey, photoUrls);

    return photoUrls;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error fetching photos from Unsplash:",
        error.message
      );
    } else if (error instanceof Error) {
      console.error(
        "Generic error fetching photos from Unsplash:",
        error.message
      );
    } else {
      console.error("Unknown error fetching photos from Unsplash");
    }
    throw new Error("Error fetching photos from Unsplash");
  }
};
