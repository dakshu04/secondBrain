import type { ReactElement } from "react"


interface ButtonProps {
    variant: "primary" | "secondary"
    text: string
    startIcon?: ReactElement
    onClick?: () => void
    fullWidth?: boolean
    loading?: boolean
    pointer?: boolean
}

const variantClasses = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-200 text-purple-600"
}

const defaultStyles = "px-4 py-2 rounded-md flex items-center"

export function Button({variant, text, startIcon, onClick, fullWidth, loading, pointer}: ButtonProps) {
    return (
        <>
            <button onClick={onClick} className={`${variantClasses[variant]} ${defaultStyles} ${fullWidth ? "w-full flex justify-center" : ""} ${loading ? "opacity-45" : ""} ${pointer ? "cursor-pointer" : ""}`}>
                <div className="pr-2">
                    {startIcon}
                </div>
                {text}   
            </button>
        </>
    )
}