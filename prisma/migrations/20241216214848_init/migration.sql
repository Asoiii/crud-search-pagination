-- CreateTable
CREATE TABLE "Dokter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "umur" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "Spesialis" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dokter_pkey" PRIMARY KEY ("id")
);
