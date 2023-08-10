import { useState } from "react";
import * as S from "./style.ts";

interface IWalletItem {
  id: string;
  name: string;
  imgSrc: string;
  alt: string | null;
  buttonText?: string;
}

interface IWalletData {
  data: {
    title: string;
    listItems: IWalletItem[]; 
  }[];
  buttonText?: string;
}

interface IListItemCardProps {
  item: IWalletItem;
  buttonText?: string;
}

const ListItemCard = ({ item, buttonText }: IListItemCardProps) => {
  return (
    <S.StyledCol className='pt-3'>
      <S.StyledImage src={item?.imgSrc} alt={item.alt} />
      <S.StyleHeadText>{item?.name}</S.StyleHeadText>
      <p className='text-muted'>{item?.alt}</p>
      <S.StyledButton variant='dark'>{buttonText}</S.StyledButton>
    </S.StyledCol>
  );
};

export const WalletCards = ({ data, buttonText }: IWalletData) => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection((prevExpanded) =>
      prevExpanded === index ? null : index
    );
  };

  return (
    <>
      {data.map((sectionData, index) => (
        <S.WalletCardContainer key={`${index}-${Math.random()}`}>
          <div key={`${index}_${sectionData?.title}`} className='pt-4'>
            <S.StyledText>{sectionData?.title}</S.StyledText>
            <S.StyledRow xl={5} lg={4} md={3} sm={2} xs={1}>
              {sectionData?.listItems
                .slice(
                  0,
                  expandedSection === index ? sectionData.listItems.length : 10
                )
                .map((item) => (
                  <ListItemCard
                    key={item?.id}
                    item={item}
                    buttonText={buttonText}
                  />
                ))}
            </S.StyledRow>

            {sectionData.listItems.length > 10 && (
              <span>
                <S.StyledButton
                  variant='dark'
                  onClick={() => toggleSection(index)}
                >
                  {expandedSection === index ? "Show Less" : "Show More"}
                </S.StyledButton>
              </span>
            )}
          </div>
        </S.WalletCardContainer>
      ))}
    </>
  );
};

WalletCards.defaultProps = {
  buttonText: "Subscribe",
};
