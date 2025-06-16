import type { ReactElement } from "react";

export function SidebarItem({text, icon} : {
    text: string;
    icon: ReactElement;
}) {
    return (
        <>
            <div className="flex text-gray-700 pl-1 py-2 cursor-pointer hover:bg-gray-100 rounded-sm max-w-48 transition-all duration-200">
                <div className="pr-2">
                    {icon}
                </div>
                <div> 
                    {text}
                </div>
            </div>
        </>
    )
}