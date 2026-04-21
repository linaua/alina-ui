type Theme = 'light' | 'dark';
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}
export declare const ThemeContext: import('react').Context<ThemeContextType>;
export declare const useTheme: () => ThemeContextType;
export declare const useThemeProvider: () => {
    theme: Theme;
    toggleTheme: () => void;
};
export {};
