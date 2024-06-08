import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

import {
  CoffeeCardAddItem,
  CoffeeCardContainer,
  CoffeeCardDescrition,
  CoffeeCardPrice,
  CoffeeCardPriceContainer,
  CoffeeCardQuantityContainer,
  CoffeeCardTag,
  CoffeeCardTagContainer,
  CoffeeCardTitle,
  CoffeeCardTitleDescription,
} from "./style";

interface CoffeeProps {
  id: number;
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

export function CoffeeCard({
  image,
  tags,
  name,
  description,
  price,
}: CoffeeProps) {
  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />
      <CoffeeCardDescrition>
        <CoffeeCardTagContainer data-testid={"coffee_tags"}>
          {tags.map((tag) => {
            return (
              <CoffeeCardTag
                key={tag}
                data-testid={`coffee_tag_${tag.toLocaleLowerCase()}`}
              >
                {tag.toLocaleUpperCase()}
              </CoffeeCardTag>
            );
          })}
        </CoffeeCardTagContainer>
        <CoffeeCardTitle data-testid={"coffee_name"}>{name}</CoffeeCardTitle>
        <CoffeeCardTitleDescription data-testid={"coffee_description"}>
          {description}
        </CoffeeCardTitleDescription>
        <CoffeeCardPriceContainer>
          <CoffeeCardPrice>
            <small>R$</small>{" "}
            <strong data-testid="coffee_price">{price}</strong>
          </CoffeeCardPrice>
          <CoffeeCardQuantityContainer>
            <button type="button" data-testid="coffee_minus_btn">
              <Minus size={14} />
            </button>
            <span>1</span>
            <button type="button" data-testid="coffee_plus_btn">
              <Plus size={14} />
            </button>
          </CoffeeCardQuantityContainer>
          <CoffeeCardAddItem type="button" data-testid="coffee_purchase">
            <ShoppingCart weight="fill" />
          </CoffeeCardAddItem>
        </CoffeeCardPriceContainer>
      </CoffeeCardDescrition>
    </CoffeeCardContainer>
  );
}
