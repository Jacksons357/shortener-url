import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function UrlForm() {
  return (
    <form className="bg-muted p-6 rounded-md border border-muted/30 w-1/3 space-y-4">
      <div className="flex flex-col space-y-1">
        <Label htmlFor="url" className="text-xs ml-2">
          URL original
        </Label>
        <Input
          id="url"
          type="url"
          className=""
          placeholder="https://exemplo.com.br..."
        />
      </div>
      <Button type="submit" className="w-full">
        Encurtar
      </Button>
    </form>
  )
}
