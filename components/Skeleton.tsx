import React from 'react';

/**
 * Base primitive Skeleton component
 * Lightweight, accessible, CSS-animated placeholder
 */
export function Skeleton({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-md bg-stone-200/80 ${className}`}
      {...props}
    />
  );
}

/**
 * Project Card Skeleton matching the exact layout of project cards in ProjectsPageClient
 */
export function ProjectCardSkeleton() {
  return (
    <div 
      role="status" 
      aria-label="Loading project..." 
      className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs flex flex-col justify-between"
    >
      <div>
        {/* Thumbnail skeleton */}
        <div className="relative aspect-16/10 w-full bg-stone-200 animate-pulse flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-stone-300/60" />
          <div className="absolute top-3 left-3 w-24 h-6 rounded-full bg-stone-300/80" />
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-300/80" />
        </div>

        {/* Content body */}
        <div className="p-6 space-y-4">
          {/* Location & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="w-3.5 h-3.5 rounded-full" />
              <Skeleton className="w-36 h-3 rounded" />
            </div>
            <Skeleton className="w-4/5 h-6 rounded-lg" />
            <Skeleton className="w-full h-3 rounded" />
            <Skeleton className="w-2/3 h-3 rounded" />
          </div>

          {/* Pricing & Units strip */}
          <div className="py-3 px-3.5 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-between">
            <div className="space-y-1">
              <Skeleton className="w-16 h-2.5 rounded" />
              <Skeleton className="w-28 h-5 rounded" />
            </div>
            <div className="text-right space-y-1">
              <Skeleton className="w-12 h-2.5 rounded ml-auto" />
              <Skeleton className="w-16 h-4 rounded ml-auto" />
            </div>
          </div>

          {/* Highlights pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            <Skeleton className="w-24 h-5 rounded-md" />
            <Skeleton className="w-28 h-5 rounded-md" />
            <Skeleton className="w-20 h-5 rounded-md" />
          </div>
        </div>
      </div>

      {/* Action buttons footer */}
      <div className="p-6 pt-0 border-t border-stone-100 mt-4 flex items-center gap-3">
        <Skeleton className="flex-1 h-11 rounded-xl" />
        <Skeleton className="w-11 h-11 rounded-xl shrink-0" />
      </div>
    </div>
  );
}

/**
 * Projects Grid Skeleton (default 6 cards)
 */
export function ProjectsSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      role="status"
      aria-live="polite"
      aria-label="Loading projects..."
    >
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
      <span className="sr-only">Loading architectural developments and projects...</span>
    </div>
  );
}

/**
 * Full Projects Page Skeleton with Hero, Filters, KPI strip and Grid
 */
export function ProjectsPageSkeleton() {
  return (
    <div className="min-h-screen bg-[#FBFBFA] flex flex-col font-sans">
      {/* Top Bar Skeleton */}
      <div className="w-full bg-[#162521] py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Skeleton className="w-48 h-3.5 bg-stone-700 rounded" />
          <Skeleton className="w-32 h-3.5 bg-stone-700 rounded hidden sm:block" />
        </div>
      </div>

      {/* Header / Navbar placeholder */}
      <div className="w-full bg-white border-b border-stone-200/80 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="w-9 h-9 rounded-xl" />
            <Skeleton className="w-32 h-5 rounded" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Skeleton className="w-16 h-4 rounded" />
            <Skeleton className="w-20 h-4 rounded" />
            <Skeleton className="w-18 h-4 rounded" />
            <Skeleton className="w-18 h-4 rounded" />
          </div>
          <Skeleton className="w-28 h-9 rounded-full" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 w-full">
        {/* Breadcrumb skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <Skeleton className="w-14 h-3.5 rounded" />
          <Skeleton className="w-3 h-3.5 rounded" />
          <Skeleton className="w-24 h-3.5 rounded" />
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl space-y-4">
          <Skeleton className="w-32 h-6 rounded-full" />
          <Skeleton className="w-4/5 h-10 sm:h-12 rounded-xl" />
          <Skeleton className="w-full h-4 rounded" />
          <Skeleton className="w-3/4 h-4 rounded" />
        </div>

        {/* Filter Pills and Search Bar Skeleton */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 bg-stone-100/90 rounded-2xl border border-stone-200">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <Skeleton className="w-28 h-9 rounded-xl shrink-0" />
            <Skeleton className="w-28 h-9 rounded-xl shrink-0" />
            <Skeleton className="w-28 h-9 rounded-xl shrink-0" />
            <Skeleton className="w-28 h-9 rounded-xl shrink-0" />
          </div>
          <Skeleton className="w-full sm:w-72 h-10 rounded-xl shrink-0" />
        </div>

        {/* KPI metrics strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-stone-200/60 max-w-4xl mx-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <Skeleton className="w-20 h-8 rounded-lg" />
              <Skeleton className="w-32 h-3 rounded" />
            </div>
          ))}
        </div>

        {/* Project Cards Grid Skeleton */}
        <div className="mt-12">
          <ProjectsSkeletonGrid count={6} />
        </div>
      </div>
    </div>
  );
}

/**
 * Single Service Module Skeleton matching the asymmetric layout in ServicesPageClient
 */
export function ServiceCardSkeleton({ isEven = false }: { isEven?: boolean }) {
  return (
    <div 
      role="status"
      aria-label="Loading service details..."
      className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm relative overflow-hidden"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge & Category */}
          <div className="flex items-center gap-3">
            <Skeleton className="w-36 h-6 rounded-full" />
            <Skeleton className="w-28 h-3.5 rounded" />
          </div>

          {/* Title & Tagline */}
          <div className="space-y-2">
            <Skeleton className="w-4/5 h-8 sm:h-9 rounded-xl" />
            <Skeleton className="w-2/3 h-4 rounded" />
          </div>

          {/* Paragraphs */}
          <div className="space-y-2.5">
            <Skeleton className="w-full h-3.5 rounded" />
            <Skeleton className="w-full h-3.5 rounded" />
            <Skeleton className="w-3/4 h-3.5 rounded" />
          </div>

          {/* Deliverables / Scope Grid */}
          <div className="pt-4 border-t border-stone-100">
            <Skeleton className="w-40 h-4 rounded mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                  <Skeleton className="w-4 h-4 rounded-full shrink-0" />
                  <Skeleton className="w-40 h-3 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Action button */}
          <div className="pt-2 flex items-center gap-3">
            <Skeleton className="w-44 h-11 rounded-xl" />
            <Skeleton className="w-36 h-11 rounded-xl" />
          </div>
        </div>

        {/* Right Column (5 cols) Image Showcase */}
        <div className="lg:col-span-5">
          <div className="aspect-4/3 lg:aspect-square w-full rounded-2xl bg-stone-200 animate-pulse relative overflow-hidden flex items-center justify-center">
            <div className="w-14 h-14 rounded-2xl bg-stone-300/70" />
            <div className="absolute bottom-4 left-4 right-4 h-12 rounded-xl bg-stone-300/80" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Services List Skeleton (default 4 service modules)
 */
export function ServicesSkeletonList({ count = 4 }: { count?: number }) {
  return (
    <div 
      className="space-y-16 sm:space-y-24"
      role="status"
      aria-live="polite"
      aria-label="Loading services..."
    >
      {Array.from({ length: count }).map((_, i) => (
        <ServiceCardSkeleton key={i} isEven={i % 2 === 1} />
      ))}
      <span className="sr-only">Loading Chapelhill engineering and property services...</span>
    </div>
  );
}

/**
 * Full Services Page Skeleton
 */
export function ServicesPageSkeleton() {
  return (
    <div className="min-h-screen bg-[#FBFBFA] flex flex-col font-sans">
      {/* Top Bar Skeleton */}
      <div className="w-full bg-[#162521] py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Skeleton className="w-48 h-3.5 bg-stone-700 rounded" />
          <Skeleton className="w-32 h-3.5 bg-stone-700 rounded hidden sm:block" />
        </div>
      </div>

      {/* Header / Navbar placeholder */}
      <div className="w-full bg-white border-b border-stone-200/80 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="w-9 h-9 rounded-xl" />
            <Skeleton className="w-32 h-5 rounded" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Skeleton className="w-16 h-4 rounded" />
            <Skeleton className="w-20 h-4 rounded" />
            <Skeleton className="w-18 h-4 rounded" />
            <Skeleton className="w-18 h-4 rounded" />
          </div>
          <Skeleton className="w-28 h-9 rounded-full" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 w-full text-center">
        {/* Breadcrumb skeleton */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Skeleton className="w-14 h-3.5 rounded" />
          <Skeleton className="w-3 h-3.5 rounded" />
          <Skeleton className="w-24 h-3.5 rounded" />
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl mx-auto space-y-4">
          <Skeleton className="w-36 h-6 rounded-full mx-auto" />
          <Skeleton className="w-4/5 h-10 sm:h-12 rounded-xl mx-auto" />
          <Skeleton className="w-full h-4 rounded mx-auto" />
          <Skeleton className="w-3/4 h-4 rounded mx-auto" />
        </div>

        {/* Filter Pills Skeleton */}
        <div className="mt-8 flex items-center justify-center gap-2 p-1.5 bg-stone-100/90 rounded-2xl border border-stone-200 max-w-2xl mx-auto overflow-x-auto">
          <Skeleton className="w-28 h-9 rounded-xl shrink-0" />
          <Skeleton className="w-36 h-9 rounded-xl shrink-0" />
          <Skeleton className="w-36 h-9 rounded-xl shrink-0" />
          <Skeleton className="w-36 h-9 rounded-xl shrink-0" />
        </div>

        {/* Metrics strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-stone-200/60 max-w-5xl mx-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <Skeleton className="w-24 h-8 rounded-lg" />
              <Skeleton className="w-36 h-3 rounded" />
            </div>
          ))}
        </div>

        {/* Services List Modules Skeleton */}
        <div className="mt-16 sm:mt-24 text-left">
          <ServicesSkeletonList count={4} />
        </div>
      </div>
    </div>
  );
}
