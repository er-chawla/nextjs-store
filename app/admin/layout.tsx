import SectionTitle from '@/components/global/SectionTitle';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import Sidebar from './Sidebar';

export default function DashboardLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <h2 className="text-xl pl-4">Dashboard</h2>
            <Separator className="mt-2" />
            <section className="grid lg:grid-cols-12 gap-12 mt-12">
                <div className="lg:col-span-2">
                    <Sidebar />
                </div>
                <div className="lg:col-span-10 px-4">{children}</div>
            </section>
        </>
    );
}
