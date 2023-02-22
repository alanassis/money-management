/*
  Warnings:

  - You are about to drop the `ImportedTransactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ImportedTransactions";

-- CreateTable
CREATE TABLE "IntegrationImport" (
    "externalId" TEXT NOT NULL,
    "processedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IntegrationImport_pkey" PRIMARY KEY ("externalId")
);
