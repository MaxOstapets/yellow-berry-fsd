interface IProps {
    item: string | { core: string, src: string };
}

export const FooterColumnListItem: React.FC<IProps> = ({ item }) => {
    const val = typeof item === "string"
    return (
        <li>
            {!val && <img src={item.src} />}
            <span>{val ? item : item.core}</span>
        </li>
    )
}