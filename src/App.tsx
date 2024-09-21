import { useRef, useState } from "react";
import "./App.css";

type productsType = {
  name: string;
  price: number;
};
function App() {
  const [products, setProducts] = useState<productsType[]>([]);
  const inputName = useRef<HTMLInputElement | null>(null);
  const inputNumber = useRef<HTMLInputElement | null>(null);

  function AddProduct() {
    if (inputName.current && inputNumber.current) {
      setProducts([
        ...products,
        {
          name: inputName.current.value,
          price: Number(inputNumber.current.value),
        },
      ]);
      inputName.current.value = "";
      inputNumber.current.value = "";
    }
  }

  const Prices = () => {
    let prices = 0;
    for (let i = 0; i < products.length; i++) {
      prices = prices + products[i].price;
    }
    return prices;
  };

  return (
    <div>
      <div className="form">
        <input type="text" ref={inputName} />
        <input type="number" ref={inputNumber} />
        <button
          onClick={() => {
            AddProduct();
          }}
        >
          send
        </button>
      </div>
      <ul>
        {products?.map((product, i) => {
          return (
            <li key={i}>
              name: {product.name},- price: {product.price}
            </li>
          );
        })}
      </ul>

      <div>{Prices()}</div>
    </div>
  );
}

export default App;
