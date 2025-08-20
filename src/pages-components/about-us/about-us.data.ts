interface IBlueBerryList {
    count: string | number
    itemDescriptor: string
}

interface IMember {
    src: string
    personName: string
    post: string
}

export const blueBerryList: IBlueBerryList[] = [
    {
        count: 200,
        itemDescriptor: "Vendors"
    },
    {
        count: "654k",
        itemDescriptor: "Sales"
    },
    {
        count: "587k",
        itemDescriptor: "Customers"
    },
]

export const members: IMember[] = [
    {
        src: "./images/elenaWilson.svg",
        personName: "Elena Wilson",
        post: "Manager"
    },
    {
        src: "./images/marioBisop.svg",
        personName: "Mario Bisop",
        post: "CEO"
    },
    {
        src: "./images/mariaMargret.svg",
        personName: "Maria Margret",
        post: "Co-Founder"
    },
    {
        src: "./images/juliatHilson.svg",
        personName: "Juliat Hilson",
        post: "Team Leader"
    },
]