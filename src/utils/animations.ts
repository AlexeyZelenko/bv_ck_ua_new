import { useEffect } from 'react';
import { useInView } from 'framer-motion';

// Типи для анімацій
export type AnimationVariant = {
  hidden: object;
  visible: object;
};

// Стандартні варіанти анімацій
export const fadeIn: AnimationVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUp: AnimationVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: AnimationVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: AnimationVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: AnimationVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer: AnimationVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const zoomIn: AnimationVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Варіанти переходів
export const transitions = {
  default: { type: 'tween', duration: 0.6 },
  spring: { type: 'spring', stiffness: 100, damping: 20 },
  elastic: { type: 'spring', stiffness: 300, damping: 10 },
  bounce: { type: 'spring', stiffness: 300, damping: 15 },
  slow: { type: 'tween', duration: 1 },
  fast: { type: 'tween', duration: 0.3 },
};

// Кастомний хук для управління скролом при анімації
export function useScrollAnimation(ref: React.RefObject<HTMLElement>, threshold: number = 0.1) {
  const isInView = useInView(ref, { once: true, amount: threshold });
  
  return isInView;
}

// Функція для паралакс ефекту
export function useParallax(value: number, distance: number) {
  return {
    y: value * distance,
  };
}