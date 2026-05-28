# Galway Tech Map

* 🧑‍💻 [Want the slide we used to build it?](https://bit.ly/gtmslide)
  * The instructions are on the last hidden slide.
* 📋 [Need a sheet with all those listed?](https://bit.ly/gtmsheet)
* ⌨️ [Looking for the Apps Script code used to auto-generate the list?](202605271500.gs)
* 💡 [Got suggested updates?](https://bit.ly/gtmupdate)

## History

* “Standing on the shoulders of giants”, I borrowed the look and feel from...
  * [Fáilte Ireland](https://www.failteireland.ie/FailteIreland/media/WebsiteStructure/Images/test%20image%20sizes/Dublin%20Now_full_images/Failte-Tech-Map-Final-final.jpg) / [Visit Dublin](https://web.archive.org/web/20140306154459/https://www.visitdublin.com/DublinFestivals/Article/tech-hangouts-dublin-city)'s "Dublin Tech Town” from early 2014.
    * Illustrated by [Stephen Maurice Graham](https://400facts.tumblr.com/).
    * Art direction by [Chelsea O’Connor](https://cargocollective.com/chelseyportfolio/).
* The [first Galway Tech Map](https://technologyvoice.wordpress.com/2014/05/27/galway-is-the-san-francisco-to-dublins-silicon-valley/) was published on 27 May 2014.
* The [second Galway Tech Map](https://technologyvoice.wordpress.com/2015/05/27/galway-tech-map-version-2/) was published on 27 May 2015.
  * You can find the [old](old) versions on GitHub, including the Adobe Illustrator files.
  * The main font used was the [Woodcutter Simple Font](https://www.dafont.com/woodcutter-simple-font.font), see the [wiki](https://github.com/techinnovate/galwaytechmap/wiki) for more.
* The [third Galway Tech Map](https://www.linkedin.com/feed/update/urn:li:activity:7465401528900681730/) was published on 27 May 2026.
  * The main font used is [Schoolbell](https://fonts.google.com/specimen/Schoolbell) (bold for captions and title, regular in other places).

## The Count 🧛🏻‍♂️

If you have pdfimages installed, you can count the number of companies on the map by running this command on the PDF file:
```
pdfimages -list 202605271500_iso216.pdf |grep jpeg |grep 200 |wc -l
```
This uses the fact that the embedded icons are all 200x200px jpeg files (as we reused logos from each company's LinkedIn page).
