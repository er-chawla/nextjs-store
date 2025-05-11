import db from '@/utils/db';
import { redirect } from 'next/navigation';

import { NextResponse } from 'next/server';
export async function fetchFeaturedProducts() {
    return await db.product.findMany({
        where: {
            featured: true,
        },
    });
}

export const fetchAllProducts = () => {
    return db.product.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
};

export const searchProduct = async (search: string = '') => {
    return await db.product.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: search,
                        mode: 'insensitive',
                    },
                },
                {
                    company: {
                        contains: search,
                        mode: 'insensitive',
                    },
                },
            ],
        },
    });
};

export const fetchSingleProduct = async (productId: string) => {
    const product = await db.product.findUnique({
        where: {
            id: productId,
        },
    });
    if (!product) {
        return redirect('/products');
    }
    return product;
};
