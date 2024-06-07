import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import ImageMakert from "../../assets/cd-image-market.svg";
import CafeExpresso from "../../assets/cd-expresso.svg";
import { IntroMainContainer, IntroItems, IntroItemsGrid, IntroShoppingCartIcon, IntroSubtitle, IntroTitle, CoffeeCard, CoffeeCardImage, CoffeeCardTag, CoffeeCardContainer } from "./styles";

export function Home() {
  return (
    <>
      <main>
        <IntroMainContainer>
          <div>
            <IntroTitle>Encontre o café perfeito para qualquer hora do dia</IntroTitle>
            <IntroSubtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</IntroSubtitle>
            <IntroItemsGrid>
              <IntroItems>
                <IntroShoppingCartIcon>
                  <ShoppingCart weight="fill" />
                </IntroShoppingCartIcon>
                Compra simples e segura
              </IntroItems>
              <IntroItems>
                <IntroShoppingCartIcon>
                  <Package weight="fill" />
                </IntroShoppingCartIcon>
                Embalagem mantém o café intacto
              </IntroItems>
              <IntroItems>
                <IntroShoppingCartIcon>
                  <Timer weight="fill" />
                </IntroShoppingCartIcon>
                Entrega rápida e rastreada
              </IntroItems>
              <IntroItems>
                <IntroShoppingCartIcon>
                  <Coffee weight="fill" />
                </IntroShoppingCartIcon>
                O café chega fresquinho até você
              </IntroItems>
            </IntroItemsGrid>
          </div>
          <div>
            <img src={ImageMakert} alt="" />
          </div>
        </IntroMainContainer>
        <h1>Nossos Cafés</h1>
        <CoffeeCard>
          <CoffeeCardImage>
            <img src={CafeExpresso} alt="" />
          </CoffeeCardImage>
          <CoffeeCardContainer>
            <CoffeeCardTag>TRADICIONAL</CoffeeCardTag>
            <h1>Expresso Tradicional</h1>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <span>R$ 9,90</span>
            <button type="button">-</button>
            <span>99</span>
            <button type="button">+</button>
            <button type="button"><ShoppingCart weight="fill" /></button>
          </CoffeeCardContainer>
        </CoffeeCard>
      </main>
    </>
  );
}
