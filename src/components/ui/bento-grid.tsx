"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
    image?: string; // Added to support user's request for images
}

interface BentoGridProps {
    items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 p-4 max-w-7xl mx-auto w-full">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-500 min-h-[250px] flex flex-col justify-end cursor-pointer",
                        "border border-white/10 bg-[#0f0f0f]",
                        "hover:border-[#C3E41D]/40 hover:shadow-[0_8px_30px_rgba(195,228,29,0.15)]",
                        "hover:-translate-y-2 hover:scale-[1.02] will-change-transform",
                        item.colSpan === 2 ? "md:col-span-2" : "md:col-span-1",
                        {
                            "shadow-[0_2px_20px_rgba(195,228,29,0.05)]":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    {/* Background Image overlay if provided */}
                    {item.image ? (
                        <div className="absolute inset-0 z-0">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                        </div>
                    ) : (
                        <div
                            className={`absolute inset-0 z-0 ${
                                item.hasPersistentHover
                                    ? "opacity-100"
                                    : "opacity-0 group-hover:opacity-100"
                            } transition-opacity duration-300`}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:8px_8px]" />
                        </div>
                    )}

                    <div className="relative z-10 flex flex-col space-y-4 h-full justify-between">
                        <div className="flex items-start justify-between">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:bg-[#C3E41D]/20 transition-all duration-300 border border-white/10">
                                {item.icon}
                            </div>
                            {item.status && (
                                <span
                                    className={cn(
                                        "text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md",
                                        "bg-white/10 text-white border border-white/10",
                                        "transition-colors duration-300 group-hover:bg-[#C3E41D] group-hover:text-black group-hover:border-[#C3E41D]"
                                    )}
                                >
                                    {item.status}
                                </span>
                            )}
                        </div>

                        <div className="space-y-3 mt-auto">
                            <h3 className="font-bold text-white tracking-tight text-xl sm:text-2xl group-hover:text-[#C3E41D] transition-colors duration-300">
                                {item.title}
                                {item.meta && (
                                    <span className="ml-3 text-xs text-neutral-400 font-medium tracking-wider uppercase">
                                        {item.meta}
                                    </span>
                                )}
                            </h3>
                            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-medium">
                                {item.description}
                            </p>

                            {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap items-center gap-2 pt-2">
                                    {item.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-black/40 border border-white/10 text-neutral-300 backdrop-blur-sm transition-all duration-200 group-hover:border-white/20"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 z-0 rounded-2xl p-px bg-gradient-to-br from-transparent via-white/10 to-transparent ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300 pointer-events-none`}
                    />
                </div>
            ))}
        </div>
    );
}

export { BentoGrid };
