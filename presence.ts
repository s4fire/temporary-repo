import { ActivityType } from 'premid'

const presence = new Presence({
  clientId: '1555913670423486534',
})

enum ActivityAssets {
  Logo = 'https://www.miruro.tv/icon-dark-1024x1024.svg?v=1.15.0',
}

presence.on('UpdateData', async () => {
  // Keep the activity scoped to Miruro, even if the script is loaded manually elsewhere.
  const hostname = window.location.hostname.toLowerCase()
  if (hostname !== 'miruro.tv' && !hostname.endsWith('.miruro.tv')) {
    presence.clearActivity()
    return
  }

  const animeTitle = document
    .querySelector('h1.title.anime-title > a > span')
    ?.textContent
    ?.trim()

  // Miruro exposes the current episode number on its episode button.
  const episodeButton = document.querySelector<HTMLButtonElement>(
    'button[data-episode-number]',
  )
  const episodeNumber = episodeButton
    ?.getAttribute('data-episode-number')
    ?.trim()

  // The anime title and episode control together distinguish watch pages from other pages.
  if (!animeTitle || !episodeButton) {
    presence.clearActivity()
    return
  }

  const episodeTitle = document.querySelector('span.ep-title')?.textContent?.trim()
  const matchingArtwork = Array.from(document.images).find(
    image => image.alt.trim() === animeTitle,
  )
  const artworkUrl = matchingArtwork?.src || undefined

  const presenceData: PresenceData = {
    type: ActivityType.Watching,
    details: `Watching ${animeTitle}`,
    largeImageKey: artworkUrl || ActivityAssets.Logo,
    largeImageText: animeTitle,
    buttons: [
      {
        label: 'Watch on Miruro',
        url: window.location.href,
      },
    ],
  }

  if (episodeNumber) {
    presenceData.state = episodeTitle
      ? `Episode ${episodeNumber} — ${episodeTitle}`
      : `Episode ${episodeNumber}`
  }

  // UpdateData runs repeatedly, so this re-reads Miruro's DOM after SPA route/episode changes
  // without relying on a reload, the embedded player, or player state.
  presence.setActivity(presenceData)
})
