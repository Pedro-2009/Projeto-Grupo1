import { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';
import {
  Animated,
  Image,
  View,
} from 'react-native';

import splashStyles from '../src/theme/splashStyle';
import { obterSessao } from '../src/database/storage';

export default function SplashScreen() {
  const router = useRouter();
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

  useEffect(() => {
    let ativo = true;

    async function verificarSessao() {
      const [sessao] = await Promise.all([
        obterSessao(),
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]);

      if (!ativo) return;
      router.replace(sessao ? '/home' : '/login');
    }

    verificarSessao();

    return () => {
      ativo = false;
    };
  }, [router]);

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