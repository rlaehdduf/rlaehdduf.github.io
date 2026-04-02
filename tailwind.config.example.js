// tailwind.config.js - 게임 개발자 포트폴리오용 설정
// 이 설정을 tailwind.config.cjs 또는 tailwind.config.js에 추가하세요

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 배경 시스템
        'portfolio-bg': '#0D0D0E',
        'portfolio-card': '#111827',
        'portfolio-border': '#1F2937',
        
        // 텍스트 시스템
        'portfolio-text': '#E5E7EB',
        'portfolio-text-muted': '#9CA3AF',
        
        // 포인트 컬러 (절제된 사용)
        'portfolio-purple': '#9333EA',    // 태그용
        'portfolio-cyan': '#22D3EE',      // 버튼용
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 12px rgba(34, 211, 238, 0.25)',
        'glow-purple': '0 0 12px rgba(147, 51, 234, 0.25)',
      },
    },
  },
  plugins: [],
};