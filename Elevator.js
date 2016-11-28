<script>
// Elevator script included on the page, already.

window.onload = function() {
  var elevator = new Elevator({
    mainAudio: '/src/to/audio.mp3',
    endAudio: '/src/to/end-audio.mp3'
  });
}

// You can run the elevator, by calling.
elevator.elevate();
</script>
