import { Stack } from "expo-router"

const TabLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false, }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="login" />
      <Stack.Screen name="join" />
      <Stack.Screen name="addroute" />
    </Stack>
  )
}

export default TabLayout;