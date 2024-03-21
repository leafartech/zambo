import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

interface ListItemProps {
    children: ReactNode
}

export default function ListItem({children}: ListItemProps) {
    return (
        <li className="flex items-center gap-2 text-wrap text-white rounded bg-[#101010] sm:text-xl px-4 py-4 my-full">
            <CheckCircleIcon className="sm:h-10 sm:w-10 h-6 w-6 text-orange" />
            <span>{children}</span>
        </li>
    )
}