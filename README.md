# Ether's Field

**Feel your music as living light.** Ether's Field turns any song into beat-synced, body-responsive visuals: sand that settles into cymatic patterns, flames that dance to the kick drum, ripples that roll outward on every beat, and sacred geometry that breathes with you. It's built by Ether for musicians, meditators and visual artists, and it runs in your browser or installs on your phone like an app.

**Open it:** https://tonyparker1964.github.io/Ethers-field/

## What it does

- **Moves with your music.** Add your own songs or videos and the visuals follow the beat, the bass, the voice and the high notes. A beat detector locks onto the kick drum, and a BEAT light shows it working.
- **Visual modes**
  - **Breath:** a glowing body that swells with the bass and breathes at your chosen pace
  - **Fascia:** a flowing field of fibres, like a nervous system in motion
  - **Ripple:** a mirrored waveform mandala that rings out on every hit
  - **Cymatic:** a vibrating plate with five elements: Sand, Fire, Water, Air and Ether. It has square and round plates, 42 figures, and patterns that change on the beat or follow the pitch
  - **Symbols:** a golden glyph vortex that flows inward, outward or breathes in and out, with a centre emblem that transforms every 30 seconds
  - **Solids:** the five Platonic solids morphing on the beat, each paired with its classical element
  - **Elements:** the elements brought to life: a seed germinating and mushrooms rising for Earth, a waterfall for Water, flowing lava and a crackling log fire for Fire, drifting smoke for Air, and a glass orb for Aether, the fifth element, whose lights swirl inside the glass. All the videos are upscaled to 4K. The camera, beat flashes and particles move with your song, and you can add your own images and videos too
  - **Stellar Alignment:** a live 3D solar system among the constellations, with Ether's own planet portraits, Saturn's and Uranus's rings, and the Moon. Pick any date from 1800 to 2050 to see where the planets really are that day, with a sky report: which planets meet in the sky, which line up with the Sun, planet parades, the Moon's phase, and whether each planet is in the evening or morning sky. Tap a planet to fly to it. Tap a planet, or its name in the sky report, to see its metaphysical character: its archetype, themes, astrological sign that day (and whether it is retrograde), ruling signs, day, metal, chakra and a reflection, with a button to play its chakra tone. Switch distant stars, constellation lines, orbit paths, the grid and labels on or off. Time flows an hour each second by default; tap the date at the top to pick any date and time, set time to flow by the hour, day, week, month or year, or step one interval at a time; orbits glow gold when planets line up with the Sun; the camera breathes with you and the Sun pulses with the bass
- **Constellation Meditation:** all 88 IAU constellations loop alphabetically from 1 to 88 and return to 1. Stars keep their catalogue-based pattern, with star names, connecting lines, a layered Symbols-style spiral vortex, and a short symbolic reflection. All 88 different connected star patterns flow through eight concentric rotating rings, around one large central constellation. Choose inward, outward, or breathing flow; music adds pulses and light. A readable central pattern shows the star names. The meditation starts flowing outward at 0.5× motion with 2 seconds per central constellation. Quick presets change the center every 1, 2, or 3 seconds; longer presets and custom timing are also available. Spiral travel has separate 1-, 2-, and 3-second options (plus slower choices). Travel times are measured at 1× motion without audio modulation; the Motion slider and music can vary the actual pace. The Motion slider runs from still (0×) to 3×; Time per central constellation ranges from 1 to 90 seconds. Pause the sequence to stay with one pattern, use previous/next, choose a constellation directly, or restart at 1. This visual works with music or in silence; pausing the sequence does not stop the rotation. The diagrams are star-pattern visualizations, not an observer-location sky chart.
- **Chakra colours and tones.** Recolour everything in the seven chakra colours and play chakra tones from 396 Hz (Root) to 963 Hz (Crown). The tones breathe with the breath pace, and each one forms its own cymatic figure.
- **Breath guide.** Set a breathing pace and turn on inhale and exhale cues for meditative sessions.
- **Your controls, your way.** A small floating bar holds Play, the visual and its key setting; tap the sliders button for everything else. Drag the control panel up or down, fade it, let it auto-fade while music plays, or hide it for a clean full-screen view.

## Install it

Open the link in Safari (iPhone) or Chrome (Android) and choose **Add to Home Screen**. It opens full-screen with its own icon and works offline after the first visit.

## Privacy

Everything happens on your device. Songs, videos and images you add are never uploaded anywhere.

## A note on the chakra tones

The pairing of these frequencies with the chakras comes from spiritual and wellness traditions. Ether's Field offers them as a meditative experience, not as medical treatment.

---

© Ether. Artwork by Ether.

The planet and Sun portraits in Stellar Alignment are Ether's own. The Moon's surface map and Saturn's ring colours: Copyright (c) 2010-2017 [Solar System Scope](https://www.solarsystemscope.com/textures/), based on NASA imagery, used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Resized for the web. Uranus ring colours from NASA (public domain).

Constellation Meditation star coordinates, line patterns and names: [Olaf Frohn / d3-celestial](https://github.com/ofrohn/d3-celestial), under the BSD license in `constellation-data-LICENSE.txt`. Symbolic reflections are contemporary creative prompts, not scientific descriptions or a chart calculation.

Constellation-mode verification: run `node tests/constellation-meditation.cjs` from the repository root. Tests cover all 88 distinct surrounding patterns plus exactly one center at desktop/mobile sizes, 1/2/3-second presets, sequence order and wrap, navigation, pause, speed, and restart behavior. These are headless logic/drawing-call checks, not browser visual QA.
