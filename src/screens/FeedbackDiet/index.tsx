import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

import ImageInDiet from "@assets/image_in_diet.png";
import ImageNotDiet from "@assets/image_not_diet.png";

import * as S from "./styles";

type RouteParams = {
  inDiet: boolean;
};

export function FeedbackDiet() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const route = useRoute();

  const { inDiet } = route.params as RouteParams;

  const handleRedirectPageInitial = () => {
    navigation.navigate("home");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingRight: 24,
        paddingLeft: 24,
        paddingTop: 30,
        backgroundColor: COLORS.WHITE,
      }}
    >
      <S.Container>
        <S.Title inDiet={inDiet}>
          {inDiet ? "Continue assim!" : "Que pena!"}
        </S.Title>
        <S.Subtitle>
          {inDiet ? (
            <>
              Você continua <S.Strong>dentro da dieta.</S.Strong> Muito bem!
            </>
          ) : (
            <>
              Você <S.Strong>saiu da dieta</S.Strong> dessa vez, mas continue se
              esforçando e não desista!
            </>
          )}
        </S.Subtitle>

        <S.ImageFeedbackDiet source={inDiet ? ImageInDiet : ImageNotDiet} />

        <Button
          title="Ir para a página inicial"
          onPress={handleRedirectPageInitial}
          style={{ maxWidth: 250, marginTop: 30 }}
        />
      </S.Container>
    </SafeAreaView>
  );
}
