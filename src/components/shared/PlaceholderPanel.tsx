type PlaceholderPanelProps = {
  title: string
  description: string
  bullets: string[]
}

export function PlaceholderPanel({
  title,
  description,
  bullets,
}: PlaceholderPanelProps) {
  return (
    <section className="panel p-24 md:p-32">
      <h3 className="font-display text-h3 font-semibold tracking-tight text-text-primary">
        {title}
      </h3>
      <p className="mt-12 max-w-3xl text-body-md text-text-secondary">
        {description}
      </p>
      <ul className="mt-24 grid gap-12 text-body-sm text-text-secondary sm:grid-cols-3">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="rounded-xl bg-surface-muted px-16 py-12"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </section>
  )
}
