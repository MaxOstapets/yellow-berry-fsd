interface IBrandsDirectory {
    title: string,
    items: string[],
}

interface IColumns {
    title: string,
    items: string[] | { src: string, core: string }[],
    icons?: boolean,
    src?: string,
    socialMedias?: string[]
}

export const brandsDirectory: IBrandsDirectory[] = [
    {
        title: "Jewellery",
        items: ["Necklace", "Earrings", "Couple Rings", "Pendants", "Crystal", "Bangles", "Bracelets", "Nose Pin", "Chain Earrings", "Couple Rings"]
    },
    {
        title: "Fashion",
        items: ["T-Shirt", "Short & Jeans", "Jacket", "Dress & Frock", "Inner wear", "Hosiery"]
    },
    {
        title: "Footwear",
        items: ["Sneakers", "Boots", "Sandals", "Flip Flops", "Heels", "Loafers", "Slippers", "Clogs", "Sports Shoes", "Formal Shoes"]
    },
    {
        title: "Cosmetics",
        items: ["Shampoo", "Body Wash", "Face Wash", "Makeup Kit", "Liner", "Lipstick", "Perfume", "Body Shop", "Scrub", "Hair Gel", "Hair Colors", "Hair Dye", "Sunscreen", "Skin Lotion", "Liner", "Lipstick"]
    }
]

export const columns: IColumns[] = [
    {
        title: "Category",
        icons: false,
        items: ["Dairy & Milk", "Snack & Spice", "Fast Food", "Juice & Drinks", "Bakery", "Seafood"]
    },
    {
        title: "Company",
        icons: false,
        items: ["About us", "Delivery", "Legal Notice", "Terms & conditions", "Secure payment", "Contact us"]
    },
    {
        title: "Account",
        icons: false,
        items: ["Sign In", "View Cart", "Return Policy", "Become a Vendor", "Affiliate Program", "Payments"]
    },
    {
        title: "Contact",
        icons: true,
        items: [
            {
                src: "./images/locationIcon.png",
                core: "971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101."
            },
            {
                src: "./images/whatsApp.png",
                core: "+38 (099) 134 9840"
            },
            {
                src: "./images/email.png",
                core: "yellowBerry@gmail.com"
            },
        ],
        socialMedias: ["./images/facebook.png", "./images/instagram.png", "./images/twitter.png", "./images/inIcon.png"]
    }
]