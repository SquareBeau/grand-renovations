import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free quote from Grand Renovations. Serving Dallas–Fort Worth, 8 AM – 6 PM, Monday through Saturday.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
            Get a free quote.
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Tell us about the project. We&apos;ll get back to you the same day
            during business hours.
          </p>

          <div className="mt-10 space-y-5 text-base">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Phone
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-1 block text-2xl font-semibold text-stone-950 hover:text-amber-700"
              >
                {SITE.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Email
              </p>
              <a
                href={SITE.emailHref}
                className="mt-1 block text-stone-800 hover:text-amber-700"
              >
                {SITE.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Hours
              </p>
              <p className="mt-1 text-stone-800">{SITE.hours}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Service area
              </p>
              <p className="mt-1 text-stone-800">
                {SITE.serviceArea.join(" · ")} & surrounding DFW
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-5 rounded-2xl border border-stone-200 bg-white p-7">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-stone-800"
            >
              Your name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 block h-11 w-full rounded-lg border border-stone-300 bg-white px-3 text-stone-900 outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-200"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-stone-800"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1 block h-11 w-full rounded-lg border border-stone-300 bg-white px-3 outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-stone-800"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 block h-11 w-full rounded-lg border border-stone-300 bg-white px-3 outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-200"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-stone-800"
            >
              Project type
            </label>
            <select
              id="service"
              name="service"
              defaultValue=""
              className="mt-1 block h-11 w-full rounded-lg border border-stone-300 bg-white px-3 outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-200"
            >
              <option value="" disabled>
                Choose one…
              </option>
              {SERVICES.map((service) => (
                <option key={service.slug} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Other">Something else</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-stone-800"
            >
              Tell us about the project
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 block w-full rounded-lg border border-stone-300 bg-white p-3 outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-200"
            />
          </div>

          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-stone-950 px-6 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
          >
            Send request
          </button>
          <p className="text-xs text-stone-500">
            Prefer the phone? Call {SITE.phone}.
          </p>
        </form>
      </div>
    </section>
  );
}
