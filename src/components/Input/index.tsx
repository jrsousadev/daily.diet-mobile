import { StyleProp, TextInput, TextInputProps } from "react-native";
import * as S from "./styles";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  label?: string;
  styleLabel?: StyleProp<any>;
  styleContainer?: StyleProp<any>;
  isTouchable?: boolean;
  onPressTouchabel?: () => void;
};

export function Input({
  inputRef,
  styleContainer,
  label,
  isTouchable = false,
  styleLabel,
  onPressTouchabel,
  ...rest
}: Props) {
  return (
    <S.Container style={styleContainer}>
      <S.Label style={styleLabel}>{label}</S.Label>
      {isTouchable ? (
        <S.Touchable onPress={onPressTouchabel}>
          <S.InputContainer ref={inputRef} {...rest} editable={false} />
        </S.Touchable>
      ) : (
        <S.InputContainer ref={inputRef} {...rest} />
      )}
    </S.Container>
  );
}
