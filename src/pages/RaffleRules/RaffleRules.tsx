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
          Effective Date: Nov 06, 2026
        </p>
        <p className="mt-15">
          These are the official rules for the Aria weekly raffle. They are part
          of our{' '}
          <Link className="text-white underline" to={ROUTES.TERMS}>
            Terms of Service
          </Link>
          .
        </p>

        <div id="sponsor" className={SECTION}>
          <h2 className={HEADING}>1. Sponsor</h2>
          <p className="mt-10">
            The raffle is sponsored and run by Orchestra Labs LLC, 8 The Green,
            Suite B, Dover, DE 19901, United States, which alone is responsible
            for it. Google and Apple are not sponsors and are not involved in it
            in any way.
          </p>
        </div>

        <div id="eligibility" className={SECTION}>
          <h2 className={HEADING}>2. Who can enter</h2>
          <ul className={LIST}>
            <li>You must be at least 18 and an adult where you live.</li>
            <li>
              The raffle is void where prohibited or restricted by law.
            </li>
            <li>
              Employees of Orchestra Labs and their immediate families and
              households can&apos;t take part.
            </li>
          </ul>
        </div>

        <div id="tickets" className={SECTION}>
          <h2 className={HEADING}>3. How to earn tickets</h2>
          <ul className={LIST}>
            <li>
              You get 1 ticket for each whole cent of fees you pay in Aria for
              swaps, cross-chain transfers and routing, and for Aria AI plans
              and top-ups paid in crypto. That is 100 tickets per $1, with no
              limit.
            </li>
            <li>
              A fee is valued in US dollars at the coin&apos;s price when the
              fee is recorded.
            </li>
            <li>
              When someone who joined with your referral code pays a fee, you
              get the same number of tickets they do.
            </li>
            <li>
              There are no tickets for plain sends, buying or selling crypto
              with a card or bank, refunded fees, or staking.
            </li>
            <li>Everyone&apos;s tickets start at zero for each drawing.</li>
          </ul>
        </div>

        <div id="entry-period" className={SECTION}>
          <h2 className={HEADING}>4. Entry period</h2>
          <p className="mt-10">
            Each drawing lasts one week. Entries close at the drawing&apos;s
            close time, which the raffle panel in Aria shows in GMT. Fees
            recorded after that time earn tickets in the next drawing, which
            starts when the previous one is drawn.
          </p>
        </div>

        <div id="drawing" className={SECTION}>
          <h2 className={HEADING}>5. How the winner is chosen</h2>
          <p className="mt-10">
            Each drawing has one winner. Within an hour after entries close, our
            server draws one ticket at random from all tickets in the drawing,
            using a cryptographically secure random number. Your odds are your
            tickets divided by all tickets in the drawing. If no one has a
            ticket, there is no winner and the prize carries over to the next
            drawing. Drawing results are final.
          </p>
        </div>

        <div id="prize" className={SECTION}>
          <h2 className={HEADING}>6. The prize</h2>
          <ul className={LIST}>
            <li>
              The prize is a share of the fees Aria has collected and not yet
              awarded, worth at most $5,000 at the time of the draw. We may set
              a lower limit, and anything over the limit stays in the pool for
              later drawings.
            </li>
            <li>
              The raffle panel in Aria shows the current prize. Its dollar value
              is approximate and moves with the market.
            </li>
            <li>
              The prize is paid in the coins that were collected, each on its
              own chain, to the winner&apos;s address on that chain. Amounts too
              small to be worth sending stay in the pool, and on some chains the
              network fee for sending comes out of the prize.
            </li>
          </ul>
        </div>

        <div id="winner" className={SECTION}>
          <h2 className={HEADING}>7. Winner notice and payout</h2>
          <p className="mt-10">
            We don&apos;t collect email or other contact details, so the winner
            is notified in the raffle panel in Aria, which lists your wins.
            There is nothing to claim: the prize is sent automatically within an
            hour after entries close.
          </p>
        </div>

        <div id="unsent-prizes" className={SECTION}>
          <h2 className={HEADING}>8. Prizes that can&apos;t be sent</h2>
          <p className="mt-10">
            If part of a prize can&apos;t be sent, for example because your
            account has no address on that chain or we can&apos;t send on that
            chain yet, it is held for you and we try again every hour. If a send
            fails 3 times, contact us to receive it. A prize that hasn&apos;t
            been sent stays yours and never goes back into the pool.
          </p>
        </div>

        <div id="taxes" className={SECTION}>
          <h2 className={HEADING}>9. Taxes</h2>
          <p className="mt-10">
            You are responsible for any taxes on a prize. If the law requires us
            to report a prize, we may ask you for the details we need.
          </p>
        </div>

        <div id="changes" className={SECTION}>
          <h2 className={HEADING}>10. Changes and ending the raffle</h2>
          <p className="mt-10">
            We may change or end the raffle, and we post changes on this page
            with a new effective date. If we end it, the open drawing is still
            drawn as usual.
          </p>
        </div>

        <div id="terms" className={SECTION}>
          <h2 className={HEADING}>11. Governing terms</h2>
          <p className="mt-10">
            Our{' '}
            <Link className="text-white underline" to={ROUTES.TERMS}>
              Terms of Service
            </Link>{' '}
            govern the raffle, including how disputes are settled.
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
