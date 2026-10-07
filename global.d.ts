// Ambient declarations to assist in-browser language servers and Monaco editor
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference types="react" />
/// <reference types="react-dom" />

// Ensure 'window' and standard browser globals are recognized by in-browser workers
declare global {
  interface Window {
    [key: string]: unknown;
  }
}

export {};
