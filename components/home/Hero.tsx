import React from 'react';
import HeroCarousel from './HeroCarousel';
import { Button } from '../ui/button';
import Link from 'next/link';

function Hero() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
                <h1 className="text-4xl sm:text-6xl max-w-2xl font-bold tracking-tighter">
                    We are changing the way people shop
                </h1>
                <p className="text-lg mt-8 text-muted-foreground leading-8 max-w-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit nobis quam porro, repellendus id minima accusantium
                    harum. Fuga nam possimus voluptatum facilis dignissimos
                    eveniet tempore, saepe totam et fugiat minima.
                </p>
                <Button
                    variant="default"
                    className="capitalize h-10 px-8 mt-10"
                    asChild
                >
                    <Link href="/products">our products</Link>
                </Button>
            </div>
            <HeroCarousel />
        </div>
    );
}

export default Hero;
