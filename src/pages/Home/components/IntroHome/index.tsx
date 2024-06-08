import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";
import { IntroItems, IntroMain, IntroMainWrapper, IntroShoppingCartIcon, ItemsGrid } from "./style";
import ImageMakert from "../../../../assets/cd-image-market.svg";


export function IntroHome() {
    return (
        <IntroMainWrapper>
            <IntroMain>
                <h1>
                    Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p>
                    Com o Coffee Delivery você recebe seu café onde estiver, a
                    qualquer hora
                </p>
                <ItemsGrid>
                    <IntroItems>
                        <IntroShoppingCartIcon>
                            <ShoppingCart weight="fill" />
                        </IntroShoppingCartIcon>
                        <span>Compra simples e segura</span>
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
                        <span>Entrega rápida e rastreada</span>
                    </IntroItems>
                    <IntroItems>
                        <IntroShoppingCartIcon>
                            <Coffee weight="fill" />
                        </IntroShoppingCartIcon>
                        <span>O café chega fresquinho até você</span>
                    </IntroItems>
                </ItemsGrid>
            </IntroMain>
            <div>
                <img src={ImageMakert} alt="" />
            </div>
        </IntroMainWrapper>
    )
}