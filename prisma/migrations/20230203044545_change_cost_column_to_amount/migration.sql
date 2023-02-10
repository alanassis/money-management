/*
  Warnings:

  - You are about to drop the column `cost` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "performedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL
);
INSERT INTO "new_Transaction" ("category", "createdAt", "id", "name", "performedAt", "amount") SELECT "category", "createdAt", "id", "name", "performedAt", "cost" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
