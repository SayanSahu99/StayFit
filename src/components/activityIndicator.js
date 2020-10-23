import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useTheme } from '@react-navigation/native';

function Spinner() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" animating={true} color={colors.primary} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Spinner;
