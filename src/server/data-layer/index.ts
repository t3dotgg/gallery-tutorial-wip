import "server-only";
import { db } from "../db";
import { images } from "../db/schema";
import type { InferSelectModel } from "drizzle-orm";

export const getPosts = async () => {
  return await db.query.posts.findMany();
};

export const createImage = async (input: { url: string; name: string }) => {
  return await db.insert(images).values(input);
};

const mockData = [
  {
    url: "/temp/1.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "1.jpg",
  },
  {
    url: "/temp/2.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "2.jpg",
  },
  {
    url: "/temp/3.png",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "3.png",
  },
];

const generateMockData = (amount: number) => {
  const result = [];
  for (let i = 0; i < amount; i++) {
    const refIndex = i % mockData.length;
    result.push({ ...mockData[refIndex]!, id: i + 1 });
  }
  return result;
};

type ImageType = InferSelectModel<typeof images>;
export const getImages = async (): Promise<ImageType[]> => {
  // return await db.query.images.findMany();

  return generateMockData(24);
};
