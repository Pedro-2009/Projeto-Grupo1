import { useEffect, useRef } from 'react';
import {
  Animated,
  Image,
  View,
} from 'react-native';

import splashStyles from '../src/theme/splashStyle';

export default function SplashScreen() {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),

      Animated.spring(scale, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, scale]);

  return (
    <View style={splashStyles.container}>
      <Animated.View
        style={[
          splashStyles.logoContainer,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        <Image
          source={require('../assets/images/logo.png')}
          style={splashStyles.logo}
        />
      </Animated.View>
    </View>
  );
}