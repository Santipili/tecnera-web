
export default function Button({
    label, type
}: Readonly<{
    label: string, type: string
}>) {
    
    return (
        <div className="flex flex-row justify-center items-center h-12 w-28 border-2 border-secondary rounded-full p-4 px-6 hover:cursor-pointer  hover:bg-secondary/5 hover:border-focus">
            <button className=" text-primary font-medium hover:cursor-pointer ">{label}</button>
        </div>
    );
}