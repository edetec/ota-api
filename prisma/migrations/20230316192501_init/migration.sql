-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birth" DATE NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travel" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "destination" TEXT NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "travel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "travel" ADD CONSTRAINT "travel_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
