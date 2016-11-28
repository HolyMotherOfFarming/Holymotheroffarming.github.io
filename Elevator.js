<div class="elevator-button">Back to Top</div>

<script>
// Elevator script included on the page, already.

window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    mainAudio: '/src/to/audio.mp3',
    endAudio: '/src/to/end-audio.mp3'
  });
}
</script>
