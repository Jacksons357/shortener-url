'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useGetUrls } from '@/lib/queries/url'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function UrlList() {
  const { data, isLoading, isError } = useGetUrls()
  if (isLoading) return <p>Carregando URLs...</p>
  if (isError) return <p>Erro ao buscar URLs</p>

  return (
    <Card className="max-h-[600px] overflow-y-auto">
      <CardHeader>
        <CardTitle>URLs</CardTitle>
        <CardDescription>Lista de URLs geradas</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data || []} />
      </CardContent>
    </Card>
  )
}
