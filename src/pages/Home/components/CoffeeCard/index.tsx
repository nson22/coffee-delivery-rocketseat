import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import CafeExpresso from "../../../../assets/cd-expresso.svg";

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

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={CafeExpresso} alt="" />
      <CoffeeCardDescrition>
        <CoffeeCardTagContainer>
          <CoffeeCardTag>TRADICIONAL</CoffeeCardTag>
          <CoffeeCardTag>COM LEITE</CoffeeCardTag>
        </CoffeeCardTagContainer>
        <CoffeeCardTitle>Expresso Tradicional</CoffeeCardTitle>
        <CoffeeCardTitleDescription>
          O tradicional café feito com água quente e grãos moídos
        </CoffeeCardTitleDescription>
        <CoffeeCardPriceContainer>
          <CoffeeCardPrice>
            <small>R$</small> <strong>9,90</strong>
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
