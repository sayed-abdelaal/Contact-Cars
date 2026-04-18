import { ContactCarsLogo } from '@/components/shared/ContactCarsLogo'
import { ChevronDownIcon, MailIcon } from '@/components/shared/icons'

const footerColumns = [
  {
    title: 'Quick Links',
    items: [
      'New Cars',
      'Used Cars',
      'New Motorcycles',
      'Used Motorcycles',
      'Dealers & Showrooms',
      'Contact Catalogue',
    ],
  },
  {
    title: 'Services',
    items: ['Car Finance', 'Car Insurance', 'Car Valuation'],
  },
  {
    title: 'About Us',
    items: [
      'About contactcars.com',
      'Contact Us',
      'News & Reviews',
      'Car Glossary',
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-48 bg-[#0d1635] text-white">
      <div className="mx-auto grid w-full max-w-container-content-xl gap-24 px-16 py-32 md:grid-cols-[1.2fr_2fr_1fr] md:px-16">
        <div className="grid gap-16">
          <ContactCarsLogo className="[&>div>img]:brightness-[2.8] [&>div>img]:contrast-[0.9]" />
          <div className="flex items-center gap-12 text-body-sm text-white/70">
            <span>f</span>
            <span>x</span>
            <span>in</span>
            <span>yt</span>
          </div>
          <div className="inline-flex h-[38px] w-[124px] items-center justify-center rounded-md bg-black text-caption text-white">
            Google Play
          </div>
        </div>

        <div className="grid gap-20 md:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title} className="grid gap-10">
              <p className="text-label font-semibold text-white">{column.title}</p>
              <div className="grid gap-8">
                {column.items.map((item) => (
                  <span key={item} className="text-body-sm text-white/78">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-12 md:justify-items-end">
          <div className="grid gap-8">
            <p className="text-label font-semibold text-white">Email Address</p>
            <p className="inline-flex items-center gap-8 text-body-sm text-white/78">
              <MailIcon className="h-[14px] w-[14px]" />
              support@contactcars.com
            </p>
          </div>
          <div className="flex gap-8">
            <button className="inline-flex h-[32px] items-center gap-6 rounded-md border border-white/20 px-12 text-caption text-white">
              العربية
              <ChevronDownIcon className="h-[10px] w-[10px]" />
            </button>
            <button className="h-[32px] rounded-md bg-brand-primary px-12 text-caption text-text-inverse">
              English
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-brand-primary">
        <div className="mx-auto flex w-full max-w-container-content-xl flex-col gap-8 px-16 py-10 text-caption text-white/90 md:flex-row md:items-center md:justify-between md:px-16">
          <span>all rights reserved ©contactcars.com 2026</span>
          <div className="flex gap-12">
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
