import { cn } from "@/lib/utils"

type PageHeadingProps = {
  title: string
  eyebrow?: string
  description?: string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  accentClassName?: string
  align?: "left" | "center"
}

export default function PageHeading({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  accentClassName,
  align = "center",
}: PageHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-4xl flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <h1
        className={cn(
          "bg-gradient-to-r from-purple-300 via-fuchsia-200 to-pink-300 bg-clip-text text-4xl font-bold uppercase leading-[1.05] tracking-[0.14em] text-transparent sm:text-5xl md:text-6xl lg:text-7xl",
          accentClassName,
          titleClassName,
        )}
      >
        {title}
      </h1>

      <span
        className={cn(
          "h-[2px] w-28 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400",
          accentClassName,
        )}
        aria-hidden="true"
      />

      {description ? (
        <p
          className={cn(
            "max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}