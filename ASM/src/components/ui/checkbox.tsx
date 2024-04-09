import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "nopeer noh-4 now-4 noshrink-0 norounded-sm noborder noborder-primary noring-offset-background focus-visible:nooutline-none focus-visible:noring-2 focus-visible:noring-ring focus-visible:noring-offset-2 disabled:nocursor-not-allowed disabled:noopacity-50 data-[state=checked]:nobg-primary data-[state=checked]:notext-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("noflex noitems-center nojustify-center notext-current")}
    >
      <Check className="noh-4 now-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
