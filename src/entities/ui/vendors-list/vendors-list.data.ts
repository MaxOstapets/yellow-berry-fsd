interface IVendorsList {
    title: string
    sales: number
    fruits: number
    vegetables: number
    snacks: number,
    individual: boolean
}

export const data: IVendorsList[] = [
    {
        title: "Mira Fashion Pvt.Ltd",
        sales: 590,
        fruits: 30,
        vegetables: 20,
        snacks: 17,
        individual: true
    },
    {
        title: "Eelna Fashion Pvt.Ltd",
        sales: 428,
        fruits: 8,
        vegetables: 15,
        snacks: 4,
        individual: false
    },
    {
        title: "Mario Fashion Pvt.Ltd",
        sales: 102,
        fruits: 16,
        vegetables: 42,
        snacks: 18,
        individual: false
    },
    {
        title: "Maria Fashion Pvt.Ltd",
        sales: 210,
        fruits: 2,
        vegetables: 10,
        snacks: 3,
        individual: false
    },
]