import { createFileRoute } from '@tanstack/react-router'

import Typography from '~/components/ui/typography'
import { env } from '~/env'

export const Route = createFileRoute('/(public)/privacy/')({
  component: RouteComponent,
})

function RouteComponent() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const htmlContent = `
  <h2>1. Introduction</h2>
  <p>Welcome to audiopintar ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered audio platform for audiobooks and podcasts.</p>

  <h2>2. Information We Collect</h2>
  <h4>2.1 Personal Information</h4>
  <p>
    We collect information that you provide directly to us, including:
  </p>
  <ul>
    <li>Account information (name, email address, password)</li>
    <li>Profile information (profile picture, preferences)</li>
    <li>Payment information (processed securely through third-party payment processors)</li>
    <li>Communication data (support requests, feedback)</li>
  </ul>

  <h4>2.2 Usage and Audio Content Data</h4>
  <p>
    To provide our AI-powered features, we collect:
  </p>
  <ul>
    <li>Audio content you upload or access</li>
    <li>Listening history and preferences</li>
    <li>AI chat interactions and queries</li>
    <li>Bookmarks, notes, and highlights</li>
    <li>Search queries and content interactions</li>
  </ul>

  <h4>2.3 Automatically Collected Information</h4>
  <ul>
    <li>Device information (device type, operating system, browser type)</li>
    <li>IP address and location data</li>
    <li>Usage statistics and analytics</li>
    <li>Cookies and similar tracking technologies</li>
  </ul>

  <h2>3. How We Use Your Information</h2>
  <p>
    We use the collected information for the following purposes:
  </p>
  <ul>
    <li>Provide and maintain our AI-powered audio services</li>
    <li>Generate AI summaries and insights from your audio content</li>
    <li>Enable AI chat functionality with your audiobooks and podcasts</li>
    <li>Personalize your experience and recommendations</li>
    <li>Process payments and manage subscriptions</li>
    <li>Send service updates, notifications, and promotional materials</li>
    <li>Improve our services through analytics and research</li>
    <li>Detect, prevent, and address technical issues and security threats</li>
    <li>Comply with legal obligations</li>
  </ul>

  <h2>4. AI Processing and Data Usage</h2>
  <p>
    Our AI features process your audio content to provide summaries, insights, and
    interactive chat capabilities. Here's what you should know:
  </p>
  <ul>
    <li>
      Audio content is processed by our AI systems to generate transcripts, summaries, and
      enable chat functionality
    </li>
    <li>We may use anonymized and aggregated data to improve our AI models and services</li>
    <li>Your personal audio content is not used to train AI models for other users</li>
    <li>
      We implement appropriate safeguards to protect the confidentiality of your content
    </li>
  </ul>

  <h2>5. Data Sharing and Disclosure</h2>
  <p>
    We may share your information in the following circumstances:
  </p>
  <ul>
    <li>
      <strong>Service Providers:</strong> Third-party vendors who perform services on our
      behalf (hosting, analytics, payment processing, AI processing)
    </li>
    <li>
      <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale
      of assets
    </li>
    <li>
      <strong>Legal Requirements:</strong> When required by law or to protect our rights and
      safety
    </li>
    <li>
      <strong>With Your Consent:</strong> When you explicitly authorize us to share your
      information
    </li>
  </ul>
  <p>
    We do not sell your personal information to third parties.
  </p>

  <h2>6. Data Security</h2>
  <p>
    We implement industry-standard security measures to protect your information, including:
  </p>
  <ul>
    <li>Encryption of data in transit and at rest</li>
    <li>Regular security assessments and updates</li>
    <li>Access controls and authentication mechanisms</li>
    <li>Secure data storage and backup procedures</li>
  </ul>
  <p>
    However, no method of transmission over the internet is 100% secure. While we strive to
    protect your information, we cannot guarantee absolute security.
  </p>

  <h2>7. Data Retention</h2>
  <p>
    We retain your personal information for as long as necessary to provide our services and
    fulfill the purposes outlined in this Privacy Policy. When you delete your account, we
    will delete or anonymize your personal information within 90 days, except where we are
    required to retain it for legal or regulatory purposes.
  </p>

  <h2>8. Your Rights and Choices</h2>
  <p>
    Depending on your location, you may have the following rights:
  </p>
  <ul>
    <li>
      <strong>Access:</strong> Request access to your personal information
    </li>
    <li>
      <strong>Correction:</strong> Request correction of inaccurate information
    </li>
    <li>
      <strong>Deletion:</strong> Request deletion of your personal information
    </li>
    <li>
      <strong>Data Portability:</strong> Request a copy of your data in a portable format
    </li>
    <li>
      <strong>Opt-Out:</strong> Opt-out of marketing communications
    </li>
    <li>
      <strong>Withdraw Consent:</strong> Withdraw consent for data processing where
      applicable
    </li>
  </ul>
  <p>
    To exercise these rights, please contact us at
    <a href="mailto:support@audiopintar.xyz">support@audiopintar.xyz</a>.
  </p>

  <h2>9. Cookies and Tracking Technologies</h2>
  <p>
    We use cookies and similar tracking technologies to:
  </p>
  <ul>
    <li>Remember your preferences and settings</li>
    <li>Analyze usage patterns and improve our services</li>
    <li>Provide personalized content and recommendations</li>
    <li>Measure the effectiveness of our marketing campaigns</li>
  </ul>
  <p>
    You can control cookies through your browser settings. Note that disabling cookies may
    affect the functionality of our services.
  </p>

  <h2>10. Third-Party Services</h2>
  <p>
    Our platform may contain links to third-party websites or integrate with third-party
    services. We are not responsible for the privacy practices of these third parties. We
    encourage you to review their privacy policies before providing any personal
    information.
  </p>

  <h2>11. Children's Privacy</h2>
  <p>
    Our services are not intended for children under the age of 13. We do not knowingly
    collect personal information from children under 13. If you believe we have collected
    information from a child under 13, please contact us immediately.
  </p>

  <h2>12. International Data Transfers</h2>
  <p>
    Your information may be transferred to and processed in countries other than your
    country of residence. We ensure appropriate safeguards are in place to protect your
    information in accordance with this Privacy Policy and applicable data protection laws.
  </p>

  <h2>13. Changes to This Privacy Policy</h2>
  <p>
    We may update this Privacy Policy from time to time. We will notify you of any material
    changes by posting the new Privacy Policy on this page and updating the "Last updated"
    date. We encourage you to review this Privacy Policy periodically.
  </p>

  <h2>14. Contact Us</h2>
  <p>
    If you have any questions, concerns, or requests regarding this Privacy Policy or our
    data practices, please contact us:
  </p>
  `

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-12">
        <h1 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
        <p className="text-muted-foreground text-lg">
          Last updated: <span className="font-medium">{lastUpdated}</span>
        </p>
      </div>

      <Typography html={htmlContent} />

      <div className="py-4">
        <div className="bg-muted/50 border-primary/60 card-glow-active space-y-2 rounded-lg border p-6">
          <p className="text-foreground mb-2 font-medium">{env.VITE_APP_NAME}</p>
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
        By using audiopintar, you acknowledge that you have read and understood this Privacy Policy
        and agree to the collection, use, and disclosure of your information as described herein.
      </p>
    </div>
  )
}
