function checkDate(date) {
	date = date.replace(/^(\d{4})(?:(\d{2})(\d{2})?)?$/, "$1.$2.$3")
			.replace(/[\\\/\,-]/g, ".");
	if (!/^\d{0,4}(\.\d{0,2}(\.\d{0,2})?)?$/.exec(date))
		return false;
	var ymd = date.split('.');
	var y, m, d;
	y = parseInt(ymd[0], 10);
	if (!isNaN(y) && y < 100)
		y += 1900;
	m = parseInt(ymd[1], 10);
	if (!isNaN(m)) {
		if (m < 1 || m > 12)
			return false;
	}
	d = parseInt(ymd[2], 10);
	if (!isNaN(d)) {
		if (d < 1 || d > 31)
			return false;
	}
	if (isNaN(y)) {
		if (!(isNaN(m) || isNaN(d))) {
			switch (m) {
			case 4,6,9,11:
				if (d > 30)
					return false;
			case 2:
				if (d > 29)
					return false;
			}
		}
	} else {
		if (!(isNaN(m) || isNaN(d))) {
			m -= 1;
			var cdate = new Date(y, m, d);
			var yy = cdate.getFullYear();
			var mm = cdate.getMonth();
			var dd = cdate.getDate();
			if (yy != y || mm != m || dd != d) {
				return false;
			}
			m += 1;
		}
	}
	if (isNaN(y)) {
		y = "";
	} else {
		y = y.toString();
	}
	if (isNaN(m)) {
		m = "";
	} else {
		m = m.toString();
		if (m.length == 1)
			m = "0" + m;
	}
	if (isNaN(d)) {
		d = "";
		if (m != "") {
			y += ".";
		}
	} else {
		d = d.toString();
		if (d.length == 1)
			d = "0" + d;
		y += ".";
		m += ".";
	}
	return y + m + d;
}
