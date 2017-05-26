chrome.contextMenus.create({
	"title":"この画像でLGTM",
	"type":"normal",
	"contexts":["image"],
	"onclick":function(info){
		chrome.tabs.query( {active: true, lastFocusedWindow: true}, function (tabs) {
		var t_url = "http://xxx.jp/?s=" + info.srcUrl;
		//chrome.tabs.create({url: t_url});
		var clipboard = $("<input/>");
		$("body").append(clipboard);
		clipboard.val("![LGTM](" + info.srcUrl + ") <br /> :octopus:").select();
		document.execCommand('copy');
		clipboard.remove();
		});
	}
});
