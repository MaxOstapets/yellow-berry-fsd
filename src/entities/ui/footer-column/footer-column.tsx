import { FooterColumnListItem } from "@/shared/ui";

interface IFooterColumn {
    item: string[] | { core: string, src: string }[];
    title: string;
}

export const FooterColumn: React.FC<IFooterColumn> = ({ item, title }) => {
    return (
        <div>
            <span className="font-serif font-bold text-lg leading-[21px] text-gray-4 w-[195px] h-[35px] border-b border-gray-8 flex justify-start items-start">
                {title}
            </span>
            <ul className="flex justify-center items-start flex-col gap-4">
                {item.map((el, index) => (
                    <FooterColumnListItem item={el} key={index} />
                ))}
            </ul>
        </div>
    )
}