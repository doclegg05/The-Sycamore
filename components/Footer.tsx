export default function Footer() {
  return (
    <footer className="border-t border-ink-elevated px-6 md:px-12 py-10">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-display italic text-2xl text-gold">Spruce Ridge Lodge</p>
          <p className="label-muted mt-2">The Sycamore · West Virginia</p>
        </div>
        <div className="md:text-right">
          <p className="label-muted">
            &copy; {new Date().getFullYear()} Spruce Ridge Lodge, LLC
          </p>
          <p className="label-muted mt-1 opacity-60">Issue 001 · MMXXVI</p>
        </div>
      </div>
    </footer>
  );
}
