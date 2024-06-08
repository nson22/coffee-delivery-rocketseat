import { CoffeeCardHeader, CoffeeCardGrid } from "./styles";
import { CoffeeCard } from "./components/CoffeeCard";
import { IntroHome } from "./components/IntroHome";

export interface Coffee {
  id: number;
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

const coffees: Coffee[] = [
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-expresso.svg",
    tags: ["tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-americano.svg",
    tags: ["tradicional"],
    name: "Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-expresso-cremoso.svg",
    tags: ["tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-cha-gelado.svg",
    tags: ["tradicional", "gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-cafe-com-leite.svg",
    tags: ["tradicional", "leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-latte.svg",
    tags: ["tradicional", "leite"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-capuccino.svg",
    tags: ["tradicional", "leite"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-macchiato.svg",
    tags: ["tradicional", "leite"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-mochaccino.svg",
    tags: ["tradicional", "leite"],
    name: "Mochaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-chocolate-quente.svg",
    tags: ["especial"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-cubano.svg",
    tags: ["especial", "alcoólico", "gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-havaiano.svg",
    tags: ["especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-arabe.svg",
    tags: ["especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
  },
  {
    id: new Date().getTime(),
    image: "src\\assets\\cd-irlandes.svg",
    tags: ["especial", "alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
  },
];

export function Home() {
  return (
    <main>
      <IntroHome />
      <CoffeeCardHeader>Nossos cafés</CoffeeCardHeader>
      <CoffeeCardGrid>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              image={coffee.image}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              tags={coffee.tags}
            />
          );
        })}
      </CoffeeCardGrid>
    </main>
  );
}
