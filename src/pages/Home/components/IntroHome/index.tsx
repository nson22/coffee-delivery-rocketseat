import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";
import {
  IntroCoffeeIcon,
  IntroItems,
  IntroMain,
  IntroMainWrapper,
  IntroPackageIcon,
  IntroShoppingCartIcon,
  IntroTimerIcon,
  ItemsGrid,
} from "./style";
import ImageMakert from "../../../../assets/cd-image-market.svg";

export function IntroHome() {
  return (
    <IntroMainWrapper>
      <IntroMain>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ItemsGrid>
          <IntroItems>
            <IntroShoppingCartIcon>
              <ShoppingCart weight="fill" />
            </IntroShoppingCartIcon>
            <span>Compra simples e segura</span>
          </IntroItems>
          <IntroItems>
            <IntroPackageIcon>
              <Package weight="fill" />
            </IntroPackageIcon>
            Embalagem mantém o café intacto
          </IntroItems>
          <IntroItems>
            <IntroTimerIcon>
              <Timer weight="fill" />
            </IntroTimerIcon>
            <span>Entrega rápida e rastreada</span>
          </IntroItems>
          <IntroItems>
            <IntroCoffeeIcon>
              <Coffee weight="fill" />
            </IntroCoffeeIcon>
            <span>O café chega fresquinho até você</span>
          </IntroItems>
        </ItemsGrid>
      </IntroMain>
      <div>
        <img src={ImageMakert} alt="" />
      </div>
    </IntroMainWrapper>
  );
}
