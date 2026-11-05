import { SectionNavigator } from '@/components';
import { NavItem } from '@/types';

const HEADINGS: Record<number, { id: string; label: string }> = {
  1: { id: 'data-collection', label: '1. Data Collection' },
  2: { id: 'data-usage', label: '2. Data Usage' },
  3: { id: 'data-sharing', label: '3. Data Sharing' },
  4: { id: 'third-party-services', label: '4. Third-Party Services' },
  5: { id: 'google-sign-in', label: '5. Google Sign-In and Backup' },
  6: { id: 'security', label: '6. Security' },
  7: { id: 'policy-changes', label: '7. Changes to This Policy' },
  8: { id: 'user-rights', label: '8. Your Rights' },
  9: { id: 'retention', label: '9. Retention' },
  10: { id: 'cookies-and-analytics', label: '10. Cookies and Analytics' },
  11: { id: 'children', label: '11. Children' },
  12: { id: 'where-data-is-processed', label: '12. Where Data Is Processed' },
  13: { id: 'contact-us', label: '13. Contact Us' },
};

const NAVIGATION_ITEMS: NavItem[] = Object.keys(HEADINGS).map(key => ({
  id: key,
  label: HEADINGS[+key].label,
  href: `#${HEADINGS[+key].id}`,
}));

export const PrivacyPolicy = () => (
  <div className="mt-[104px] mb-0 bg-background-dark-grey">
    <div className="page-container flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Privacy Policy
        </h1>
        <p className="text-xl md:text-h5 xl:text-h3 mt-10">
          Effective Date: Nov 04, 2026
        </p>

        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-10">
            We value your privacy and do not collect or store any personal or
            identifiable user data through the use of Aria Wallet. Any data
            collection is incidental and limited to:
          </p>
          <ul className="list-disc mt-5 px-6 md:pl-8">
            <li>
              <strong>Google Extension Comments:</strong> Comments made on the
              Chrome Web Store are governed by Google’s privacy policies. We do
              not control or manage data collected there.
            </li>
            <li>
              <strong>Social Media Interactions:</strong> Interactions on social
              media platforms (e.g., comments, likes) are governed by the
              respective platforms’ privacy policies.
            </li>
          </ul>
        </div>

        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <p className="mt-10">
            Since we do not collect personal or identifiable data, there is no
            specific data usage applicable. Incidental data obtained from
            external sources may be used to:
          </p>
          <ul className="list-disc mt-5 px-6 md:pl-8">
            <li>Respond to inquiries and feedback.</li>
            <li>Improve our extension based on feedback.</li>
          </ul>
        </div>

        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <p className="mt-10">
            We don&apos;t sell your data. We share it only with the third-party
            services that carry out what you ask (section 4), or as required by
            law.
          </p>
        </div>

        <div id={HEADINGS[4].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[4].label}
          </h2>
          <p className="mt-10">
            This extension may interact with third-party tools or APIs to
            enhance functionality. Any interactions with third-party services
            are governed by their respective privacy policies.
          </p>
        </div>

        <div id={HEADINGS[5].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[5].label}
          </h2>
          <p className="mt-10">
            If you choose to back up your wallet with Google, Aria asks Google
            for your email address and for access to its own hidden folder in
            your Google Drive (the drive.appdata permission). Aria can&apos;t
            see any other files in your Drive.
          </p>
          <ul className="list-disc mt-5 px-6 md:pl-8">
            <li>
              Your backup is encrypted on your device with your backup password
              before it is saved to that folder. We can&apos;t read it, and we
              can&apos;t recover it if you lose the password.
            </li>
            <li>
              Your email address is only shown in the extension so you know
              which account you&apos;re using. It is never sent to Orchestra
              Labs LLC (Orchestra Labs).
            </li>
            <li>
              The backup goes only between your device and your Google account.
              None of your Google data passes through our servers, and we never
              sell or share it, or use it for advertising.
            </li>
            <li>
              You can remove the backup by deleting Aria&apos;s app data in your
              Google Drive settings, and remove Aria&apos;s access at
              myaccount.google.com/permissions.
            </li>
          </ul>
          <p className="mt-10">
            Aria Wallet&apos;s use of information received from Google APIs will
            adhere to the Google API Services User Data Policy, including the
            Limited Use requirements.
          </p>
        </div>

        <div id={HEADINGS[6].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[6].label}
          </h2>
          <p className="mt-10">
            We never receive your recovery phrase, private keys or passwords.
            Our services keep your wallet addresses, for rewards. Any incidental
            data from external sources is subject to the security measures of
            those platforms.
          </p>
        </div>

        <div id={HEADINGS[7].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[7].label}
          </h2>
          <p className="mt-10">
            We reserve the right to update this privacy policy at any time.
            Changes will be indicated by an updated “Effective Date” at the top
            of the document. Users are encouraged to review the policy
            periodically.
          </p>
        </div>

        <div id={HEADINGS[8].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[8].label}
          </h2>
          <p className="mt-10">
            You can ask what we hold about you, and ask us to delete it,
            including the wallet addresses we keep for rewards, by emailing the
            address below. For comments or data shared on external platforms,
            users should refer to the respective platform&apos;s privacy
            policies for managing their data.
          </p>
        </div>

        <div id={HEADINGS[9].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[9].label}
          </h2>
          <p className="mt-10">
            We keep your wallet addresses for rewards while you use Aria, or
            until you ask us to delete them.
          </p>
        </div>

        <div id={HEADINGS[10].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[10].label}
          </h2>
          <p className="mt-10">
            We don&apos;t use cookies or analytics to track you.
          </p>
        </div>

        <div id={HEADINGS[11].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[11].label}
          </h2>
          <p className="mt-10">
            Aria isn&apos;t for anyone under 18, and we don&apos;t knowingly
            collect children&apos;s data.
          </p>
        </div>

        <div id={HEADINGS[12].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[12].label}
          </h2>
          <p className="mt-10">
            Our services run on cloud servers outside the US, so your wallet
            addresses may be processed outside your country.
          </p>
        </div>

        <div id={HEADINGS[13].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[13].label}
          </h2>
          <p className="mt-10">
            If you have any questions or concerns about this Privacy Policy or
            Aria Wallet, you may contact us at:
          </p>
          <ul className="list-disc mt-5 px-6 md:pl-8">
            <li>Email: dblackstone@orchestralabs.org</li>
            <li>
              Address: Orchestra Labs LLC
              <br />8 The Green, Suite B, Dover, DE, 19901, United States
            </li>
          </ul>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
