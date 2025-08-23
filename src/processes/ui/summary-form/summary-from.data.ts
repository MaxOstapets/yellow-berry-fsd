interface IInputs {
    placeholder: string
    id: string
    label: string
    name: string
}

interface IList {
    title: string
    price?: string
    individual: boolean,
    individualText?: string
}

export const inputs: IInputs[] = [
    {
        placeholder: "Country",
        id: "country",
        label: "Country",
        name: "country"
    },
    {
        placeholder: "Please select a region, state",
        id: "state",
        label: "State/Province",
        name: "state"
    },
    {
        placeholder: "Zip/Postal Code",
        id: "code",
        label: "Zip/Postal Code",
        name: "code"
    }
]

export const list: IList[] = [
    {
        title: "Sub-Total",
        price: "80.00",
        individual: false
    },
    {
        title: "Delivery Charges",
        price: "80.00",
        individual: false
    },
    {
        title: "Coupon Discount",
        individualText: "Apply Coupon",
        individual: true
    },
]