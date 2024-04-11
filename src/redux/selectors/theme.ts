import type { StoreType } from '../store';

export const getDarkTheme = (state: StoreType) => state.theme.isDarkTheme;
