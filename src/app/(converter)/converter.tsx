'use client'

import axios from "axios"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { CurrencySelector } from "@/components/ui/currency-selector"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const formSchema = z.object({
	amount: z.coerce.number().positive({ message: "Number larger than 0 required" }),
	currency: z.string()
})

export default function Converter() {
	const [bitcoinAmount, setBitcoinAmount] = useState(0)

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
		},
	})


	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		axios({
			method: 'get',
			url: `https://blockchain.info/tobtc?currency=${values.currency}&value=${values.amount}`,
			responseType: 'stream'
		})
			.then(function (response) {
				setBitcoinAmount(response.data)
			});
		console.log(values)
	}

	return (
		<main className="flex flex-col">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="amount"
						render={({ field }) => (
							<div className="">
								<FormItem className="flex flex-row items-center gap-5">
									<FormLabel className="mt-[8px] font-bold">Amount</FormLabel>
									<FormControl>
										<Input placeholder="0.00" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							</div>
						)}
					/>
					<FormField
						control={form.control}
						name="currency"
						render={({ field }) => (
							<FormItem className="flex flex-row items-center gap-5">
								<FormLabel className="font-bold">Currency</FormLabel>
								<FormControl>
									<CurrencySelector {...field as any} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex flex-row gap-10 mt-2">
						<Button type="submit">Convert</Button>
						<div className="mt-0.5 text-3xl">
							{bitcoinAmount}
						</div>
					</div>
				</form>
			</Form>
		</main>
	)
}
