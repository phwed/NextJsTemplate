import localFont from "next/font/local";

const lufga = localFont({
	src: [
		{
			path: "./fonts/LufgaThin.ttf",
			weight: "200",
		},
		{
			path: "./fonts/LufgaLight.ttf",
			weight: "300",
		},
		{
			path: "./fonts/LufgaRegular.ttf",
			weight: "400",
		},
		{
			path: "./fonts/LufgaMedium.ttf",
			weight: "500",
		},
		{
			path: "./fonts/LufgaSemiBold.ttf",
			weight: "600",
		},
		{
			path: "./fonts/LufgaBold.ttf",
			weight: "700",
		},
		{
			path: "./fonts/LufgaExtraBold.ttf",
			weight: "800",
		},
		{
			path: "./fonts/LufgaBlack.ttf",
			weight: "900",
		},
	],

	variable: "--font-lufga",
});


export { lufga };