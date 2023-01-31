import { StyleProp, TextInput, TextInputProps } from "react-native";
import * as S from "./styles";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>;
    label?: string;
    styleLabel?: StyleProp<any>;
    styleContainer?: StyleProp<any>;
};

export function Input({ inputRef, styleContainer, label, styleLabel, ...rest }: Props) {
    return (
        <S.Container style={styleContainer}>
            <S.Label style={styleLabel}>{label}</S.Label>
            <S.InputContainer
                ref={inputRef}
                {...rest}
            />
        </S.Container>
    );
}