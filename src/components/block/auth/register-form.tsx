import { Link } from '@tanstack/react-router'
import React from 'react'

import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '~/components/ui/field'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'

import PasswordInput from '../form/password-input'

export default function RegisterForm({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Register your account</CardTitle>
          <CardDescription>Login with your Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="firstName">
                  First Name <abbr title="required">*</abbr>
                </FieldLabel>
                <Input id="firstName" type="text" placeholder="Input your first name" required />
              </Field>

              <Field>
                <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                <Input id="lastName" type="text" placeholder="Input your last name" />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">
                  Email <abbr title="required">*</abbr>
                </FieldLabel>
                <Input id="email" type="email" placeholder="Input your email" required />
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">
                    Password <abbr title="required">*</abbr>
                  </FieldLabel>
                  <a href="#" className="ml-auto text-xs underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <PasswordInput id="password" placeholder="Input your password" required />
              </Field>

              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Password <abbr title="required">*</abbr>
                </FieldLabel>
                <PasswordInput
                  id="confirmPassword"
                  placeholder="Input your confirm password"
                  required
                />
              </Field>

              <Field>
                <Button type="submit" className="cursor-pointer">
                  Register
                </Button>
                <FieldDescription className="text-center">
                  Do you have an account? <Link to="/login">Sign In</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <Link to="/terms">Terms of Service</Link> and{' '}
        <Link to="/privacy">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  )
}
