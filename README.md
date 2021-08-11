# JavaScript Google Books Preview Pages Downloader (GBPPD)

GBPPD downloads Google Books Preview pages automatically.

How to use:

- Once you are on the start page of the book you are previewing, **"right click the preview page and choose Inspect" to open Chrome's JavaScript console. This is an important step to get into the iframe context.**
- Copy the GBPPD JavaScript code (*the minified version is much easier to cut-and-paste*) and paste it on the console, then press ENTER.
- Start GBPPD by typing on the console **gbppd.start()**, then press ENTER.
- It will start scrolling automatically the pages and each time a page loads the GBPPD will capture it.
- After reaching the last page, type **gbppd.finish()** on the console, then press ENTER.
- GBPPD will open a new tab with a list of all the links of the preview pages and then download them all automatically.
