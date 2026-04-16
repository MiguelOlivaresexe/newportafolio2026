/** 
 * tailwind.config.cjs
 * Configuración principal de Tailwind CSS.
 * Define la paleta de colores personalizada, fuentes y el soporte para modo oscuro.
 * @type {import('tailwindcss').Config} 
 */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Habilita el modo oscuro basado en la clase 'dark' en el elemento <html>
  theme: {
    extend: {
      colors: {
        // Paleta de colores para el modo claro
        'rich-blue': '#191265', // Rich Blue del diseño
        'pale-gray': '#F0EEE9', // Pale Gray del diseño
        'accent-blue': '#191265', // Mantenemos el nombre para compatibilidad pero con el nuevo color
        'neutral-text': '#191265', // Usamos Rich Blue para el texto principal
        'neutral-subtle': '#4a4a6a', // Un tono más suave de Rich Blue
        'vibrant-green': '#4CAF50',
        'soft-orange': '#FF9800',
        'light-blue': '#2196F3',
        
        // Paleta de colores específica para el modo oscuro
        dark: {
          'background': '#191265', // Usamos Rich Blue como fondo oscuro
          'text': '#EBEBDF', // Usamos Pale Gray como texto en modo oscuro
          'subtle-text': '#a0aec0',
          'card-background': '#241c7a', // Un tono ligeramente diferente para tarjetas
        },
      },
    },
  },
  plugins: [],
};