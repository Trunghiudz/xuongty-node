import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "noflex nocursor-default noselect-none noitems-center norounded-sm nopx-2 nopy-1.5 notext-sm nooutline-none focus:nobg-accent data-[state=open]:nobg-accent",
      inset && "nopl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="noml-auto noh-4 now-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "noz-50 nomin-w-[8rem] nooverflow-hidden norounded-md noborder nobg-popover nop-1 notext-popover-foreground noshadow-lg data-[state=open]:noanimate-in data-[state=closed]:noanimate-out data-[state=closed]:nofade-out-0 data-[state=open]:nofade-in-0 data-[state=closed]:nozoom-out-95 data-[state=open]:nozoom-in-95 data-[side=bottom]:noslide-in-from-top-2 data-[side=left]:noslide-in-from-right-2 data-[side=right]:noslide-in-from-left-2 data-[side=top]:noslide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "noz-50 nomin-w-[8rem] nooverflow-hidden norounded-md noborder nobg-popover nop-1 notext-popover-foreground noshadow-md data-[state=open]:noanimate-in data-[state=closed]:noanimate-out data-[state=closed]:nofade-out-0 data-[state=open]:nofade-in-0 data-[state=closed]:nozoom-out-95 data-[state=open]:nozoom-in-95 data-[side=bottom]:noslide-in-from-top-2 data-[side=left]:noslide-in-from-right-2 data-[side=right]:noslide-in-from-left-2 data-[side=top]:noslide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "norelative noflex nocursor-default noselect-none noitems-center norounded-sm nopx-2 nopy-1.5 notext-sm nooutline-none notransition-colors focus:nobg-accent focus:notext-accent-foreground data-[disabled]:nopointer-events-none data-[disabled]:noopacity-50",
      inset && "nopl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "norelative noflex nocursor-default noselect-none noitems-center norounded-sm nopy-1.5 nopl-8 nopr-2 notext-sm nooutline-none notransition-colors focus:nobg-accent focus:notext-accent-foreground data-[disabled]:nopointer-events-none data-[disabled]:noopacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="noabsolute noleft-2 noflex noh-3.5 now-3.5 noitems-center nojustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="noh-4 now-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "norelative noflex nocursor-default noselect-none noitems-center norounded-sm nopy-1.5 nopl-8 nopr-2 notext-sm nooutline-none notransition-colors focus:nobg-accent focus:notext-accent-foreground data-[disabled]:nopointer-events-none data-[disabled]:noopacity-50",
      className
    )}
    {...props}
  >
    <span className="noabsolute noleft-2 noflex noh-3.5 now-3.5 noitems-center nojustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="noh-2 now-2 nofill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "nopx-2 nopy-1.5 notext-sm nofont-semibold",
      inset && "nopl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("no-mx-1 nomy-1 noh-px nobg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("noml-auto notext-xs notracking-widest noopacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
