let message: string = "Hello, world!";
const heading = document.createElement("h1");
heading.textContent = message;
document.body.appendChild(heading);

interface Product {
  id: number;
  name: string;
  price: number;
  test: boolean;
}

const getProduct = (id: number) => {
  const product: Product = {
    id,
    name: "iPhone",
    price: 40000,
    test: false,
  };
  return product;
};

const pre = document.createElement("pre");
pre.innerText = JSON.stringify(getProduct(7), null, 2);
document.body.appendChild(pre);
