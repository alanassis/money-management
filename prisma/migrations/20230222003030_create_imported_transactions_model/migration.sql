-- CreateTable
CREATE TABLE "ImportedTransactions" (
    "externalUniqueId" TEXT NOT NULL,
    "processedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImportedTransactions_pkey" PRIMARY KEY ("externalUniqueId")
);
