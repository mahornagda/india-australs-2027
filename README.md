# India Australs 2027

The website for the Australasian Intervarsity Debating Championship 2027,
held at IIT Delhi from 27 June to 4 July 2027.

**Where the site stands** is kept as a page on the site itself, at `/progress`.
That is the place to look for what works, what we are waiting on and who has
the answer — not this file.

## Running it

```
npm install
npm run dev      # http://localhost:3000
npm run build    # writes a plain static site into out/
```

## Changing the words

Almost everything you would want to edit lives in `src/content/`, in plain
lists you can change without touching a page:

| File | Holds |
| --- | --- |
| `site.ts` | Dates, venue, hotel, the menu, the sign-up form's address |
| `people.ts` | Every judge, organiser and advisor, with their credits |
| `faq.ts` | The questions, their answers, and which ones are still undecided |
| `progress.ts` | The build log that fills the `/progress` page |
| `map.ts` | The countries on the route map |

Marking a question undecided is one flag: add `pending: true` to it.

## Publishing

Pushing to `main` rebuilds and publishes the site. Nothing else to run.

To move the site onto its own domain: add the domain in the repository's
Pages settings, then set `NEXT_PUBLIC_BASE_PATH` to an empty string in
`.github/workflows/deploy.yml`.

## Design

The palette, the leaping tiger and the poster grid come from the tournament's
own design library. Type is Cormorant Garamond over Spectral.
