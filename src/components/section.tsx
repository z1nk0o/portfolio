export function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-20">
      <h2 className="mb-10 flex items-baseline gap-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        <span className="font-mono text-base font-normal text-emerald-600 dark:text-emerald-400">
          {number}.
        </span>
        {title}
        <span className="ml-4 hidden h-px flex-1 bg-zinc-200 sm:block dark:bg-zinc-800" />
      </h2>
      {children}
    </section>
  );
}
