-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "orderedBooks" JSONB NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
