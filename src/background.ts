const makeMd = (url: string): string => "![LGTM](" + url + ")  \n:octopus:";

const clip = (query?: string) => {
  if (query) {
    var clipboard = document.createElement("textarea");
    clipboard.value = makeMd(query);
    document.body.appendChild(clipboard);
    clipboard.select();
    document.execCommand("copy");
    clipboard.remove();
  }
};

chrome.runtime.onInstalled.addListener((): void => {
  chrome.contextMenus.create({
    id: "lgtm",
    title: "この画像でLGTM",
    contexts: ["image"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab): void => {
  clip(info.srcUrl);
});
