interface IDeals {
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

export const deals: IDeals[] = [
    {
        specie: "Juice",
        title: "Mixed Almond nuts juice Pack",
        newPrice: 30,
        oldPrice: 47,
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