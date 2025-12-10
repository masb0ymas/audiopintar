import { VariantProps } from 'class-variance-authority'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'

import { Button } from '~/components/ui/button'
import { Input, inputVariants } from '~/components/ui/input'

export default function PasswordInput({
  ...props
}: React.ComponentProps<'input'> & VariantProps<typeof inputVariants>) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative">
      <Input type={visible ? 'text' : 'password'} {...props} />
      <Button
        onClick={() => setVisible(!visible)} // Toggle visibility
        aria-label={visible ? 'Hide password' : 'Show password'}
        className="absolute end-0 top-1/2 me-1.5 h-7 w-7 -translate-y-1/2 bg-transparent!"
        variant="ghost"
        type="button"
        size="icon"
      >
        {visible ? (
          <EyeOff className="text-muted-foreground" />
        ) : (
          <Eye className="text-muted-foreground" />
        )}
      </Button>
    </div>
  )
}
