type CustomLayoutStyle = {
    header: string,
    footer: string
    darkHeader?: boolean,
    darkFooter?: boolean,
}

export const customLayoutStyles: Record<string, CustomLayoutStyle> = {
    "/reviews/fall24/exam1": {
        header: "bg-[#DC5F00]",
        footer: "bg-black text-white",
        darkFooter: true,
    },
    "/reviews/fall24/exam2": {
        header: "bg-[#B3E8FF]",
        footer: "bg-gradient-to-b from-[#D9D9D9] to-[#fff8df]"
    },
}