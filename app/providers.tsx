'use client';
import React from 'react';
import ThemeProvider from './theme-provider';
import { Toaster } from '@/components/ui/toaster';

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
            <Toaster />
        </>
    );
}

export default Providers;
