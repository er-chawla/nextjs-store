'use client';
import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useFormStatus } from 'react-dom';

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProp = {
    className: string;
    size: btnSize;
    text: string;
};

function SubmitButton({ className, size, text }: SubmitButtonProp) {
    const { pending } = useFormStatus();

    return (
        <div className="mt-8">
            <Button
                type="submit"
                disabled={pending}
                className={cn('capitalize', className)}
                size={size}
            >
                {pending ? (
                    <>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        please wait....
                    </>
                ) : (
                    text
                )}
            </Button>
        </div>
    );
}

export default SubmitButton;
