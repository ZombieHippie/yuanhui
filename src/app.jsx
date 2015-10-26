var photosEl = document.getElementById("photos")

var purls = ["20130809_221656.jpg",
"20130815_072357.jpg",
"20130919_213348.jpg",
"twister.jpg",
"20131127_162513_7_bestshot.jpg",
"20131127_162751_8_bestshot.jpg",
"20131127_162947_8_bestshot.jpg",
"20131127_163324_5_bestshot.jpg",
"gkccc.jpg",
"20140212_173534.jpg",
"20140430_173713.jpg",
"20140517_120444.jpg",
"20140628_203357.jpg",
"20140713_152709.jpg",
"octodad-1.jpg",
"castle-crashers.jpg",
"super-hexagon.png",
"20140713_152731.jpg",
"20150105_200214.jpg",
"20150109_200504.jpg",
"chik-fil-a-1.jpg",
"DSC00745.JPG",
"perkins-1.jpg",
"spring-break-bikes-1.jpg",
"spring-break-bikes-2.jpg",
]

var totalImages = 0
var decTot = function () {
  setTimeout(function () {
      totalImages--;
      if (totalImages == 0) {
        var msnry = new Masonry(photosEl, {
          // options...
          itemSelector: '.grid-item'
        });
      }
    },
    100)
}


purls.forEach((element, index) => {
  totalImages++
  var a = document.createElement("IMG")
  a.src="photos/" + element
  a.className = "grid-item"
  photosEl.appendChild(a)
  a.onload = decTot
})