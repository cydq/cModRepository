cML.define('audio-jungle', (mod) => {
  const VIDEO =
    'https://file.garden/ZWMT914ycxnRjtN7/Sburb%20Loading%20Screen.mp4';

  mod.on('enable', () => {
    env.loading = true;
    body.classList.add('loading');

    document.body.innerHTML += `
      <div id="sbuban-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 100000 !important; background-color: black;">
        <video id="sbuban-jungle" style="top: 0; left: 0; width: 100%; height: 100%;">
          <source src="${VIDEO}" type="video/mp4"></source>
        </video>
      </div>
    `;

    const video = document.querySelector('#sbuban-jungle');
    video.play().then(() => {
      video.onended = () =>
        document.body.removeChild(document.querySelector('#sbuban-container'));
    });

    body.classList.remove('loading');
    env.loading = false;
  });
});
