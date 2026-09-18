import { cn } from '@common/ui/lib/utils';
import type { Metadata } from 'next';
import { SITE_URL } from '@/constants/seo';
import {
  AWARDS,
  AWARDS_NOTE,
  CERTIFICATIONS,
  MILITARY_SERVICE,
} from './_constants/awards';
import { EDUCATION } from './_constants/education';
import { EXPERIENCE } from './_constants/experience';
import { CONTACTS, SUMMARY } from './_constants/profile';
import { SKILLS } from './_constants/skills';

export const metadata: Metadata = {
  title: '이력서',
  description: '프론트엔드 엔지니어 빈재홍의 이력서입니다.',
  alternates: {
    canonical: `${SITE_URL}/resume`,
  },
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2
    className={cn(
      'mb-20 border-b border-gray-200 pb-8 text-px-18 font-700 text-gray-900',
      'tb:text-px-20',
    )}
  >
    {children}
  </h2>
);

const ResumePage = () => (
  <main
    className={cn('mx-auto w-full px-16 py-32', 'tb:px-24', 'dt:max-w-px-900')}
  >
    <section className="mb-40">
      <h1 className="text-px-28 font-800 text-gray-900 tb:text-px-36">
        빈재홍
      </h1>
      <p className="mt-4 text-px-14 text-gray-500 tb:text-px-16">
        Frontend Engineer | Product & Platform Engineering
      </p>
      <ul
        className={cn(
          'mt-12 flex flex-wrap items-center gap-x-px-6 gap-y-px-4 text-px-13 text-gray-600',
          'tb:text-px-14',
        )}
      >
        {CONTACTS.map((contact, index) => (
          <li key={contact.value} className="flex items-center gap-x-px-6">
            {index > 0 && (
              <span aria-hidden="true" className="text-gray-300">
                ·
              </span>
            )}
            {contact.href ? (
              <a
                href={contact.href}
                className="underline-offset-2 hover:underline"
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  contact.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
              >
                {contact.value}
              </a>
            ) : (
              contact.value
            )}
          </li>
        ))}
      </ul>
      <p className="mt-16 text-px-14 leading-px-24 text-gray-600 tb:text-px-15">
        {SUMMARY}
      </p>
    </section>

    <section className="mb-48">
      <SectionTitle>경력</SectionTitle>
      <div className="flex flex-col gap-px-40">
        {EXPERIENCE.map((experience) => (
          <article key={experience.company}>
            <h3 className="text-px-16 font-700 text-gray-900 tb:text-px-18">
              {experience.company}
            </h3>
            <p className="mt-2 text-px-13 text-gray-500">
              {experience.role} · {experience.period}
            </p>
            <p className="mt-4 text-px-12 leading-px-18 text-gray-500">
              {experience.context}
            </p>

            <div className="mt-16 flex flex-col gap-px-20">
              {experience.themes.map((theme, themeIndex) => (
                <div key={`${experience.company}-${themeIndex}`}>
                  {theme.name && (
                    <h4 className="mb-10 text-px-13 font-600 text-gray-700 tb:text-px-14">
                      {theme.name}
                    </h4>
                  )}
                  <ul className="flex flex-col gap-px-10">
                    {theme.highlights.map((highlight) => (
                      <li
                        key={highlight.title}
                        className="flex gap-px-8 text-px-13 leading-px-22 text-gray-600 tb:text-px-14"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-8 size-3 shrink-0 rounded-full bg-gray-300"
                        />
                        <p>
                          <span className="font-700 text-gray-900">
                            {highlight.title}
                          </span>
                          . {highlight.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="mb-48">
      <SectionTitle>학력</SectionTitle>
      <ul className="flex flex-col gap-px-16">
        {EDUCATION.map((education) => (
          <li key={education.school}>
            <p className="text-px-14 font-600 text-gray-800">
              {education.school}
            </p>
            <p className="mt-2 text-px-13 text-gray-600">{education.degree}</p>
            <p className="mt-2 text-px-13 text-gray-500">{education.period}</p>
            {education.note && (
              <p className="mt-2 text-px-12 text-gray-500">{education.note}</p>
            )}
          </li>
        ))}
      </ul>
    </section>

    <section className="mb-48">
      <SectionTitle>자격증 및 수상</SectionTitle>
      <div className="flex flex-col gap-px-16">
        <ul className="flex flex-col gap-px-16">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.title} className="text-px-14 text-gray-700">
              <span className="font-600">{cert.title}</span>
              <span className="ml-8 text-px-13 text-gray-500">{cert.date}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-px-16">
          <ul className="flex flex-col gap-px-16">
            {AWARDS.map((award) => (
              <li key={award.title}>
                <p className="text-px-14 font-600 text-gray-800">
                  {award.title}
                </p>
                <p className="mt-2 text-px-13 text-gray-500">
                  {award.date} · {award.org}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-px-12 leading-px-18 text-gray-500">
            {AWARDS_NOTE}
          </p>
        </div>
      </div>
    </section>

    <section className="mb-48">
      <SectionTitle>병역</SectionTitle>
      <p className="text-px-13 text-gray-500">{MILITARY_SERVICE}</p>
    </section>

    <section>
      <SectionTitle>기술 스택</SectionTitle>
      <dl className="flex flex-col gap-px-12">
        {SKILLS.map((skill) => (
          <div
            key={skill.category}
            className="flex flex-col gap-px-4 tb:flex-row tb:gap-px-16"
          >
            <dt className="w-112 shrink-0 text-px-14 font-700 text-gray-700">
              {skill.category}
            </dt>
            <dd className="text-px-14 leading-px-22 text-gray-600">
              {skill.items}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  </main>
);

export default ResumePage;
