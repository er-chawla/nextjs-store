import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';

async function CartButton() {
    return (
        <Button size={'icon'} variant="outline" className="relative" asChild>
            <Link href="/cart">
                <LuShoppingCart />
                <span className="absolute -top-3 -right-3 bg-primary h-6 w-6 text-white rounded-full flex items-center justify-center text-xs">
                    0
                </span>
            </Link>
        </Button>
    );
}

export default CartButton;
