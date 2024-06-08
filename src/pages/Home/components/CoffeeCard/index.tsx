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
  id: number
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function CoffeeCard({ image, tags, name, description, price }: CoffeeProps) {
  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />
      <CoffeeCardDescrition>
        <CoffeeCardTagContainer>
          {tags.map((tag) => {
            return <CoffeeCardTag key={tag}>{tag.toLocaleUpperCase()}</CoffeeCardTag>
          })}
        </CoffeeCardTagContainer>
        <CoffeeCardTitle>{name}</CoffeeCardTitle>
        <CoffeeCardTitleDescription>
          {description}
        </CoffeeCardTitleDescription>
        <CoffeeCardPriceContainer>
          <CoffeeCardPrice>
            <small>R$</small> <strong>{price}</strong>
          </CoffeeCardPrice>
          <CoffeeCardQuantityContainer>
            <button type="button">
              <Minus size={14} />
            </button>
            <span>1</span>
            <button type="button">
              <Plus size={14} />
            </button>
          </CoffeeCardQuantityContainer>
          <CoffeeCardAddItem type="button">
            <ShoppingCart weight="fill" />
          </CoffeeCardAddItem>
        </CoffeeCardPriceContainer>
      </CoffeeCardDescrition>
    </CoffeeCardContainer>
  );
}
