const btn = document.getElementById("btn") as HTMLButtonElement;
const statusEl = document.getElementById("status") as HTMLSpanElement;
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

btn.addEventListener("click", async () => {
  // Clears the canvas. Apparently this is not a very
  // efficient method to do so, but for this simple
  // demo it is more than enough
  canvas.width = canvas.width;

  const startTime = new Date();

  statusEl.innerText = "Initing ImageMagick..."
  const { initializeImageMagick, ImageMagick } = await import("../../");
  await initializeImageMagick();
  statusEl.innerText = "Inited ImageMagick, now doing a dummy operation..."

  ImageMagick.read('logo:', (image) => {
    image.resize(100, 100);
    image.blur(1, 5);
    image.writeToCanvas(canvas)

    const endTime = new Date()
    statusEl.innerText = `Finished in ${endTime.valueOf() - startTime.valueOf()} ms`
});

})