export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <section className="section pt-40 min-h-[70vh]">
      <p className="label mb-8">Get in touch</p>
      <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-cream font-normal balance">
        Let&rsquo;s <em className="italic text-gold">talk.</em>
      </h1>
      <p className="mt-10 max-w-xl font-body text-lg text-cream/70 leading-relaxed">
        Inquiry form coming soon. For now, reach out directly.
      </p>
    </section>
  );
}
