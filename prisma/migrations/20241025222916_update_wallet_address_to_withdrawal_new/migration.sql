/*
  Warnings:

  - Made the column `walletAddress` on table `Withdrawal` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Withdrawal" ALTER COLUMN "walletAddress" SET NOT NULL;
