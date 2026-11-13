import { Fragment } from 'react'

export const KUWAIT_NAME = 'Al-Noor International Consultants, Kuwait'
export const KUWAIT_URL = 'https://www.alnoor-consultants.com'

/**
 * Renders text and turns every mention of the Kuwait partner's name into a link
 * to its website, opening in a new tab.
 */
export function LinkKuwait({ text }: { text: string }) {
  const parts = text.split(KUWAIT_NAME)
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <a
              href={KUWAIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 decoration-1 transition-opacity hover:opacity-80"
            >
              {KUWAIT_NAME}
            </a>
          )}
        </Fragment>
      ))}
    </>
  )
}
