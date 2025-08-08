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

interface ISpecialCard {
    src: string,
    specialTitle: string,
    specialSecondaryText: string,
    bgColor: string,
    bgImg: string
}

export const deals: IProductCards[] = [
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

export const newArrivals: IProductCards[] = [
    {
        specie: "Snacks",
        title: "Ground Nuts Oil Pack",
        newPrice: 15,
        oldPrice: 30,
        unit: 500,
        src: "./images/product.svg",
        freshness: false,
        discount: true,
        measurement: "g"
    },
    {
        specie: "Juice",
        title: "Organic Litchi Juice Pack",
        newPrice: 20,
        oldPrice: 25,
        unit: 100,
        src: "./images/product.svg",
        freshness: false,
        discount: true,
        measurement: "ml"
    },
    {
        specie: "Chips",
        title: "Crunchy Banana Chips",
        newPrice: 3,
        oldPrice: 10,
        unit: 100,
        src: "./images/product.svg",
        freshness: false,
        discount: true,
        measurement: "g"
    },
    {
        specie: "Chips",
        title: "Crunchy Potato Chips",
        price: 38,
        unit: 400,
        src: "./images/product.svg",
        freshness: true,
        discount: false,
        measurement: "g"
    },
    {
        specie: "Snacks",
        title: "Black Pepper Spice pack",
        price: 15,
        unit: 500,
        src: "./images/product.svg",
        freshness: false,
        discount: false,
        measurement: "g"
    },
    {
        specie: "Juice",
        title: "Small Cardamom Spice Pack",
        newPrice: 20,
        oldPrice: 35,
        unit: 200,
        src: "./images/product.svg",
        freshness: true,
        discount: true,
        measurement: "ml"
    },
    {
        specie: "Chips",
        title: "Chilli Flakes Pack",
        newPrice: 13,
        oldPrice: 20,
        unit: 100,
        src: "./images/product.svg",
        freshness: false,
        discount: true,
        measurement: "g"
    },
    {
        specie: "Chips",
        title: "Tomato Ketchup Pack",
        price: 30,
        unit: 420,
        src: "./images/product.svg",
        freshness: false,
        discount: false,
        measurement: "g"
    },
]