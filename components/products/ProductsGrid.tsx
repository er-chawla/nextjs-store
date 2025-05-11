import React from 'react';
import FavoriteToggleButton from './FavoriteToggleButton';
import { Product } from '@prisma/client';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';

function ProductsGrid({ products }: { products: Product[] }) {
    return (
        <div className="pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
                const { image, name, price } = product;
                const productId = product.id;
                const dollarPrice = formatCurrency(price);
                return (
                    <article className="group relative" key={productId}>
                        <Link href={`/products/${productId}`}>
                            <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                                <CardHeader className="p-4">
                                    <div className="relative h-64 md:h-48 rounded overflow-hidden">
                                        <Image
                                            src={image}
                                            alt={name}
                                            fill
                                            priority
                                            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw"
                                            className="rounded w-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <h2 className="text-lg capitalize">
                                        {name}
                                    </h2>
                                    <p className="text-muted-foreground mt-2">
                                        {dollarPrice}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                        <div className="absolute top-7 right-7 z-5">
                            <FavoriteToggleButton productId={productId} />
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

export default ProductsGrid;
