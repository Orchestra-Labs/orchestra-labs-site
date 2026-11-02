/// <reference types="vite/client" />

// @splidejs/react-splide 0.7.12 ships types but its package.json "exports" map has no
// "types" condition, so bundler resolution can't see them. "splide-types" is a
// types-only alias in tsconfig "paths" that points at the shipped .d.ts.
declare module '@splidejs/react-splide' {
  export * from 'splide-types';
}

// CSS subpath export (resolves to dist/css/splide.min.css); not matched by vite/client's *.css.
declare module '@splidejs/react-splide/css';
