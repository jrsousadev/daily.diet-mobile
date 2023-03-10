import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

type CardPercentageProps = {
  onOpen?: () => void;
  percentage: number | string;
  isFullscreen?: boolean;
};

export function CardPercentage({
  onOpen,
  isFullscreen = false,
  percentage,
}: CardPercentageProps) {
  const [isAboveAverage, setIsAboveAverage] = useState(true);

  const theme = useTheme();
  const navigate = useNavigation();

  useEffect(() => {
    if (percentage <= 50) {
      setIsAboveAverage(false)
    } 
    
    if (percentage > 50) {
      setIsAboveAverage(true)
    }
  }, [percentage])

  const handleBack = () => {
    navigate.goBack();
  };

  return (
    <S.Container isAboveAverage={isAboveAverage} isFullscreen={isFullscreen}>
      <S.InfoPercentage>
        {percentage.toString().replace(".", ",")}%
      </S.InfoPercentage>
      <S.InfoTitle>das refeições dentro da dieta</S.InfoTitle>
      {!isFullscreen && (
        <S.ButtonOpen onPress={onOpen}>
          <S.IconOpen
            color={isAboveAverage ? theme.COLORS.GREEN : theme.COLORS.RED}
          />
        </S.ButtonOpen>
      )}
      {isFullscreen && (
        <S.ButtonBack onPress={handleBack}>
          <S.IconBack
            color={isAboveAverage ? theme.COLORS.GREEN : theme.COLORS.RED}
          />
        </S.ButtonBack>
      )}
    </S.Container>
  );
}
