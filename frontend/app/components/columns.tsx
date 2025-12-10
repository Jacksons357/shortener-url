'use client'

import type { ColumnDef } from '@tanstack/react-table'
import type { Url } from '@/types/url'

export const columns: ColumnDef<Url>[] = [
  {
    accessorKey: 'longUrl',
    header: 'URL',
  },
  {
    accessorKey: 'slug',
    header: 'Short URL',
  },
  {
    accessorKey: 'clicks',
    header: 'Clicks',
  },
]
