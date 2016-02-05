function zl_gb() {
	var ksjs = document.getElementById("ksjs");
	setup(ksjs);
	ksjs.showType.value = "1";
	ksjs.pageSize.value = "3";
	ksjs.pageNow.value = "1";
	ksjs.submit();
	$("body").mask('请稍候...');
}

function zl_lb() {
	var ksjs = document.getElementById("ksjs");
	setup(ksjs);
	ksjs.showType.value = "0";
	ksjs.pageSize.value = "10";
	ksjs.pageNow.value = "1";
	ksjs.submit();
	$("body").mask('请稍候...');
}

function zl_ft() {
	var ksjs = document.getElementById("ksjs");
	setup(ksjs);
	ksjs.showType.value = "2";
	ksjs.pageSize.value = "8";
	ksjs.pageNow.value = "1";
	ksjs.submit();
	$("body").mask('请稍候...');
}

function zl_px(sm) {
	var ksjs = document.getElementById("ksjs");
	setup(ksjs);
	ksjs.numSortMethod.value = sm;
	ksjs.strLicenseCode.value = "";
	ksjs.pageNow.value = "1";
	ksjs.submit();
	$("body").mask('请稍候...');
}

function zl_lx(ss) {
	var ksjs = document.getElementById("ksjs");
	setup(ksjs);
	ksjs.numSortMethod.value = "4";
	ksjs.strLicenseCode.value = "";
	ksjs.selected.value = ss;
	ksjs.pageNow.value = "1";
	ksjs.submit();
	$("body").mask('请稍候...');
}

function zl_fy(p) {
	var ksjs = document.getElementById("ksjs");
	setup(ksjs);
	ksjs.pageNow.value = p;
	ksjs.submit();
	$("body").mask('请稍候...');
}

function zl_tz(maxPage) {
	var pn = parseInt(document.getElementById("pn").value);
	if (isNaN(pn) || pn < 1 || pn > maxPage) {
		alert("请输入正确的页码！");
		return;
	}
	zl_fy(pn);
}

function zl_ts(pageSize, rowNow) {
	var p = parseInt(document.getElementById("ts").value);
	if (p == pageSize)
		return;
	var ksjs = document.getElementById("ksjs");
	setup(ksjs);
	ksjs.pageNow.value = Math.ceil(rowNow / p);
	ksjs.pageSize.value = p;
	ksjs.submit();
	$("body").mask('请稍候...');
}

function zl_xm(an, db, index) {
	var zlxm = document.getElementById("zlxm");
	zlxm.strSources.value = db;
	zlxm.strWhere.value = "申请号='" + an + "' and " + index + "=1";
	zlxm.strLicenseCode.value = "";
	zlxm.pageSize.value = "6";
	zlxm.pageNow.value = "1";
	zlxm.submit();
}
