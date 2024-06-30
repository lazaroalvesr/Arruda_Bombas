import { Poppins } from "next/font/google";

export const PoppinsRegular = Poppins({
    weight: [ '400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--type-poppins-regular'
})

export const PoppinsBold = Poppins({
    weight: [ '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--type-poppins-bold'
})