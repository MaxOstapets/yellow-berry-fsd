interface IData {
    src: string,
    upLine: string | boolean,
    bottomLine: string,
    count: boolean,
    number: number | boolean,
    alt: string
}

export const data: IData[] = [
    {
        src: "./images/userIcon.png",
        upLine: "Account",
        bottomLine: "Login",
        count: false,
        alt: "user",
        number: false
    },
    {
        src: "./images/starIcon.png",
        upLine: false,
        number: 3,
        bottomLine: "Wishlist",
        count: true,
        alt: "star"
    },
    {
        src: "./images/cartIcon.png",
        upLine: false,
        number: 4,
        bottomLine: "Cart",
        count: true,
        alt: "cart"
    },

]