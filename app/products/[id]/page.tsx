import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/single-product/AddToCart';
import BredCrumbs from '@/components/single-product/BredCrumbs';
import ProductRating from '@/components/single-product/ProductRating';
import { fetchSingleProduct } from '@/utils/action';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';
import React from 'react';

async function SingleProductPage({ params }: { params: { id: string } }) {
    const product = await fetchSingleProduct(params.id);
    const { name, image, company, price, description } = product;
    const dollarAmount = formatCurrency(price);

    return (
        <section>
            <BredCrumbs name={name} />
            <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
                {/* Image FIRST COL */}
                <div className="relative h-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        priority
                        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                        className="rounded object-cover w-full"
                    />
                </div>

                {/* Product Details SECOND COL */}
                <div>
                    <div className="flex items-center gap-x-8">
                        <h1 className="text-3xl font-bold capitalize">
                            {name}
                        </h1>
                        <FavoriteToggleButton productId={params.id} />
                    </div>
                    <ProductRating productId={params.id} />

                    <h4 className="text-xl mt-2">{company}</h4>
                    <p className="bg-muted rounded-md inline-block p-2 mt-3 text-md">
                        {dollarAmount}
                    </p>
                    <p className="text-muted-foreground leading-8 mt-6">
                        {description}
                    </p>
                    <AddToCart productId={params.id} />
                </div>
            </div>
        </section>
    );
}

export default SingleProductPage;
