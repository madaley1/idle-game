import prisma from '@/prisma/prisma';

export default async function getHandler() {
  const wallet = await prisma.wallet.findMany();
  const schema = Object.keys(wallet[0]);
  return { wallet, schema };
}
