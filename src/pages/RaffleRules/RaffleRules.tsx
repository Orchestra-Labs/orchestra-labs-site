import { Link } from 'react-router-dom';

import { ROUTES } from '@/config/';

const SECTION = 'mt-15';
const HEADING = 'text-h4 md:text-h3 xl:text-h1 font-semibold text-white';
const LIST = 'list-disc mt-5 px-6 md:pl-8 space-y-2';

export const RaffleRules = () => (
  <div className="mt-[104px] mb-0 bg-background-dark-grey">
    <div className="page-container flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Aria Weekly Raffle: Official Rules
        </h1>
        <p className="text-xl md:text-h5 xl:text-h3 mt-10">
          Effective Date: Nov 05, 2026
        </p>
        <p className="mt-15">
          You never pay to enter. Tickets come only from fees you already pay in
          Aria, and those fees are the same with or without the raffle. These
          rules sit alongside our{' '}
          <Link className="text-white underline" to={ROUTES.TERMS}>
            Terms of Service
          </Link>
          .
        </p>

        <div id="sponsor" className={SECTION}>
          <h2 className={HEADING}>1. Sponsor</h2>
          <p className="mt-10">
            The raffle is run by Orchestra Labs LLC, 8 The Green, Suite B,
            Dover, DE 19901, United States. Google and Apple are not sponsors
            and are not involved in it in any way.
          </p>
        </div>

        <div id="eligibility" className={SECTION}>
          <h2 className={HEADING}>2. Who can enter</h2>
          <ul className={LIST}>
            <li>You must be at least 18, and an adult where you live.</li>
            <li>
              You can&apos;t take part if you&apos;re on a US sanctions list, or
              in a country or region under comprehensive US sanctions.
            </li>
            <li>
              Void where prohibited or restricted by law. If the raffle
              isn&apos;t legal where you live, you can&apos;t enter or win.
            </li>
            <li>
              Employees of Orchestra Labs and their immediate families and
              households can&apos;t win.
            </li>
            <li>One account per person.</li>
          </ul>
        </div>

        <div id="how-to-enter" className={SECTION}>
          <h2 className={HEADING}>3. How to earn tickets</h2>
          <ul className={LIST}>
            <li>
              You get 100 tickets for every $1 of fees you pay in Aria: 1 ticket
              per cent. There is no limit.
            </li>
            <li>
              Fees that count: swaps, cross-chain transfers, and Aria AI plans
              and top-ups paid in crypto. The fee must be paid on chain from a
              wallet address that belongs to your Aria account.
            </li>
            <li>
              A fee&apos;s dollar value uses the coin&apos;s price when the fee
              is recorded. A fee in a coin with no price earns no tickets.
            </li>
            <li>
              Only whole cents earn tickets. Fractions of a cent add up within a
              drawing but don&apos;t carry into the next one.
            </li>
            <li>
              When someone who joined with your referral code pays a fee, you
              get the same number of tickets. They keep theirs too.
            </li>
            <li>
              No tickets for plain sends, staking, buying or selling crypto with
              a card or bank, or fees that were refunded.
            </li>
          </ul>
        </div>

        <div id="entry-period" className={SECTION}>
          <h2 className={HEADING}>4. Entry period</h2>
          <p className="mt-10">
            Each drawing runs for 7 days, starting when the previous drawing is
            drawn. The raffle screen in Aria shows when entries close, in your
            time zone. The draw happens within an hour after that time, and
            tickets earned before the draw count in the drawing that is closing.
            Everyone starts each drawing at zero tickets.
          </p>
        </div>

        <div id="drawing" className={SECTION}>
          <h2 className={HEADING}>5. Drawing and odds</h2>
          <p className="mt-10">
            Each drawing has exactly one winner. Our server draws one ticket at
            random using a cryptographically secure random number, so every
            ticket has the same chance. Your odds are your tickets divided by
            all tickets in that drawing. We record the random value, the
            winner&apos;s tickets and their odds for every drawing. If no one
            has a ticket, there is no winner and the prize pool carries over to
            the next drawing.
          </p>
        </div>

        <div id="prize" className={SECTION}>
          <h2 className={HEADING}>6. The prize</h2>
          <ul className={LIST}>
            <li>
              The prize pool is the fees Aria collects while the raffle is on,
              minus prizes already awarded.
            </li>
            <li>
              Each drawing&apos;s prize is a share of the pool. The share is set
              when the drawing starts and doesn&apos;t change during it, and the
              raffle screen shows the prize as the pool grows.
            </li>
            <li>
              The prize is the coins themselves, on the chains they were
              collected on. A coin is included only when the winner&apos;s
              amount is at least 100 times that chain&apos;s network fee.
              Smaller amounts stay in the pool for a later drawing.
            </li>
            <li>
              The dollar value shown is approximate. It uses prices from when
              the fees were collected, and the real value moves with the market.
              There is no cash alternative, and a prize can&apos;t be
              transferred to someone else.
            </li>
          </ul>
        </div>

        <div id="winner" className={SECTION}>
          <h2 className={HEADING}>7. Winner notice and payout</h2>
          <p className="mt-10">
            We don&apos;t collect email or other contact details, so we
            don&apos;t contact winners. Your wins, with each payout&apos;s
            transaction, show on the raffle screen in Aria. The prize is sent
            automatically to your own wallet address on each prize coin&apos;s
            chain, within an hour after entries close. On some chains the
            network fee comes out of the prize.
          </p>
        </div>

        <div id="unpaid-prizes" className={SECTION}>
          <h2 className={HEADING}>8. Prizes that can&apos;t be sent</h2>
          <ul className={LIST}>
            <li>
              If your account has no address on a prize coin&apos;s chain, or we
              can&apos;t send on that chain yet (Bitcoin, for now), that part of
              the prize is held for you. We try again every hour and send it as
              soon as we can. It doesn&apos;t expire.
            </li>
            <li>
              If a send fails, we try up to 3 times. After that, automatic
              sending stops but the prize is still yours: contact us and we will
              sort it out.
            </li>
            <li>
              If we can&apos;t tell whether a send went through, we check the
              chain before trying again, so a prize is never paid twice.
            </li>
            <li>Owed prizes never go back into the pool.</li>
          </ul>
        </div>

        <div id="taxes" className={SECTION}>
          <h2 className={HEADING}>9. Taxes</h2>
          <p className="mt-10">
            You are responsible for any taxes on a prize. If the law requires us
            to report a prize, we may ask you for the details we need, and hold
            the prize until we have them.
          </p>
        </div>

        <div id="changes" className={SECTION}>
          <h2 className={HEADING}>10. Changes, pauses and cancellation</h2>
          <ul className={LIST}>
            <li>
              We can change, pause or end the raffle. We post changes on this
              page with a new effective date.
            </li>
            <li>
              While the raffle is paused, fees earn no tickets and the open
              drawing waits until it resumes. If we end the raffle, the open
              drawing is still drawn from the tickets earned until then.
            </li>
            <li>
              We can disqualify entries and withhold prizes from accounts that
              cheat, use more than one account, or break these rules or our
              Terms of Service.
            </li>
          </ul>
        </div>

        <div id="disputes" className={SECTION}>
          <h2 className={HEADING}>11. Disputes and governing law</h2>
          <p className="mt-10">
            Our recorded drawing results are final unless the law says
            otherwise. Disputes are settled the way our{' '}
            <Link className="text-white underline" to={ROUTES.TERMS}>
              Terms of Service
            </Link>{' '}
            say: binding individual arbitration under the American Arbitration
            Association&apos;s Consumer Arbitration Rules, with small-claims
            court still open, and no jury trials or class actions. These rules
            are governed by the laws of the State of Delaware, USA. The
            Terms&apos; limits of liability apply to the raffle too.
          </p>
        </div>

        <div id="privacy" className={SECTION}>
          <h2 className={HEADING}>12. Privacy</h2>
          <p className="mt-10">
            The raffle uses only your wallet addresses and the fees they pay.
            Past drawings, with the winning wallet address, and a leaderboard of
            wallet addresses and ticket counts are public. See our{' '}
            <Link className="text-white underline" to={ROUTES.PRIVACY_POLICY}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <p className="mt-15">
          Contact:{' '}
          <a
            className="text-white underline"
            href="mailto:dblackstone@orchestralabs.org"
          >
            dblackstone@orchestralabs.org
          </a>
        </p>
      </div>
    </div>
  </div>
);
