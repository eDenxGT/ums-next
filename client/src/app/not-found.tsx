'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
    const pathname = usePathname();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            pathname
        );
    }, [pathname]);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl font-bold text-destructive mb-2">404 - Not Found</h1>
            <p className="text-muted-foreground mb-6">The page you’re looking for doesn’t exist.</p>
            <Link href="/">
                <Button variant="outline">Back to Home</Button>
            </Link>
        </div>
    );
}
