import Stripe from 'stripe';
import { db } from "@/lib/db";
import { describe } from 'node:test';
import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-09-30.acacia",
})

export async function POST(req:Request){
    try {
        const {userId} = auth();
        const user = await currentUser();
        if(!userId){
            return new NextResponse('Unauthorized', { status: 401 });
        }
        const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
            {
                quantity: 1,
                price_data: {
                    currency: "EUR",
                product_data: {
                    name: '10.000 AI Credit',
                    description: 'all €10 worth of credit',
                },
                unit_amount: 1000,
                },
            },
        ];
        let purchase = await db.purchase.create({
            data: {
                userId: userId,
                credit: 10000,
            },
        });
        let stripeCustomer = await db.stripeCustomer.findUnique({
            where: {
                userId: userId,
            },
            select: {
                stripeCustomerId: true,
            },
        });
        if (!stripeCustomer){
            const customer = await stripe.customers.create({
                email: user?.emailAddresses[0].emailAddress,
            });
            let stripeCustomer = await db.stripeCustomer.create({
                data: {
                    userId: userId,
                    stripeCustomerId: customer.id,
                },
            });
        }
        const session = await stripe.checkout.sessions.create({
            customer: stripeCustomer?.stripeCustomerId,
            line_items,
            mode: "payment",
            success_url: `http://localhost:3000/dashboard`,
            cancel_url: `http://localhost:3000/`,
            metadata: {
                userId: userId,
            }
        });
        return NextResponse.json({ url: session.url });
    }catch(error) {
        return new NextResponse('Internal Error', { status: 500 });
    }
    return new NextResponse('Success', { status: 200});
}
