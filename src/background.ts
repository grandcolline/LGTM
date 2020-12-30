/**
 * MarkDownに変更する
 */
const makeMd = (url: string): string => "![LGTM](" + url + ")  \n:octopus:";

/**
 * クリップボードにコピーする
 */
const copyToClipboard = (text: string) => {
  const textArea = document.createElement("textarea");
  document.body.appendChild(textArea);
  textArea.value = text;
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
};

// 右クリックメニューに追加
chrome.runtime.onInstalled.addListener((): void => {
  chrome.contextMenus.create({
    id: "lgtm",
    title: "この画像でLGTM",
    contexts: ["image"],
  });
});

// 処理
chrome.contextMenus.onClicked.addListener((info, tab): void => {
  if (info.srcUrl) {
    copyToClipboard(makeMd(info.srcUrl));
  }
});
