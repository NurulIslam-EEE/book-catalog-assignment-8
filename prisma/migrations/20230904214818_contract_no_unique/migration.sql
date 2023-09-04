/*
  Warnings:

  - A unique constraint covering the columns `[contactNo]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users_contactNo_key" ON "Users"("contactNo");
