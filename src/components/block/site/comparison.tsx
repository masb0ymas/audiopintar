import { Check, Headphones } from 'lucide-react'

import { env } from '~/env'

export default function Comparison() {
  const comparisonFeatures = [
    {
      feature: 'Audiobook Library',
      audioly: '500,000+',
      competitor1: '200,000+',
      competitor2: '300,000+',
    },
    { feature: 'AI Summaries', audioly: true, competitor1: false, competitor2: false },
    { feature: 'AI Chat with Content', audioly: true, competitor1: false, competitor2: false },
    { feature: 'Podcast Integration', audioly: true, competitor1: false, competitor2: true },
    {
      feature: 'Offline Downloads',
      audioly: 'Unlimited',
      competitor1: 'Limited',
      competitor2: '10 titles',
    },
    {
      feature: 'Family Sharing',
      audioly: '6 profiles',
      competitor1: '2 profiles',
      competitor2: '4 profiles',
    },
    { feature: 'Monthly Credits', audioly: 'Up to 5', competitor1: '1', competitor2: '2' },
  ]

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            See How We <span className="text-gradient">Compare</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Audioly offers more features and better value than the competition.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-border border-b">
                <th className="text-foreground px-4 py-4 text-left font-semibold">Feature</th>
                <th className="px-4 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                      <Headphones className="text-primary-foreground h-4 w-4" />
                    </div>
                    <span className="text-primary font-semibold">{env.VITE_APP_NAME}</span>
                  </div>
                </th>
                <th className="text-muted-foreground px-4 py-4">Competitor A</th>
                <th className="text-muted-foreground px-4 py-4">Competitor B</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, index) => (
                <tr key={index} className="border-border border-b">
                  <td className="text-foreground px-4 py-4">{row.feature}</td>
                  <td className="px-4 py-4 text-center">
                    {typeof row.audioly === 'boolean' ? (
                      row.audioly ? (
                        <Check className="text-primary mx-auto h-5 w-5" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )
                    ) : (
                      <span className="text-primary font-medium">{row.audioly}</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {typeof row.competitor1 === 'boolean' ? (
                      row.competitor1 ? (
                        <Check className="text-muted-foreground mx-auto h-5 w-5" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )
                    ) : (
                      <span className="text-muted-foreground">{row.competitor1}</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {typeof row.competitor2 === 'boolean' ? (
                      row.competitor2 ? (
                        <Check className="text-muted-foreground mx-auto h-5 w-5" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )
                    ) : (
                      <span className="text-muted-foreground">{row.competitor2}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
