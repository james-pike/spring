// utils/darkUtils.ts
import { useContext } from '@builder.io/qwik';
import { DarkContext } from '~/DarkContext';

export function useIsDark(propsIsDark?: boolean): boolean {
  const contextIsDark = useContext(DarkContext, false);
  return propsIsDark ?? contextIsDark; // Use props if provided, otherwise context
}