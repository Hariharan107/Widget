import * as S from "./style.ts";

interface IWalletItem {
  name: string;
  type: string;
  imgSrc: string;
  alt: string;
  buttonText?: string;
}
interface IWalletData {
  walletData: IWalletItem[];
  buttonText?: string;
}

export const WalletCards = ({ walletData, buttonText }: IWalletData) => {
  return (
    <S.WalletCardContainer>
      <S.StyledRow xl={5} lg={4} md={3} sm={2} xs={1}>
        {walletData.map(({ name, type, imgSrc, alt }, index) => (
          <S.StyledCol   key={index} className="pt-5">
            <S.StyledImage src={imgSrc} alt={alt} />
            <S.StyleHeadText>{name}</S.StyleHeadText>
            <p className='text-muted'>{type}</p>
            <S.StyledButton>{buttonText}</S.StyledButton>
          </S.StyledCol>
        ))}
      </S.StyledRow>
    </S.WalletCardContainer>
  );
};

WalletCards.defaultProps = {
  buttonText: "Subscribe",
};
