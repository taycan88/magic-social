"use client";
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Upgrade = () => {
  const router = useRouter(); // Mover useRouter aquí

  const handleOnClick = async () => {
    try {
      const response = await axios.post("/api/upgrade/checkout");
      // Redirigir al usuario a la URL de Stripe
      router.push(response.data.url);
    } catch (error) {
      console.error("Error during checkout", error);
    }
  };

  return (
    <div className='mx-5 py-2'>
      <div className='mt-5 py-6 px-4 bg-white rounded'>
        <h2 className='font-medium'>Upgrade Credit</h2>
      </div>
      <div className='mt-5 py-6 px-4 rounded'>
        <Card className="w-[350px] flex flex-col mx-auto">
          <CardHeader>
            <CardTitle>€10 One-Time Purchase</CardTitle>
            <CardDescription>10.000 AI Credit</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <p className='flex my-2 gap-2'>
                <Check /> 100.000 words/purchase
              </p>
              <p className='flex my-2 gap-2'>
                <Check /> All Template Access
              </p>
              <p className='flex my-2 gap-2'>
                <Check /> Retain All History
              </p>
            </div>
            <Button className='mt-5' onClick={handleOnClick}>Purchase</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upgrade;
