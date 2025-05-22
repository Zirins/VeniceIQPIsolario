import { credits } from '@/lib/data/credits'

export default function Credits() {
  return (
    <main className="p-8 max-w-4xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold text-center">Project Credits</h1>

      {credits.map(({ title, members }) => (
        <div key={title} className="border p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <ul className="space-y-1">
            {members.map((person) => (
              <li key={person.name}>{person.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  )
}
