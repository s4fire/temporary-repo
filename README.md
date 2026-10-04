# Miruro PreMiD Activity

A custom PreMiD activity for [Miruro](https://www.miruro.tv/) that shows the anime and episode currently being watched in Discord Rich Presence.

## Quick setup — no npm required

This repository contains the Miruro activity itself, so you do **not** need to run `npm install` or set up the full PreMiD Activities development repository.

If you already have the PreMiD browser extension installed:

1. Open the PreMiD extension.
2. Go to **Settings → Developer**.
3. Enable **Activity Developer Mode**.
4. Open the **Developer** tab.
5. Click **Load Activity**.
6. Select the cloned `temporary-repo` folder — the folder containing `metadata.json` and `presence.ts`.
7. Open Miruro and start watching an episode.
8. Check Discord for the Rich Presence.

PreMiD officially supports loading an uncompiled activity directory this way.

### Windows setup

If the repository is already cloned, your PowerShell prompt should be inside:

```text
C:\Users\gotta\temporary-repo
```

If needed, run:

```powershell
cd C:\Users\gotta\temporary-repo
```

Then load the **temporary-repo** folder through PreMiD's Developer tab.

You do **not** need to run:

```powershell
npm install
npx pmd dev "Miruro"
```

Those commands are for the full PreMiD Activities development repository, while this repository intentionally contains only the Miruro activity source.

## PreMiD setup

Before testing the activity:

1. Install the PreMiD browser extension.
2. Open the PreMiD extension settings.
3. Enable **Activity Developer Mode**.
4. Open the **Developer** tab.
5. Click **Load Activity**.
6. Select the `temporary-repo` folder.
7. Open a Miruro watch page.
8. Check Discord for the Rich Presence.

The activity detects Miruro watch pages, the anime title, the selected episode, the episode title when available, and the anime artwork when available.

## Common errors and fixes

### The folder cannot be loaded

Make sure you selected the **temporary-repo folder itself**, not a parent folder and not an individual file.

The selected folder should contain:

```text
temporary-repo/
├── metadata.json
├── presence.ts
└── README.md
```

Also make sure **Activity Developer Mode** is enabled.

### Discord shows nothing

Check these in order:

1. Make sure Discord is running.
2. Make sure the PreMiD extension is running.
3. Make sure the Miruro activity appears in the PreMiD Developer tab.
4. Make sure you are on an actual Miruro watch page.
5. Wait a few seconds for the presence to update.

### Updating an existing installation

Pull the latest version of the activity:

```powershell
cd temporary-repo
git pull
```

Then reload the activity from the PreMiD Developer tab if it does not update automatically.

## Requirements

- Windows PowerShell
- Git
- Node.js 20+
- PreMiD browser extension
- PreMiD Activity Developer Mode enabled
- Discord

Official PreMiD documentation recommends Node.js 20+ and the `npx pmd dev <activity-name>` workflow for developing Activities.
