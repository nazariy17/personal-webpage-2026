# Airplane-animation image assets

Prepared with the built-in ImageGen editing tool, not the CLI/API fallback. The original `public/images/hero-alpine-airplane.png` remains unchanged.

Saved project assets:

- `public/images/hero-alpine-clean.png`: edited mountain background with the static airplane and contrail removed. The wide composition, mountain range and dark grading are retained.
- `public/images/hero-airplane.png`: transparent grey airplane sprite. The source silhouette was isolated and then refined to remove haze and tighten framing.

`src/components/MountainScene.tsx` composites these assets with an animated contrail in the original background coordinate system. The airplane is not baked into the new background. The scene preserves the previous responsive cover crop and follows the same parallax transform as one layer.

## Prompt set

### Background plate

> Use case: precise-object-edit. Edit target: the supplied original dark alpine mountain website background. Remove ONLY the tiny airplane in the upper-right sky and its thin diagonal white contrail. Fill the removed airplane and contrail naturally with the immediately surrounding dark cloudy sky. Preserve the entire mountain range, forest, mist, clouds, lighting, colour grading, wide composition and crop exactly. Do not redesign or brighten the photograph. Do not move or add any objects. Output the same wide 1672×941 composition if possible. This is a clean background plate so the same airplane and contrail can be animated separately by the website. No text, no logos, no new aircraft.

Input: original `hero-alpine-airplane.png`. Output: `hero-alpine-clean.png`.

### Sprite extraction

> Use case: background-extraction. Edit target: ONLY the tiny grey passenger airplane in the upper-right corner of the supplied mountain image. Create an isolated transparent-background sprite of that airplane, tightly framed and centered, in the same subtle grey silhouette style and same rightward/upward orientation. Remove ALL mountains, sky, clouds and the contrail. Preserve its recognizable jet-aircraft silhouette and approximately the original diagonal flight angle (nose pointing slightly upward to the right). Do not add text, logos, shadows, scenery or a new airplane design. The sprite will be displayed at only about 45 pixels wide over the original background. Actual transparent alpha is required.

Input: original `hero-alpine-airplane.png`. The first sprite was not used because it included surrounding haze.

### Final sprite refinement

> Precise object extraction correction. Keep the same airplane silhouette and its nose-up-right orientation, but REMOVE the entire grey glow/haze/cloud surrounding it. Outside the airplane outline every pixel must be fully transparent. Render just one crisp, flat, medium-light grey airplane silhouette with clean antialiased edges, no gradients, no glow, no shadows, no fog, no contrail, no black or white background. Crop/frame tightly so the airplane occupies about 85% of the output width. It is a tiny sprite for animating the existing airplane in a website photograph, not a new illustrated scene. Actual transparent PNG alpha.

Input: the first sprite. Selected output: `hero-airplane.png`.
