interface InputProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reference?: any
    placeholder: string
}

export function Input({ reference, placeholder }: InputProps) {
    return (
        <div>
            <input
                placeholder={placeholder}
                type="text"
                className="px-4 py-2 border rounded m-2"
                ref={reference}
            />
        </div>
    );
}
