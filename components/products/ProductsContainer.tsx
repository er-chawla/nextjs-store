import React from 'react';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { searchProduct } from '@/utils/action';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import EmptyList from '../global/EmptyList';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';

async function ProductsContainer({
    layout,
    search,
}: {
    layout: string;
    search: string;
}) {
    const products = await searchProduct(search);
    const searchTerm = search ? `&search=${search}` : '';
    const productCount = products.length;
    return (
        <div>
            <section className="flex justify-between mb-8">
                <h4 className="font-medium text-lg">
                    {productCount > 1
                        ? `${productCount} products`
                        : `${productCount} product`}
                </h4>
                <div className="flex gap-x-4">
                    <Button
                        variant={layout === 'grid' ? 'default' : 'ghost'}
                        size="icon"
                        asChild
                    >
                        <Link href={`/products?layout=grid${searchTerm}`}>
                            <LuLayoutGrid />
                        </Link>
                    </Button>
                    <Button
                        variant={layout === 'list' ? 'default' : 'ghost'}
                        size="icon"
                        asChild
                    >
                        <Link href={`/products?layout=list${searchTerm}`}>
                            <LuList />
                        </Link>
                    </Button>
                </div>
            </section>
            <Separator />

            {products.length === 0 ? (
                <EmptyList
                    heading="Sorry, no products matched your search... "
                    className="text-2xl mt-16"
                />
            ) : layout === 'grid' ? (
                <ProductsGrid products={products} />
            ) : (
                <ProductsList products={products} />
            )}
        </div>
    );
}

export default ProductsContainer;
