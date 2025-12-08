import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

export default function FAQ() {
  const faqs = [
    {
      id: '1',
      question: 'How does the AI summary feature work?',
      answer:
        'Our AI analyzes the full content of each audiobook and podcast, extracting key themes, important quotes, and actionable insights. You can also chat with our AI to ask specific questions about the content.',
    },
    {
      id: '2',
      question: 'Can I switch between plans anytime?',
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we'll prorate any differences.",
    },
    {
      id: '3',
      question: "What happens to my credits if I don't use them?",
      answer:
        "Unused credits roll over for up to 6 months, so you never lose what you've paid for. Premium and Family members also get bonus rollover credits.",
    },
    {
      id: '4',
      question: 'Is there a free trial available?',
      answer:
        'Absolutely! We offer a 30-day free trial with full access to Premium features. No credit card required to start.',
    },
    {
      id: '5',
      question: 'How does family sharing work?',
      answer:
        'Family plan members can invite up to 5 additional people. Each person gets their own profile, recommendations, and listening history while sharing the audiobook credits.',
    },
  ]

  return (
    <section id="faq" className="bg-secondary/30 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">Got questions? We've got answers.</p>
        </div>
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={faq.id}>
                <AccordionTrigger className='text-base'>{faq.question}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-base">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
