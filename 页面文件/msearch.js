$(document).ready(function() {
	$(".inputin").focus(function() {
		this.select();
	});
	$(".sobtn").mouseover(function() {
		this.src = "images/soso_ann_active.png";
	}).mouseout(function() {
		this.src = "images/soso_ann.png";
	});
});

function ksjs() {
	var temp = (document.getElementById("soso_text")).value.replace(/(?:^\s*)|(?:\s*$)|[?%]/g, "").replace(/(['\\])/g, "\\$1");
	if (temp == "") {
		document.getElementById("soso_text").focus();
		return;
	}
	var temp0 = "";
	var ksjs = document.getElementById("ksjs");
	var lx = document.getElementsByName("lx");
	var date;
	var clx = false;
	ksjs.numFMGB.value = "";
	ksjs.numFMSQ.value = "";
	ksjs.numSYXX.value = "";
	ksjs.numWGSQ.value = "";
	var tlx;
	for (var i = 0; i < lx.length; i++) {
		if (lx[i].checked) {
			if (!clx)
				clx = true;
			tlx = lx[i].value;
			if (tlx == "fmgb") {
				ksjs.numFMGB.value = "0";
			} else if (tlx == "fmsq") {
				ksjs.numFMSQ.value = "0";
			} else if (tlx == "xxsq") {
				ksjs.numSYXX.value = "0";
			} else if (tlx == "wgsq") {
				ksjs.numWGSQ.value = "0";
			}
		}
	}
	if (!clx) {
		ksjs.numFMGB.value = "0";
		ksjs.numFMSQ.value = "0";
		ksjs.numSYXX.value = "0";
		ksjs.numWGSQ.value = "0";
	}
	if (/[^\x00-\xff]/.exec(temp)) {
		temp = "申请（专利权）人,发明（设计）人,代理人+='%" + temp
				+ "%' or 地址,名称,专利代理机构,摘要+='" + temp + "'";
	} else {
		if (/^(?:CN ?)?(?:8[5-8][123]\d{5}|[123]\d{6}|[123]\d{8})(?: ?[ABCSUY][1-9]?)?$/.exec(temp)) {
			temp0 = "公开（公告）号='" + temp.replace(/^(?:CN ?)?/, "CN")
					.replace(/$/, "%")
					.replace(/ ?([ABCSUY]%)$/, "$1")
					.replace(/ ?([ABCSUY][1-9])%$/, "$1") + "' or ";
		}
//		if (/^(?:(?:19)?[89]|20\d)\d\.\d{1,2}\.\d{1,2}$/.exec(temp) && temp != "..") {
//			date = checkDate(temp);
//			if (date != false)
//				temp0 += "申请日,公开（公告）日,进入国家日期+='" + date + "' or ";
//		}
		if (/^(?:(?:8[5-9]|9\d|0[0-3])[12389]\d{5}|20\d{2}[12389]\d{7})\.?[0-9Xx]?$/.exec(temp)) {
			temp0 += "申请号,本国优先权,分案原申请号+='" + temp.replace(".", "") + "%' or ";
		}
		if (temp0 != "") {
			temp = temp0 + "摘要='" + temp + "'";
		} else {
			if (/^(?:8[5-8][123]\d{0,5}|[123]\d{0,6}|[123]\d{0,8})$/.exec(temp)) {
				temp0 = "公开（公告）号='CN" + temp + "%' or ";
			}
			date = checkDate(temp);
			if (date != false) {
				temp0 += "申请日,公开（公告）日,进入国家日期+='" + date + "' or ";
			}
			if (/^(?:(?:8[5-9]|9\d|0[0-3])(?:[12389](?:\d{,5})?)?|20\d{2}(?:[12389](?:\d{,7})?)?)\.?[0-9Xx]?$/.exec(temp)) {
				temp0 += "申请号,本国优先权,分案原申请号+='" + temp + "%' or ";
			}
			if (/^[A-Ha-h](?:\d{2}[A-Za-z]?)?|^\d{2}(?:-\d{2}?)?$/.exec(temp)) {
				if (/^[A-Ha-h]\d{2}[A-Za-z]\d{1,3}$/.exec(temp)) {
					temp0 += "分类号='" + temp + "/%' or ";
				} else {
					temp0 += "分类号='" + temp + "%' or ";
				}
			}
			/\b(\d{8}|\d{2,4}\.\d{1,2}\.\d{1,2})\b/.test(temp);
			var d = RegExp.$1;
			date = checkDate(d);
			if (date != false) {
				var dd = temp.replace(d, date);
				if (dd != temp) {
					temp0 += "优先权,本国优先权,分案原申请号,国际申请,国际公布+='%" + dd + "%' or ";
				}
			}
			temp = temp0 + "申请（专利权）人,发明（设计）人,代理人,优先权,本国优先权,分案原申请号,生物保藏,国际申请,国际公布+='%"
					+ temp + "%' or 地址,名称,专利代理机构,摘要+='" + temp + "'";
		}
	}
	ksjs.strWord.value = temp;
	ksjs.showType.value = "1";
	ksjs.numSortMethod.value = "4";
	ksjs.strLicenseCode.value = "";
	ksjs.selected.value = "";
	ksjs.pageSize.value = "3";
	ksjs.pageNow.value = "1";
	ksjs.submit();
	$("body").mask('请稍候...');
}
