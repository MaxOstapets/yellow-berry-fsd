interface IPlaceholder {
    placeholder: string,
    height: string | number
}

export const data: IPlaceholder[] = [
    {
        placeholder: "First name",
        height: "auto"
    },
    {
        placeholder: "Last name",
        height: "auto"
    },
    {
        placeholder: "Email",
        height: "auto"
    },
    {
        placeholder: "Phone number",
        height: "auto"
    },
    {
        placeholder: "Comment",
        height: "200px"
    }
]