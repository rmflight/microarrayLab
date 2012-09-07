// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, true, false, false, true, false, true, true, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, true, true, false, false, false, true, false, false, false, true, false ];
var arrayMetadata    = [ [ "1", "GSM272671.CEL.gz", "1", "cancer_epithelial_rep1", "GSM272671", "GSE10797", "cancer", "epithelial", "rep1", "04/14/06 12:08:51" ], [ "2", "GSM272672.CEL.gz", "2", "cancer_stroma_rep1", "GSM272672", "GSE10797", "cancer", "stroma", "rep1", "04/27/06 12:35:02" ], [ "3", "GSM272673.CEL.gz", "3", "cancer_epithelial_rep2", "GSM272673", "GSE10797", "cancer", "epithelial", "rep2", "02/22/06 11:56:05" ], [ "4", "GSM272674.CEL.gz", "4", "cancer_stroma_rep2", "GSM272674", "GSE10797", "cancer", "stroma", "rep2", "02/22/06 12:07:07" ], [ "5", "GSM272675.CEL.gz", "5", "cancer_epithelial_rep3", "GSM272675", "GSE10797", "cancer", "epithelial", "rep3", "01/06/06 13:53:23" ], [ "6", "GSM272676.CEL.gz", "6", "cancer_stroma_rep3", "GSM272676", "GSE10797", "cancer", "stroma", "rep3", "11/23/05 11:55:32" ], [ "7", "GSM272677.CEL.gz", "7", "cancer_epithelial_rep4", "GSM272677", "GSE10797", "cancer", "epithelial", "rep4", "01/06/06 12:34:24" ], [ "8", "GSM272678.CEL.gz", "8", "cancer_stroma_rep4", "GSM272678", "GSE10797", "cancer", "stroma", "rep4", "01/06/06 12:23:01" ], [ "9", "GSM272679.CEL.gz", "9", "cancer_epithelial_rep5", "GSM272679", "GSE10797", "cancer", "epithelial", "rep5", "11/23/05 11:45:27" ], [ "10", "GSM272680.CEL.gz", "10", "cancer_stroma_rep5", "GSM272680", "GSE10797", "cancer", "stroma", "rep5", "11/23/05 12:04:27" ], [ "11", "GSM272681.CEL.gz", "11", "cancer_epithelial_rep6", "GSM272681", "GSE10797", "cancer", "epithelial", "rep6", "01/06/06 12:43:00" ], [ "12", "GSM272682.CEL.gz", "12", "cancer_stroma_rep6", "GSM272682", "GSE10797", "cancer", "stroma", "rep6", "01/06/06 12:06:33" ], [ "13", "GSM272683.CEL.gz", "13", "cancer_epithelial_rep7", "GSM272683", "GSE10797", "cancer", "epithelial", "rep7", "04/19/06 11:09:59" ], [ "14", "GSM272684.CEL.gz", "14", "cancer_stroma_rep7", "GSM272684", "GSE10797", "cancer", "stroma", "rep7", "04/19/06 12:26:23" ], [ "15", "GSM272685.CEL.gz", "15", "cancer_epithelial_rep8", "GSM272685", "GSE10797", "cancer", "epithelial", "rep8", "04/04/06 14:50:26" ], [ "16", "GSM272686.CEL.gz", "16", "cancer_stroma_rep8", "GSM272686", "GSE10797", "cancer", "stroma", "rep8", "04/04/06 15:21:55" ], [ "17", "GSM272687.CEL.gz", "17", "cancer_epithelial_rep9", "GSM272687", "GSE10797", "cancer", "epithelial", "rep9", "04/04/06 10:07:39" ], [ "18", "GSM272688.CEL.gz", "18", "cancer_stroma_rep9", "GSM272688", "GSE10797", "cancer", "stroma", "rep9", "04/04/06 10:26:56" ], [ "19", "GSM272689.CEL.gz", "19", "cancer_epithelial_rep10", "GSM272689", "GSE10797", "cancer", "epithelial", "rep10", "02/23/06 13:30:03" ], [ "20", "GSM272690.CEL.gz", "20", "cancer_stroma_rep10", "GSM272690", "GSE10797", "cancer", "stroma", "rep10", "02/23/06 15:07:32" ], [ "21", "GSM272691.CEL.gz", "21", "cancer_epithelial_rep11", "GSM272691", "GSE10797", "cancer", "epithelial", "rep11", "02/17/06 12:29:44" ], [ "22", "GSM272692.CEL.gz", "22", "cancer_stroma_rep11", "GSM272692", "GSE10797", "cancer", "stroma", "rep11", "02/17/06 12:41:53" ], [ "23", "GSM272693.CEL.gz", "23", "cancer_epithelial_rep12", "GSM272693", "GSE10797", "cancer", "epithelial", "rep12", "04/05/06 15:45:35" ], [ "24", "GSM272694.CEL.gz", "24", "cancer_stroma_rep12", "GSM272694", "GSE10797", "cancer", "stroma", "rep12", "04/05/06 16:04:10" ], [ "25", "GSM272695.CEL.gz", "25", "cancer_epithelial_rep13", "GSM272695", "GSE10797", "cancer", "epithelial", "rep13", "04/18/06 17:47:51" ], [ "26", "GSM272696.CEL.gz", "26", "cancer_stroma_rep13", "GSM272696", "GSE10797", "cancer", "stroma", "rep13", "04/19/06 14:14:26" ], [ "27", "GSM272697.CEL.gz", "27", "cancer_epithelial_rep14", "GSM272697", "GSE10797", "cancer", "epithelial", "rep14", "02/23/06 14:07:02" ], [ "28", "GSM272698.CEL.gz", "28", "cancer_stroma_rep14", "GSM272698", "GSE10797", "cancer", "stroma", "rep14", "02/23/06 15:19:17" ], [ "29", "GSM272699.CEL.gz", "29", "cancer_epithelial_rep15", "GSM272699", "GSE10797", "cancer", "epithelial", "rep15", "02/23/06 13:40:42" ], [ "30", "GSM272700.CEL.gz", "30", "cancer_stroma_rep15", "GSM272700", "GSE10797", "cancer", "stroma", "rep15", "02/23/06 14:20:12" ], [ "31", "GSM272701.CEL.gz", "31", "cancer_epithelial_rep16", "GSM272701", "GSE10797", "cancer", "epithelial", "rep16", "04/14/06 11:51:08" ], [ "32", "GSM272702.CEL.gz", "32", "cancer_stroma_rep16", "GSM272702", "GSE10797", "cancer", "stroma", "rep16", "05/02/06 11:15:26" ], [ "33", "GSM272703.CEL.gz", "33", "cancer_epithelial_rep17", "GSM272703", "GSE10797", "cancer", "epithelial", "rep17", "04/18/06 17:34:58" ], [ "34", "GSM272704.CEL.gz", "34", "cancer_stroma_rep17", "GSM272704", "GSE10797", "cancer", "stroma", "rep17", "04/19/06 11:42:42" ], [ "35", "GSM272705.CEL.gz", "35", "cancer_epithelial_rep18", "GSM272705", "GSE10797", "cancer", "epithelial", "rep18", "04/05/06 12:59:13" ], [ "36", "GSM272706.CEL.gz", "36", "cancer_stroma_rep18", "GSM272706", "GSE10797", "cancer", "stroma", "rep18", "04/05/06 13:16:56" ], [ "37", "GSM272707.CEL.gz", "37", "cancer_epithelial_rep19", "GSM272707", "GSE10797", "cancer", "epithelial", "rep19", "04/19/06 12:03:24" ], [ "38", "GSM272708.CEL.gz", "38", "cancer_stroma_rep19", "GSM272708", "GSE10797", "cancer", "stroma", "rep19", "04/13/06 14:02:33" ], [ "39", "GSM272709.CEL.gz", "39", "cancer_epithelial_rep20", "GSM272709", "GSE10797", "cancer", "epithelial", "rep20", "04/04/06 12:23:49" ], [ "40", "GSM272710.CEL.gz", "40", "cancer_stroma_rep20", "GSM272710", "GSE10797", "cancer", "stroma", "rep20", "04/04/06 13:52:44" ], [ "41", "GSM272711.CEL.gz", "41", "cancer_epithelial_rep21", "GSM272711", "GSE10797", "cancer", "epithelial", "rep21", "02/22/06 13:42:59" ], [ "42", "GSM272712.CEL.gz", "42", "cancer_stroma_rep21", "GSM272712", "GSE10797", "cancer", "stroma", "rep21", "02/22/06 13:58:53" ], [ "43", "GSM272713.CEL.gz", "43", "cancer_epithelial_rep22", "GSM272713", "GSE10797", "cancer", "epithelial", "rep22", "04/04/06 12:35:57" ], [ "44", "GSM272714.CEL.gz", "44", "cancer_stroma_rep22", "GSM272714", "GSE10797", "cancer", "stroma", "rep22", "04/04/06 13:22:51" ], [ "45", "GSM272715.CEL.gz", "45", "cancer_epithelial_rep23", "GSM272715", "GSE10797", "cancer", "epithelial", "rep23", "04/04/06 11:08:48" ], [ "46", "GSM272716.CEL.gz", "46", "cancer_stroma_rep23", "GSM272716", "GSE10797", "cancer", "stroma", "rep23", "04/04/06 10:55:55" ], [ "47", "GSM272717.CEL.gz", "47", "cancer_epithelial_rep24", "GSM272717", "GSE10797", "cancer", "epithelial", "rep24", "09/08/05 12:31:34" ], [ "48", "GSM272718.CEL.gz", "48", "cancer_stroma_rep24", "GSM272718", "GSE10797", "cancer", "stroma", "rep24", "09/08/05 12:43:39" ], [ "49", "GSM272719.CEL.gz", "49", "cancer_epithelial_rep25", "GSM272719", "GSE10797", "cancer", "epithelial", "rep25", "02/22/06 14:17:33" ], [ "50", "GSM272720.CEL.gz", "50", "cancer_stroma_rep25", "GSM272720", "GSE10797", "cancer", "stroma", "rep25", "02/22/06 14:31:12" ], [ "51", "GSM272721.CEL.gz", "51", "cancer_epithelial_rep26", "GSM272721", "GSE10797", "cancer", "epithelial", "rep26", "04/04/06 15:02:54" ], [ "52", "GSM272722.CEL.gz", "52", "cancer_stroma_rep26", "GSM272722", "GSE10797", "cancer", "stroma", "rep26", "04/04/06 15:47:00" ], [ "53", "GSM272723.CEL.gz", "53", "cancer_epithelial_rep27", "GSM272723", "GSE10797", "cancer", "epithelial", "rep27", "04/03/06 11:06:11" ], [ "54", "GSM272724.CEL.gz", "54", "cancer_stroma_rep27", "GSM272724", "GSE10797", "cancer", "stroma", "rep27", "04/03/06 11:16:38" ], [ "55", "GSM272725.CEL.gz", "55", "cancer_epithelial_rep28", "GSM272725", "GSE10797", "cancer", "epithelial", "rep28", "04/19/06 12:15:34" ], [ "56", "GSM272726.CEL.gz", "56", "cancer_stroma_rep28", "GSM272726", "GSE10797", "cancer", "stroma", "rep28", "04/14/06 12:38:36" ], [ "57", "GSM272727.CEL.gz", "57", "normal_epithelial_rep1", "GSM272727", "GSE10797", "normal", "epithelial", "rep1", "09/08/05 14:55:18" ], [ "58", "GSM272728.CEL.gz", "58", "normal_stroma_rep1", "GSM272728", "GSE10797", "normal", "stroma", "rep1", "09/08/05 13:12:24" ], [ "59", "GSM272729.CEL.gz", "59", "normal_epithelial_rep2", "GSM272729", "GSE10797", "normal", "epithelial", "rep2", "04/05/06 13:32:46" ], [ "60", "GSM272730.CEL.gz", "60", "normal_stroma_rep2", "GSM272730", "GSE10797", "normal", "stroma", "rep2", "04/05/06 13:45:31" ], [ "61", "GSM272731.CEL.gz", "61", "normal_epithelial_rep3", "GSM272731", "GSE10797", "normal", "epithelial", "rep3", "02/22/06 13:13:28" ], [ "62", "GSM272732.CEL.gz", "62", "normal_stroma_rep3", "GSM272732", "GSE10797", "normal", "stroma", "rep3", "02/22/06 12:46:17" ], [ "63", "GSM272733.CEL.gz", "63", "normal_epithelial_rep4", "GSM272733", "GSE10797", "normal", "epithelial", "rep4", "02/17/06 13:27:39" ], [ "64", "GSM272734.CEL.gz", "64", "normal_stroma_rep4", "GSM272734", "GSE10797", "normal", "stroma", "rep4", "02/17/06 13:00:25" ], [ "65", "GSM272735.CEL.gz", "65", "normal_epithelial_rep5", "GSM272735", "GSE10797", "normal", "epithelial", "rep5", "02/23/06 16:11:17" ], [ "66", "GSM272736.CEL.gz", "66", "normal_stroma_rep5", "GSM272736", "GSE10797", "normal", "stroma", "rep5", "02/23/06 15:33:22" ] ];
var svgObjectNames   = [ "pca", "dens", "dig" ];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
	var success = false;
	i = 0; 
	/* Some of this looping could already be cached in reportInit() */
	while( (!success) & (i < ssrules.length) ) {
	    selector = ssrules[i].selectorText;  // The selector 
            if (!selector) 
		continue; // Skip @import and other nonstyle rules
            if (selector == (".aqm" + reportObjId)) {
		success = true; 
		ssrules[i].style.cssText = cssText[0+status];
	    } else {
		i++;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}
