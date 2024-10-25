/*
  Warnings:

  - Added the required column `walletAddress` to the `Withdrawal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Withdrawal" ADD COLUMN     "walletAddress" TEXT NOT NULL;
