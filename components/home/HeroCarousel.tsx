import React from 'react';
import { Card, CardContent } from '../ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '../ui/carousel';
import Image from 'next/image';
import hero1 from '@/public/images/hero1.jpg';
import hero2 from '@/public/images/hero2.jpg';
import hero3 from '@/public/images/hero3.jpg';
import hero4 from '@/public/images/hero4.jpg';

const carouselImages = [hero1, hero2, hero3, hero4];

function HeroCarousel() {
    return (
        <Carousel className="w-full hidden lg:block">
            <CarouselContent>
                {carouselImages.map((product, index) => {
                    return (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="p-2">
                                        <div>
                                            <Image
                                                src={product}
                                                alt="hero"
                                                className="object-cover w-full h-[24rem] rounded-sm"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default HeroCarousel;
