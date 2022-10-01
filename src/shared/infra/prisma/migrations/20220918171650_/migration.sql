/*
  Warnings:

  - You are about to drop the column `userName` on the `deliveryman` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `deliveryman` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `deliveryman` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "deliveryman_userName_key";

-- AlterTable
ALTER TABLE "deliveryman" DROP COLUMN "userName",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "deliveryman_username_key" ON "deliveryman"("username");
