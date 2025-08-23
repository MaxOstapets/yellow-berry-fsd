interface IProductCards {
    specie: string,
    title: string,
    price?: number,
    newPrice?: number,
    oldPrice?: number,
    unit: number,
    src: string,
    freshness: boolean,
    discount: boolean,
    measurement: string
}

export const newArrivals: IProductCards[] = [
    {
        specie: "Juice",
        title: "Mixed Almond nuts juice Pack",
        price: 10,
        unit: 20,
        src: "./images/product.svg",
        freshness: true,
        discount: true,
        measurement: "g"
    },
    {
        specie: "Juice",
        title: "Mixed Almond nuts juice Pack2",
        price: 20,
        unit: 20,
        src: "./images/product.svg",
        freshness: true,
        discount: false,
        measurement: "g",
    },
    {
        specie: "Juice",
        title: "Mixed Almond nuts juice Pack3",
        price: 20,
        unit: 20,
        src: "./images/product.svg",
        freshness: true,
        discount: false,
        measurement: "g",
    },
    {
        specie: "Juice",
        title: "Mixed Almond nuts juice Pack4",
        price: 20,
        unit: 20,
        src: "./images/product.svg",
        freshness: true,
        discount: false,
        measurement: "g",
    },
]