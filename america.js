const URI = "https://www.intralot.com.pe/intralot/swf/kabala/kabala-pozo-panel.xml";

async function init() {
  let options = {
    attributeNamePrefix: "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName: "#text",
    ignoreAttributes: true,
    ignoreNameSpace: false,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val, attrName) => he.decode(val, { isAttributeValue: true }), //default is a=>a
    tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"],
  };

  const resp = await axios.get(URI);
  console.log("resp",resp)
  const xmlData = resp.data;
  const jsonOBJ = parser.parse(xmlData, options, true);

  if (jsonOBJ) {
    // America
    /*const dataItem1  = jsonOBJ.rss.channel.item1;
    
    document.getElementById('title1').innerHTML = dataItem1.titulo1;
    document.getElementById('title2').innerHTML = dataItem1.titulo2;
    document.getElementById('title3').innerHTML = dataItem1.titulo3;*/

    // intralot




  }
  
}

init();