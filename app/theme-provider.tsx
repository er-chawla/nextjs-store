import React from 'react';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}

export default ThemeProvider;
