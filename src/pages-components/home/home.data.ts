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

interface ISpecialCard {
    src: string,
    specialTitle: string,
    specialSecondaryText: string,
    bgColor: string,
    bgImg: string
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

export const special: ISpecialCard[] = [
    {
        src: "/images/snack.png",
        specialTitle: "Tasty Snack & Fast food",
        specialSecondaryText: "The flavour of something special",
        bgColor: "#FBF3E4",
        bgImg: "/images/snackBg.png"
    },
    {
        src: "/images/freshFruits.png",
        specialTitle: "Fresh Fruits & Vegetables",
        specialSecondaryText: "A healthy meal for every one",
        bgColor: "#FFE5EE",
        bgImg: "/images/freshFruitsBg.png"
    },
];
