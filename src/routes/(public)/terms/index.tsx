import { createFileRoute } from '@tanstack/react-router'

import Typography from '~/components/ui/typography'

export const Route = createFileRoute('/(public)/terms/')({
  component: RouteComponent,
})

function RouteComponent() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const htmlContent = `
    <h2>1. Agreement to Terms</h2>
    <p>
      Welcome to audiopintar. These Terms of Service ("Terms") govern your access to
      and use of our AI-powered audio platform for audiobooks and podcasts. By accessing or
      using our services, you agree to be bound by these Terms. If you do not agree to these
      Terms, please do not use our services.
    </p>

    <h2>2. Definitions</h2>
    <ul>
      <li>
        <strong>"Service"</strong> refers to the audiopintar platform, including all
        features, content, and functionality
      </li>
      <li>
        <strong>"User," "you,"</strong> or <strong>"your"</strong> refers to the individual or
        entity using our Service
      </li>
      <li>
        <strong>"Content"</strong> refers to audio files, text, images, and other materials
        available through the Service
      </li>
      <li>
        <strong>"AI Features"</strong> refers to our artificial intelligence-powered
        capabilities including summaries, transcripts, and chat functionality
      </li>
    </ul>

    <h2>3. Account Registration and Security</h2>
    <p>
      To access certain features of our Service, you must create an account. You agree to:
    </p>
    <ul>
      <li>Provide accurate, current, and complete information during registration</li>
      <li>Maintain and promptly update your account information</li>
      <li>Keep your password secure and confidential</li>
      <li>Notify us immediately of any unauthorized access to your account</li>
      <li>Be responsible for all activities that occur under your account</li>
      <li>Be at least 13 years of age to create an account</li>
    </ul>
    <p>
      We reserve the right to suspend or terminate accounts that violate these Terms or engage
      in fraudulent, abusive, or illegal activities.
    </p>

    <h2>4. Subscription and Payment</h2>
    <h4>4.1 Free Trial</h4>
    <p>
      We offer a 30-day free trial for new users. No credit card is required during the trial
      period. The trial automatically expires after 30 days unless you subscribe to a paid
      plan.
    </p>

    <h4>4.2 Paid Subscriptions</h4>
    <ul>
      <li>Subscription fees are billed in advance on a monthly or annual basis</li>
      <li>All fees are non-refundable except as required by law</li>
      <li>You authorize us to charge your payment method for all subscription fees</li>
      <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
      <li>We reserve the right to change pricing with 30 days' notice</li>
    </ul>

    <h4>4.3 Cancellation</h4>
    <p>
      You may cancel your subscription at any time. Cancellation will take effect at the end
      of your current billing period. You will retain access to paid features until the end of
      the billing period.
    </p>

    <h2>5. Use of Service</h2>
    <h4>5.1 License Grant</h4>
    <p>
      Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
      revocable license to access and use our Service for personal, non-commercial purposes.
    </p>

    <h4>5.2 Prohibited Activities</h4>
    <p>You agree not to:</p>
    <ul>
      <li>Use the Service for any illegal or unauthorized purpose</li>
      <li>Violate any laws, regulations, or third-party rights</li>
      <li>Upload or share content that infringes copyright or intellectual property rights</li>
      <li>Distribute malware, viruses, or harmful code</li>
      <li>Attempt to gain unauthorized access to our systems or networks</li>
      <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
      <li>Use automated systems (bots, scrapers) without our permission</li>
      <li>Resell, redistribute, or commercially exploit the Service</li>
      <li>Harass, abuse, or harm other users</li>
      <li>Impersonate any person or entity</li>
    </ul>

    <h2>6. Content and Intellectual Property</h2>
    <h4>6.1 Our Content</h4>
    <p>
      All content provided through the Service, including text, graphics, logos, software, and
      AI-generated materials, is owned by audiopintar or our licensors and is
      protected by intellectual property laws.
    </p>

    <h4>6.2 User Content</h4>
    <p>
      You retain ownership of any audio content you upload to the Service. By uploading
      content, you grant us a worldwide, non-exclusive, royalty-free license to:
    </p>
    <ul>
      <li>Store, process, and display your content</li>
      <li>Generate AI summaries, transcripts, and insights from your content</li>
      <li>Enable AI chat functionality with your content</li>
      <li>Improve our AI models using anonymized and aggregated data</li>
    </ul>

    <h4>6.3 Copyright Compliance</h4>
    <p>
      You represent and warrant that you have the right to upload and share any content you
      provide to the Service. We respect intellectual property rights and will respond to
      valid copyright infringement notices in accordance with applicable law.
    </p>

    <h2>7. AI Features and Limitations</h2>
    <p>
      Our AI-powered features are provided "as is" and may not always be accurate or complete.
      You acknowledge that:
    </p>
    <ul>
      <li>AI-generated summaries and insights are automated and may contain errors</li>
      <li>AI chat responses are generated by machine learning models and may be inaccurate</li>
      <li>You should verify important information from AI features independently</li>
      <li>We do not guarantee the accuracy, completeness, or reliability of AI outputs</li>
      <li>AI features are subject to usage limits based on your subscription plan</li>
    </ul>

    <h2>8. Privacy and Data Protection</h2>
    <p>
      Your privacy is important to us. Our collection and use of personal information is
      governed by our <a href="/privacy">Privacy Policy</a>, which is incorporated into these Terms by
      reference. By using our Service, you consent to our data practices as described in the
      Privacy Policy.
    </p>

    <h2>9. Disclaimers and Warranties</h2>
    <p>
      THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
      EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
    </p>
    <ul>
      <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
      <li>Warranties that the Service will be uninterrupted, secure, or error-free</li>
      <li>Warranties regarding the accuracy or reliability of AI-generated content</li>
      <li>Warranties that defects will be corrected</li>
    </ul>
    <p>
      We do not warrant that the Service will meet your requirements or that it will be
      compatible with all devices or platforms.
    </p>

    <h2>10. Limitation of Liability</h2>
    <p>
      TO THE MAXIMUM EXTENT PERMITTED BY LAW, audiopintar AND ITS AFFILIATES,
      OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:
    </p>
    <ul>
      <li>Any indirect, incidental, special, consequential, or punitive damages</li>
      <li>Loss of profits, revenue, data, or business opportunities</li>
      <li>Damages resulting from use or inability to use the Service</li>
      <li>Damages resulting from AI-generated content or errors</li>
      <li>Damages resulting from unauthorized access to your account or content</li>
    </ul>
    <p>
      Our total liability shall not exceed the amount you paid us in the 12 months preceding
      the claim, or $100, whichever is greater.
    </p>

    <h2>11. Indemnification</h2>
    <p>
      You agree to indemnify, defend, and hold harmless audiopintar and its affiliates
      from any claims, damages, losses, liabilities, and expenses (including legal fees)
      arising from: (a) your use of the Service, (b) your violation of these Terms, (c) your
      violation of any rights of another party, or (d) content you upload to the Service.
    </p>

    <h2>12. Termination</h2>
    <p>
      We reserve the right to suspend or terminate your access to the Service at any time,
      with or without notice, for:
    </p>
    <ul>
      <li>Violation of these Terms</li>
      <li>Fraudulent, abusive, or illegal activity</li>
      <li>Non-payment of fees</li>
      <li>Any other reason at our sole discretion</li>
    </ul>
    <p>
      Upon termination, your right to use the Service will immediately cease. You may also
      terminate your account at any time by contacting us or using account settings.
    </p>

    <h2>13. Modifications to Service and Terms</h2>
    <p>
      We reserve the right to modify, suspend, or discontinue the Service at any time without
      notice. We may also update these Terms from time to time. Material changes will be
      notified through the Service or via email. Your continued use of the Service after
      changes constitutes acceptance of the updated Terms.
    </p>

    <h2>14. Dispute Resolution</h2>
    <h4>14.1 Informal Resolution</h4>
    <p>
      Before filing a claim, you agree to contact us at
      <a href="mailto:support@audiopintar.xyz">support@audiopintar.xyz</a>
      to attempt to resolve the dispute informally.
    </p>

    <h4>14.2 Arbitration</h4>
    <p>
      Any disputes that cannot be resolved informally shall be resolved through binding
      arbitration in accordance with applicable arbitration rules, rather than in court,
      except where prohibited by law.
    </p>

    <h2>15. Governing Law</h2>
    <p>
      These Terms shall be governed by and construed in accordance with the laws of the
      jurisdiction in which audiopintar operates, without regard to conflict of law
      principles.
    </p>

    <h2>16. Miscellaneous</h2>
    <h4>16.1 Entire Agreement</h4>
    <p>
      These Terms, together with our Privacy Policy, constitute the entire agreement between
      you and audiopintar regarding the Service.
    </p>

    <h4>16.2 Severability</h4>
    <p>
      If any provision of these Terms is found to be invalid or unenforceable, the remaining
      provisions shall remain in full force and effect.
    </p>

    <h4>16.3 Waiver</h4>
    <p>
      Our failure to enforce any right or provision of these Terms shall not constitute a
      waiver of such right or provision.
    </p>

    <h4>16.4 Assignment</h4>
    <p>
      You may not assign or transfer these Terms without our prior written consent. We may
      assign these Terms without restriction.
    </p>

    <h2>17. Contact Information</h2>
    <p>
      If you have any questions about these Terms, please contact us:
    </p>
  `

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-12">
        <h1 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">Terms of Service</h1>
        <p className="text-muted-foreground text-lg">
          Last updated: <span className="font-medium">{lastUpdated}</span>
        </p>
      </div>
      <Typography html={htmlContent} />
      <div className="py-4">
        <div className="bg-muted/50 border-primary/60 card-glow-active space-y-2 rounded-lg border p-6">
          <p className="text-foreground mb-2 font-medium">audiopintar</p>
          <p className="text-muted-foreground">
            Email:{' '}
            <a
              href="mailto:support@audiopintar.xyz"
              className="text-primary font-medium hover:underline"
            >
              support@audiopintar.xyz
            </a>
          </p>
          <p className="text-muted-foreground mt-2">
            GitHub:{' '}
            <a
              href="https://github.com/masb0ymas/audiopintar"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-medium hover:underline"
            >
              github.com/masb0ymas/audiopintar
            </a>
          </p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        By using audiopintar, you acknowledge that you have read, understood, and agree to be bound
        by these Terms of Service.
      </p>
    </div>
  )
}
