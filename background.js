chrome.contextMenus.create({
	"title":"この画像でLGTM",
	"type":"normal",
	"contexts":["image"],
	"onclick":function(info){
		chrome.tabs.query( {active: true, lastFocusedWindow: true}, function (_) {
			var clipboard = document.createElement("textarea")
			clipboard.value = "![LGTM](" + info.srcUrl + ")  \n:octopus:"
			document.body.appendChild(clipboard)
			clipboard.select();
			document.execCommand('copy');
			clipboard.remove();
		});
	}
});
