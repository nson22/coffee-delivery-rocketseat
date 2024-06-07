import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import ImageMakert from "../../assets/cd-image-market.svg";
import {
  IntroMainContainer,
  IntroItems,
  IntroItemsGrid,
  IntroShoppingCartIcon,
  IntroSubtitle,
  IntroTitle,
  CoffeeCardsList,
} from "./styles";
import { CoffeeCard } from "./components/CoffeeCard";

export function Home() {
  return (
    <>
      <main>
        <IntroMainContainer>
          <div>
            <IntroTitle>
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <IntroSubtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </IntroSubtitle>
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
        <CoffeeCardsList>
          <h1>Nossos Cafés</h1>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeCardsList>
      </main>
    </>
  );
}
