import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useFormContext } from "react-hook-form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

export function CurrencySelector() {
	const currencyArray = [
		"ARS",
		"AUD",
		"BRL",
		"CAD",
		"CHF",
		"CLP",
		"CNY",
		"CZK",
		"DKK",
		"EUR",
		"GBP",
		"HKD",
		"HRK",
		"HUF",
		"INR",
		"ISK",
		"JPY",
		"KRW",
		"NZD",
		"PLN",
		"RON",
		"RUB",
		"SEK",
		"SGD",
		"THB",
		"TRY",
		"TWD",
		"USD",
	];
	const { setValue, getValues } = useFormContext();
	const [currency, setCurrency] = useState(getValues("currency") || "");

	useEffect(() => {
		setCurrency(getValues("currency") || "");
	}, [getValues]);


	const handleCurrencyChange = (selectedCurrency: string) => {
		setValue("currency", selectedCurrency);
		setCurrency(selectedCurrency);
	};


	return (
		<main>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button variant="secondary" size="lg" className="">
						{currency || "Select Currency"}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="center">
					<ScrollArea className="h-[200px]">
						{currencyArray.map((currency) => (
							<DropdownMenuItem
								className="justify-center"
								key={currency}
								onClick={() => handleCurrencyChange(currency)}
							>
								{currency}
							</DropdownMenuItem>
						))}
					</ScrollArea>
				</DropdownMenuContent>
			</DropdownMenu>
		</main>
	);
}


// If using selector
// <main>
// <Select>
// 	<SelectTrigger>
// 		<SelectValue placeholder="Select a currency" />
// 	</SelectTrigger>
// 	<SelectContent>
// 		<ScrollArea className="h-[200px]">
// 			{currencyArray.map((currency) => (
// 				<SelectItem
// 					className=""
// 					value={currency}
// 					key={currency}
// 					onClick={() => handleCurrencyChange(currency)}
// 				>
// 					{currency}
// 				</SelectItem>
// 			))}
// 		</ScrollArea>
// 	</SelectContent>
// </Select>
// </main>
