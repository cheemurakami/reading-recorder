import prisma from './prisma'

export const getAllReviews = async () => {
  return await prisma.review.findMany({
    orderBy: {
      read: 'desc'
    },
  })
}