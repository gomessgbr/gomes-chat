import z from 'zod'

export const signInFormSchema = z.object({
  email: z.string().email().min(1, { message: 'e-mail obrigatório' }),
  password: z.string().min(1, { message: 'senha é obrigatório' }),
})

export type signInFormType = z.infer<typeof signInFormSchema>
