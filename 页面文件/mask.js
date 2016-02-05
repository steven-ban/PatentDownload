(function() {
	$.extend($.fn, {
		mask: function(msg, maskDivClass,winHeight) {
			this.unmask(); // 参数 
			var op = {
				opacity: 0.8,
				z: 10000,
				bgcolor: '#ccc'
			};
			var original = $(document.body);
			var position = {
				top: 0,
				left: 0
			};
			if (this[0] && this[0] !== window.document) {
				original = this;
				position = original.position();
			} // 创建一个 Mask 层，追加到对象中 
			var maskDiv = $('<div class="maskdivgen"> </div>');
			maskDiv.appendTo(original);
			var maskWidth = original.outerWidth();
			if (!maskWidth) {
				maskWidth = original.width();
			}
			var maskHeight = original.outerHeight();
			if (!maskHeight) {
				maskHeight = original.height();
			}
			maskDiv.css({
				position: 'absolute',
				top: position.top,
				left: position.left,
				'z-index': op.z,
				width: maskWidth,
				height: maskHeight,
				'background-color': op.bgcolor,
				opacity: 0
			});
			if (maskDivClass) {
				maskDiv.addClass(maskDivClass);
			}
			if (msg) {
				var msgDiv = $('<div style="position:absolute;border:#6593cf 1px solid; padding:1px;background:#ccca"><div style="line-height:24px;border:#a3bad9 1px solid;background:white;padding:2px 10px 2px 10px"><img align="absMiddle" src="images/waiting.gif" />&nbsp;' + msg + '</div></div>');
				msgDiv.appendTo(maskDiv);
				var widthspace = (maskDiv.width() - msgDiv.width());
				var heightspace = (maskDiv.height() - msgDiv.height());
				var windowHeight = $(window).height();
				
				msgDiv.css({
					cursor: 'wait',
					left: (widthspace / 2 - 2)
				});
					var lefts = msgDiv.offset().left;
				if(winHeight){
					windowHeight = winHeight;
				} 
				if(maskDiv.offset().top<windowHeight&&(maskDiv.offset().top+maskDiv.height()>windowHeight)){
					msgDiv.offset({ top:(windowHeight+maskDiv.offset().top-msgDiv.height())/2 ,left:lefts});
				}else{
					msgDiv.css({top:(heightspace / 2 - 2)});
				}
					
			}
			maskDiv.fadeIn('fast',
			function() { // 淡入淡出效果 
				$(this).fadeTo('slow', op.opacity);
			});
			return maskDiv;
		},
		unmask: function() {
			var original = $(document.body);
			if (this[0] && this[0] !== window.document) {
				original = $(this[0]);
			}
			original.find("> div.maskdivgen").fadeOut('slow',
			function() {
				$(this).remove();
			});
		}
	});
})();
