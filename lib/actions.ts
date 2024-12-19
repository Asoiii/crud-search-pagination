"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const DokterSchema = z.object({
  name: z.string().min(6),
  phone: z.string().min(11),
  umur: z.string().min(1),
  gender: z.string().min(3),
  Spesialis: z.string().min(4),
  alamat: z.string().min(8),
  email: z.string().min(4),
});

export const saveDokter = async (prevsate: any, formData: FormData) => {
  const validatedFields = DokterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    await prisma.dokter.create({
      data: {
        name: validatedFields.data.name,
        phone: validatedFields.data.phone,
        umur: validatedFields.data.umur,
        gender: validatedFields.data.gender,
        Spesialis: validatedFields.data.Spesialis,
        alamat: validatedFields.data.alamat,
        email: validatedFields.data.email,
      },
    });
  } catch (error) {
    return { message: "Failed to create dokter" };
  }
  revalidatePath("/dokter");
  redirect("/dokter");
};

export const updateDokter = async (
  id: string,
  prevsate: any,
  formData: FormData
) => {
  const validatedFields = DokterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    await prisma.dokter.update({
      data: {
        name: validatedFields.data.name,
        phone: validatedFields.data.phone,
        umur: validatedFields.data.umur,
        gender: validatedFields.data.gender,
        Spesialis: validatedFields.data.Spesialis,
        alamat: validatedFields.data.alamat,
        email: validatedFields.data.email,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update dokter" };
  }
  revalidatePath("/dokter");
  redirect("/dokter");
};

export const deleteDokter = async (id: string): Promise<void> => {
  try {
    await prisma.dokter.delete({
      where: { id },
    });
    revalidatePath("/dokter"); // Revalidasi path untuk memperbarui cache
  } catch (error) {
    console.error("Error deleting dokter:", error); // Log error untuk debug
    throw new Error("Failed to delete dokter"); // Lempar error agar dapat ditangani
  }
};
