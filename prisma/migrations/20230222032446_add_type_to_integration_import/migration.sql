/*
  Warnings:

  - Added the required column `type` to the `IntegrationImport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IntegrationImport" ADD COLUMN     "type" TEXT NOT NULL;
