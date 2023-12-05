cML.define('audio-jungle', (mod) => {
  const VIDEO =
    'https://file.garden/ZWMT914ycxnRjtN7/Sburb%20Loading%20Screen.mp4';

  mod.on('enable', () => {
    document.body.classList.add('loading');

    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = 0;
    container.style.left = 0;
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '100000';
    container.style.backgroundColor = 'black';

    const start = document.createElement('button');
    start.innerText = 'Start';
    start.style.top = 0;
    start.style.left = 0;
    start.style.width = '100%';
    start.style.height = '100%';
    start.style.zIndex = '100001';

    const video = document.createElement('video');
    video.style.display = 'none';
    video.style.top = 0;
    video.style.left = 0;
    video.style.width = '100%';
    video.style.height = '100%';

    const source = document.createElement('source');
    source.src = VIDEO;
    source.type = 'video/mp4';

    video.appendChild(source);

    container.appendChild(start);
    container.appendChild(video);

    document.body.appendChild(container);

    start.onclick = () => {
      start.style.display = 'none';
      video.style.display = '';

      video.play().then(() => {
        video.onended = () => {
          document.body.removeChild(container);
          document.body.classList.remove('loading');
        };
      });
    };
  });
});
