# Island Homes SVG asset map

## Currently in GitHub

- `public/video/hero.mp4` — supplied home-tour video
- `public/video/hero_poster1.jpeg` — supplied hero poster
- `public/video/hero_poster2.jpeg` — supplied alternate poster
- `public/images/Island_Homes_SVG_Catalog_FINAL_UPDATED.pdf` — supplied catalog

## Source asset package reviewed

The supplied `islandhomessvg-updated-real-content.zip` contains the following web images:

- `catalog-01.png` through `catalog-14.png`
- `WhatsApp Image 2026-09-10 at 8.50.24 PM.jpeg`
- `WhatsApp Image 2026-09-11 at 10.51.12 AM.jpeg`

The source package was reviewed and the application copy/model data was reconciled to those filenames. The GitHub connector available for this session can write UTF-8 source files and can read the binary assets already in the repository, but it does not expose a binary file-upload operation for copying the PNG/JPEG files from the supplied ZIP into GitHub.

The current implementation therefore uses the binary assets that are already in GitHub (video/posters/catalog PDF) and provides the catalog viewer/download. When the PNG/JPEG files are pushed into `public/images/`, the model/gallery components can be switched to those exact catalog images without changing the page structure.

## Expected final image paths

`public/images/catalog-01.png` … `public/images/catalog-14.png`

`public/images/WhatsApp Image 2026-09-10 at 8.50.24 PM.jpeg`

`public/images/WhatsApp Image 2026-09-11 at 10.51.12 AM.jpeg`
