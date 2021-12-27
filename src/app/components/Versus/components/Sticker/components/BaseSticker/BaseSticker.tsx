import { S } from './BaseSticker.styled';

export type StickerProps = {
   color: string;
   children: React.ReactNode;
};

export const BaseSticker = ({ children, color }: StickerProps): JSX.Element => (
   <S.BaseSticker color={color}>{children}</S.BaseSticker>
);
