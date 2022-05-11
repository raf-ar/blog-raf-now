import useTranslation from 'next-translate/useTranslation'
import { FaTwitter } from 'react-icons/fa'
import Image from '@/components/Image'
import Link from '@/components/Link'
export default function Author({ detail }) {
  const { t } = useTranslation()

  return (
    <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-4">
      {detail.map((author) => (
        <li className="flex items-center justify-center space-x-2" key={author.name}>
          <Image
            src={`https://res.cloudinary.com/raf-ar/image/upload/v1651370642/blog/avatars/${author.name.toLowerCase()}.jpg`}
            width="38px"
            height="38px"
            alt={author.name}
            className="h-10 w-10 rounded-full"
          />
          <dl className="whitespace-nowrap text-sm font-medium leading-5">
            <dt className="sr-only">{t('common:name')}</dt>
            <dd>
              <Link
                className="text-gray-900 transition hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                href="/about"
              >
                {author.name}
              </Link>
            </dd>
            <dt className="sr-only">Twitter</dt>
            <dd>
              {author.twitter && (
                <Link
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center text-xs text-primary-500 transition hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <FaTwitter size={15} className="mr-1" />
                  {`@${author.twitter}`}
                </Link>
              )}
            </dd>
          </dl>
        </li>
      ))}
    </ul>
  )
}
