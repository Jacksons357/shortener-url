'use client'

import type { ColumnDef } from '@tanstack/react-table'
import type { Url } from '@/types/url'

export const columns: ColumnDef<Url>[] = [
  {
    accessorKey: 'longUrl',
    header: 'URL Original',
    cell: ({ row }) => {
      const url = row.original.longUrl
      return (
        <div className="max-w-[200px] break-words whitespace-normal">
          <a
            href={url}
            target="_blank"
            className="text-blue-600 underline text-xs"
          >
            {url}
          </a>
        </div>
      )
    },
  },
  {
    accessorKey: 'slug',
    header: 'URL Encurtada',
    cell: ({ row }) => {
      const slug = row.original.slug
      const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${slug}`

      return (
        <a
          href={fullUrl}
          target="_blank"
          className="text-blue-600 underline text-xs"
        >
          {fullUrl}
        </a>
      )
    },
  },
  {
    accessorKey: 'clicks',
    header: 'Clicks',
  },
]
