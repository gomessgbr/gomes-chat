'use client';
import { useId } from "react";

import { Input, Button, Label } from "@/components/ui"
import {
  Form,
} from "@/components/ui/form"
import { useForm } from "react-hook-form";
import { signInFormSchema, signInFormType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function SignInForm(){
  const id = useId();
  const form = useForm<signInFormType>({
    mode: "onSubmit",
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })



const handleSubmit = (data: signInFormType) => {
  console.log(data)
}
  return(
   <Form {...form}>
    <form id={id}  onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-4">
      <Label htmlFor={id} >E-mail</Label>
      <Input id={id} type="email" {...form.register("email")} placeholder="Digite o e-mail"/>
      <Label htmlFor={id}>Senha</Label>
      <Input id={id} type="password" {...form.register("password")} placeholder="Digite sua senha" />
      <Button type="submit" form={id} disabled={!form.formState.isDirty || !form.formState.isValid}>Logar</Button>
    </form>
   </Form>

   
  )
}