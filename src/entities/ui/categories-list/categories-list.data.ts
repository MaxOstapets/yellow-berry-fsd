interface IData {
    src: string,
    category: string,
    count: number,
    bg: string
}

export const data: IData[] = [
    {
        src: "./images/coldDrinksIcon.png",
        category: "Cold Drinks",
        count: 49,
        bg: "#F6EFFE"
    },
    {
        src: "./images/bakeryIcon.png",
        category: "Bakery",
        count: 30,
        bg: "#F9FCE3"
    },
    {
        src: "./images/vegetablesIcon.png",
        category: "Vegetables",
        count: 38,
        bg: "#FFF0F1"
    },
    {
        src: "./images/fruitsIcon.png",
        category: "Fruits",
        count: 52,
        bg: "#DDFFF2"
    }
]