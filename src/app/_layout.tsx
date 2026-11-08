import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../constants/theme";
import { LanguageProvider } from '../i18n/LanguageProvider';
import { Background } from "expo-router/build/react-navigation";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: COLORS.bg },
            headerTintColor: COLORS.text,
            headerShadowVisible: false,
            contentStyle: { backgroundColor: COLORS.bg },
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="language" options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name="expense/new" options={{ presentation: "modal", title: '' }} />
        </Stack>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}

