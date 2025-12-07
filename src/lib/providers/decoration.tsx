import ThemeProvider from './themes'

interface DecorationProviderProps {
  children: React.ReactNode
}

export default function DecorationProvider({
  children,
}: DecorationProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}
