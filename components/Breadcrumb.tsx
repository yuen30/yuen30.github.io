"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-8">
      <ol className="flex items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/40">{item.label}</span>
              )}
              {!isLast && <ChevronRight className="w-4 h-4 text-white/30" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
