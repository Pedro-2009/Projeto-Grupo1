import { useEffect, useRef } from 'react';
import {
  Animated,
  Image,
  View,
} from 'react-native';
// 1. IMPORTANTE: Importar o useRouter para controlar a navegação
import { useRouter } from 'expo-router'; 

import splashStyles from '../src/theme/splashStyle';

export default function SplashScreen() {
  const router = useRouter(); // 2. Inicializar o roteador
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
    ]).start(() => {
      // 3. CORREÇÃO: Quando a animação terminar, esperamos um pouquinho e vamos para o Login
      setTimeout(() => {
        // Usamos .replace() para o usuário NÃO conseguir voltar para a Splash ao apertar "Voltar"
        router.replace('/login'); 
      }, 1500); // 1.5 segundos exibindo a logo estática pós-animação antes de mudar de tela
    });
  }, [opacity, scale, router]); // Adicionado router nas dependências

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
