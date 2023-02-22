/*
  Warnings:

  - You are about to drop the column `type` on the `IntegrationImport` table. All the data in the column will be lost.
  - Added the required column `provider` to the `IntegrationImport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IntegrationImport" DROP COLUMN "type",
ADD COLUMN     "provider" TEXT NOT NULL;
