// 填一个本地 MP4 相对路径，或 B 站 / YouTube 视频页面链接。
// MP4 示例：assets/humanoid-demo.mp4；保持空字符串则显示占位。
const humanoidVideo = { mp4: '', link: '', poster: '' };
const slot = document.getElementById('humanoid-media');
if (humanoidVideo.mp4) {
  const video = document.createElement('video');
  video.controls = true; video.playsInline = true; video.preload = 'metadata';
  video.src = humanoidVideo.mp4;
  if (humanoidVideo.poster) video.poster = humanoidVideo.poster;
  video.textContent = '浏览器无法播放此视频，请下载后观看。';
  slot.replaceChildren(video);
} else if (humanoidVideo.link && /^https:\/\//.test(humanoidVideo.link)) {
  const link = document.createElement('a');
  link.href = humanoidVideo.link; link.textContent = '▷ 观看人形机器人 Demo ↗';
  link.target = '_blank'; link.rel = 'noopener noreferrer';
  slot.replaceChildren(link);
}
