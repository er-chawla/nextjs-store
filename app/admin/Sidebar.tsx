'use client';
import { Button } from '@/components/ui/button';
import { adminLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
    const pathName = usePathname();
    return (
        <aside>
            {adminLinks.map((link) => {
                const isActive = pathName === link.href;
                const variant = isActive ? 'default' : 'ghost';

                return (
                    <Button
                        asChild
                        className="w-full capitalize justify-start font-normal mb-2"
                        variant={variant}
                        key={link.label}
                    >
                        <Link href={link.href}>{link.label}</Link>
                    </Button>
                );
            })}
        </aside>
    );
}

export default Sidebar;
