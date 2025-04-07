"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MenuIcon, X } from "lucide-react";

export function NavbarMain() {
    return <Navbar className="top-0 py-2" />;
}

function Navbar({ className }: { className?: string; }) {
    const [active, setActive] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav
            className={cn(
                "fixed z-50 top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-neutral-800",
                className,
            )}
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image src="/blumeLogo.svg" alt="logo" width={40} height={40} />
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:block">
                        <Menu setActive={setActive}>
                            <div className="flex items-center space-x-8">
                                <MenuItem setActive={setActive} active={active} item="Services">
                                    <div className="flex flex-col space-y-4 text-sm">
                                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                                        <HoveredLink href="/branding">Branding</HoveredLink>
                                    </div>
                                </MenuItem>
                                <MenuItem setActive={setActive} active={active} item="Products">
                                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                                        <ProductItem
                                            title="Algochurn"
                                            href="https://algochurn.com"
                                            src="https://assets.aceternity.com/demos/algochurn.webp"
                                            description="Prepare for tech interviews like never before."
                                        />
                                        <ProductItem
                                            title="Tailwind Master Kit"
                                            href="https://tailwindmasterkit.com"
                                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                            description="Production ready Tailwind css components for your next project"
                                        />
                                        <ProductItem
                                            title="Moonbeam"
                                            href="https://gomoonbeam.com"
                                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                            description="Never write from scratch again. Go from idea to blog in minutes."
                                        />
                                        <ProductItem
                                            title="Rogue"
                                            href="https://userogue.com"
                                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                                        />
                                    </div>
                                </MenuItem>
                                <MenuItem setActive={setActive} active={active} item="Pricing">
                                    <div className="flex flex-col space-y-4 text-sm">
                                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                                        <HoveredLink href="/individual">Individual</HoveredLink>
                                        <HoveredLink href="/team">Team</HoveredLink>
                                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                                    </div>
                                </MenuItem>
                            </div>
                        </Menu>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white focus:outline-none"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-black/95 border-t border-neutral-800 w-full overflow-hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#services"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-neutral-800"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Services
                        </a>
                        <a
                            href="#products"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-neutral-800"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Products
                        </a>
                        <a
                            href="#pricing"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-neutral-800"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </a>
                    </div>
                </div>
            )}

            {/* Add global styles to fix any potential overflow issues */}
            <style jsx global>{`
                body {
                    overflow-x: hidden;
                    cursor: default;
                }
                
                /* Fix for any potential menu overflow */
                nav {
                    max-width: 100vw;
                    width: 100%;
                    box-sizing: border-box;
                }
                
                /* Ensure mobile menu stays within bounds */
                nav > div:last-child {
                    max-width: 100vw;
                    width: 100%;
                    box-sizing: border-box;
                }
            `}</style>
        </nav>
    );
}

