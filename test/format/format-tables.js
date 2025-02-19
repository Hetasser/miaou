var fmt = require("./miaou.format.node.js").mdToHtml,
	buster = require("buster");
	
function t(s,r){
	return function(){
		try {
			buster.assert.equals(fmt.reset()(s), r);		
		} catch (e) {
			console.log("Erroring markdown :");
			console.log(s);
			throw e;
		}
	}
}

buster.testCase("Formatting - Tables", {
	"simple markdown table": t(
		"col 1|col 2|col 3\n"+
		"-|-|-\n"+
		"A1| A2 |A3\n"+
		"B1| B2 |B3",
		'<div class=tablewrap><table><tr><th>col 1</th><th>col 2</th><th>col 3</th></tr><tr><td>A1</td><td>A2</td><td>A3</td></tr><tr><td>B1</td><td>B2</td><td>B3</td></tr></table></div>'
	),
	"postgresql output table": t(
		"message | player | vote \n"+
		"---------+--------+------\n"+
		"   37528 |     89 | pin\n"+
		"   38454 |    245 | up\n"+
		"   38468 |      1 | pin\n"+
		"     778 |      4 | up",
		"<div class=tablewrap><table><tr><th>message</th><th>player</th><th>vote</th></tr><tr><td>37528</td><td>89</td><td>pin</td></tr><tr><td>38454</td><td>245</td><td>up</td></tr><tr><td>38468</td><td>1</td><td>pin</td></tr><tr><td>778</td><td>4</td><td>up</td></tr></table></div>"
	),
	"mysql output table without first and last border lines": t(
		"| id    | technical_specification | parameter | min       | target   | max       |\n"+
		"+-------+-------------------------+-----------+-----------+----------+-----------+\n"+
		"| 10907 |                       2 |       984 | 1540.0000 |     NULL | 1560.0000 |\n"+
		"| 10910 |                       2 |      1021 |      NULL | 870.0000 |      NULL |\n"+
		"| 10911 |                       2 |      1229 |    0.7000 |     NULL |      NULL |\n",
		"<div class=tablewrap><table><tr><th>id</th><th>technical_specification</th><th>parameter</th><th>min</th><th>target</th><th>max</th></tr><tr><td>10907</td><td>2</td><td>984</td><td>1540.0000</td><td>NULL</td><td>1560.0000</td></tr><tr><td>10910</td><td>2</td><td>1021</td><td>NULL</td><td>870.0000</td><td>NULL</td></tr><tr><td>10911</td><td>2</td><td>1229</td><td>0.7000</td><td>NULL</td><td>NULL</td></tr></table></div>"
	),
	"complete mysql output table": t(
		"+-------+-------------------------+-----------+-----------+----------+-----------+\n"+
		"| id    | technical_specification | parameter | min       | target   | max       |\n"+
		"+-------+-------------------------+-----------+-----------+----------+-----------+\n"+
		"| 10907 |                       2 |       984 | 1540.0000 |     NULL | 1560.0000 |\n"+
		"| 10910 |                       2 |      1021 |      NULL | 870.0000 |      NULL |\n"+
		"| 10911 |                       2 |      1229 |    0.7000 |     NULL |      NULL |\n"+
		"+-------+-------------------------+-----------+-----------+----------+-----------+\n",
		"<div class=tablewrap><table><tr><td>id</td><td>technical_specification</td><td>parameter</td><td>min</td><td>target</td><td>max</td></tr><tr><td>10907</td><td>2</td><td>984</td><td>1540.0000</td><td>NULL</td><td>1560.0000</td></tr><tr><td>10910</td><td>2</td><td>1021</td><td>NULL</td><td>870.0000</td><td>NULL</td></tr><tr><td>10911</td><td>2</td><td>1229</td><td>0.7000</td><td>NULL</td><td>NULL</td></tr></table></div>"
	),
	"style and link in cells": t(
		"gras|italic|lien\n"+
		"---|---|---\n"+
		"**GRAS**|*Italie* <-là|[dystroy](http://dystroy.org)",
		'<div class=tablewrap><table><tr><th>gras</th><th>italic</th><th>lien</th></tr><tr><td><b>GRAS</b></td><td><i>Italie</i> &lt;-là</td><td><a target=_blank href="http://dystroy.org">dystroy</a></td></tr></table></div>'
	),
	"with outside pipes": t(
		"|verbose|markdown|\n"+
		"|-------|--------|\n"+
		"|with   |  pipes |",
		'<div class=tablewrap><table><tr><th>verbose</th><th>markdown</th></tr><tr><td>with</td><td>pipes</td></tr></table></div>'
	),
	"table without th": t(
		"-|-|\ntable|sans|titres",
		'<div class=tablewrap><table><tr><td>table</td><td>sans</td><td>titres</td></tr></table></div>'
	),
	"table with alignments, empty cell and tail span": t(
		"left|right|center\n"+
		"-----|--:|:-:\n"+
		"12|25|34\n"+
		"empty cell->| |<-empty cell\n"+
		"and now| some spanning",
		'<div class=tablewrap><table id=tbl1><style scoped>#tbl1 td:nth-child(1){text-align:left}#tbl1 td:nth-child(2){text-align:right}#tbl1 td:nth-child(3){text-align:center}</style><tr><th>left</th><th>right</th><th>center</th></tr><tr><td>12</td><td>25</td><td>34</td></tr><tr><td>empty cell-&gt;</td><td></td><td>&lt;-empty cell</td></tr><tr><td>and now</td><td colspan=2>some spanning</td></tr></table></div>'
	),


});

