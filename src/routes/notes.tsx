import { createFileRoute } from "@tanstack/react-router"
import { BaseNotes } from "@/components/base-notes"
import Dashboard from "@/components/dashboard"

export const Route = createFileRoute("/notes")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='bg-gray-50 text-gray-950'>
      <Dashboard>
        <BaseNotes />
      </Dashboard>
    </div>
  )
}
