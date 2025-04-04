import { BarChart, Globe, Shield, Zap } from "lucide-react";
export default function WhyChoose() {
    return (
        <section id="features" className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-black text-white">
            <div className="px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                            Why choose Blume
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Performance-First Approach</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our optimization techniques deliver measurable improvements to your website's performance, user
                            experience, and conversion rates.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="grid gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Lightning-Fast Load Times</h3>
                            <p className="text-muted-foreground">
                                We optimize every aspect of your site to ensure it loads in milliseconds, not seconds, keeping
                                visitors engaged.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                                <BarChart className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Conversion Optimization</h3>
                            <p className="text-muted-foreground">
                                Turn visitors into customers with data-driven UX improvements and strategic call-to-action
                                placement.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                                <Globe className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">SEO Performance</h3>
                            <p className="text-muted-foreground">
                                Rank higher in search results with our technical SEO optimizations and performance improvements.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Core Web Vitals Mastery</h3>
                            <p className="text-muted-foreground">
                                We ensure your site exceeds Google's performance metrics, improving both rankings and user
                                experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};