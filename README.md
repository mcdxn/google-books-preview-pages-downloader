# Google Books Preview Pages Downloader (GBPPD)

GBPPD allows you to get the links of Google Books Preview pages.

How to use:

- Once you are on the start page of the book you are previewing, right click and choose Inspect to open Chrome's JavaScript console. This is an important step, otherwise Chrome will not load the iframe.
- Copy the GBPPD JavaScript code and paste it on the console, then press ENTER.
- Start GBPPD by typing on the console gbppd.start(), then press ENTER.
- It will start scrolling automatically the pages and each time a page loads the GBPPD will capture it.
- After reaching the last page, type gbppd.finish() on the console, then press ENTER.
- GBPPD will open a new tab with a list of all the links of the preview pages.
