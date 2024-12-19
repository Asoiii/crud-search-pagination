import { prisma } from "@/lib/prisma";

export const getDokter = async () => {
  try {
    const dokters = await prisma.dokter.findMany();
    return dokters;
  } catch (error) {
    throw new Error("failed to fetch contact data");
  }
};

export const getDokterbyId = async (id: string) => {
  try {
    const dokter = await prisma.dokter.findUnique({
      where: { id },
    });
    return dokter;
  } catch (error) {
    throw new Error("failed to fetch contact data");
  }
};
