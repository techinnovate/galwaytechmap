function getTextAndLinksFromSlides() {

  presentationId = "1TGWQGaUPxwMPkUYJJhXm_jld7YkmVPBeZRUnpTqWo-s";
  spreadsheetId = "11_Ie9gvUUqaqZs1ImznMhHyqFTT2SnWWEX2D7EA50cE";

  var response = Slides.Presentations.get(presentationId);
  var values = [];
  var texts = "";
  var shapeText = "";
  var linky = "";
  var lengthy;

  // Logger.log(response.slides)

  var range = 'Automated!A:Z';

  var data = [
      {
        range: range,
        values: values
      }
  ]

  var resource = {
      valueInputOption: "USER_ENTERED",
      data: data
  };

  for (var i = 0; i < response.slides.length; i++) {

    var slide = response.slides[i].pageElements;
    var skipped = response.slides[i].slideProperties.isSkipped;

    for (var j = 0; j < slide.length; j++) {

      values[j] = ["", ""];

      if (slide[j].shape && !skipped) {

        shapey = slide[j].shape.getShapeType();

        if (shapey == "TEXT_BOX") {

          // Logger.log(shapey);
          // Logger.log(slide[j].shape);
          Logger.log(j);
          linky = "";

          if (slide[j].shape.shapeProperties.link) {

            linky = slide[j].shape.shapeProperties.link.url;
            texts = slide[j].shape.text.textElements;
            shapeText = "";

            for (var k = 0; k < texts.length; k++) {

              if (texts[k].textRun && texts.length <= 2.0) {

                lengthy = texts[k].textRun.content.length; 

                if (lengthy > 2.0) {

                shapeText += texts[k].textRun.content;

                }
              }

            }

            shapeText = shapeText.replace("\n","");
            Logger.log(shapeText);
            Logger.log(linky);
            values[j][0] = shapeText;
            values[j][1] = linky;

            if(shapeText) {

                Sheets.Spreadsheets.Values.batchUpdate(resource, spreadsheetId);
                Utilities.sleep(900);

            }

          }

        }

      }

    }

  }

}