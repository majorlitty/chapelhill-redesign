'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScrollProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let rafId = 0;

    const destroyLenis = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };

    const initLenis = () => {
      destroyLenis();
      if (mediaQuery.matches) return;

      const lenis = new Lenis({
        lerp: 0.068,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        autoResize: true,
        prevent: (node) =>
          node instanceof HTMLElement &&
          Boolean(
            node.closest(
              '[data-lenis-prevent], [role="dialog"], [aria-modal="true"], .overscroll-contain'
            )
          ),
      });

      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };

      rafId = window.requestAnimationFrame(raf);
    };

    initLenis();

    const handleMotionPreferenceChange = () => {
      initLenis();
    };

    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;

    const frameId = window.requestAnimationFrame(() => {
      lenisRef.current?.resize();
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  return <>{children}</>;
}
