import { formatCurrency } from '@/utils/format';
import { Product } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';

function ProductsList({ products }: { products: Product[] }) {
    return (
        <div className="grid gap-y-4">
            {products.map((product) => {
                const productId = product.id;
                const { image, name, price, company } = product;
                const dollarPrice = formatCurrency(price);
                return (
                    <article className="group relative" key={productId}>
                        <Link href={`/products/${productId}`}>
                            <Card className="rounded-xl transform group-hover:shadow-xl transition-shadow duration-500">
                                <CardContent className="grid md:grid-cols-3 p-8 gap-y-4">
                                    <div className="relative h-64 md:h-48 md:w-48 rounded">
                                        <Image
                                            src={image}
                                            alt={name}
                                            fill
                                            priority
                                            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw"
                                            className="rounded w-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold capitalize">
                                            {name}
                                        </h2>
                                        <h4 className="text-md text-muted-foreground">
                                            {company}
                                        </h4>
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-muted-foreground md:text-end">
                                            {dollarPrice}
                                        </h4>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <div className="absolute bottom-7 right-7">
                            <FavoriteToggleButton productId={productId} />
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

export default ProductsList;
