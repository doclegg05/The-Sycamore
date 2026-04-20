export default function Footer() {
  return (
    <footer className="section-dark section border-t border-ink-elevated">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-display text-2xl text-cream">Spruce Ridge Properties</p>
          <p className="label text-stone mt-4">Est. 2026</p>
        </div>
        <div>
          <p className="label text-stone">
            &copy; {new Date().getFullYear()} Spruce Ridge Properties, LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
