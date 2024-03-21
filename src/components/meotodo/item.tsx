import { ElementType } from "react";

interface ItemProps {
    Icon: ElementType
    title: String
    text: string
}

export default function Item({ Icon, text, title }: ItemProps) {
    return (
        <div className="relative flex flex-col items-start bg-white shadow-xl rounded-xl p-6 pt-16">
            <div className="rounded-md bg-orange-3 p-4 absolute -top-4">
                <Icon className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="text-2xl font-semibold">{title}</h4>
                <p className="text-base">{text}</p>
            </div>
        </div>
    )
}