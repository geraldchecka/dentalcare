# My Learnings
- Uses React Fast Refresh library
- Over-riding default 'App' initialisation using _app.js
- Fonts
  - local() in CSS
  - what is swap period and block period in CSS
  - make css load faster - https://sia.codes/posts/making-google-fonts-faster/
  - font-display: swap for 'flash of unstyled text' issue, a hack to load alternative fonts until it downloads and loads
    - https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display
    - https://css-tricks.com/almanac/properties/f/font-display/
    - FOUT (unstyled) or FOIT (invisible)
  - CSS font loading optimisation can be achieved using `preconnect` wiht self-hosted fonts
  - According to https://developers.google.com/web/updates/2016/02/font-display
    - The font swap period occurs immediately after the font block period. During this period, if the font face is not loaded, any element attempting to use it must instead render with a fallback font face. If the font face successfully loads during the swap period, the font face is then used normally.
    - swap gives the font face a zero second block period and an infinite swap period. This means the browser draws text immediately with a fallback if the font face isn’t loaded, but swaps the font face in as soon as it loads. Similar to block, this value should only be used when rendering text in a particular font is important for the page, but rendering in any font will still get a correct message across. Logo text is a good candidate for swap since displaying a company’s name using a reasonable fallback will get the message across but you’d eventually use the official typeface.
    - I see in your font format SVG, I usually use WOFF or WOFF2. Maybe that specific font in SVG is impacting negatively the network performance of your website.

# My Questions
- How does Next use the `App` component to initialise pages? https://nextjs.org/docs/advanced-features/custom-app