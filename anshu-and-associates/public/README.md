# public

Drop the footer photograph here as `footer.jpg`, then set `defaultPhoto` in
`components/SiteFooter.tsx` to `"/footer.jpg"`.

Export it around 2000px wide at quality 80. The scrim sits over it, so fine
detail is wasted bytes. Anchor point is `center 62%`, which favours the room
over the ceiling; adjust in the component if the crop misses.
