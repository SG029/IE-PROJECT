document.addEventListener('DOMContentLoaded', function() {
    const bassSlider = document.getElementById('bass');
    const trebleSlider = document.getElementById('treble');
    const volumeSlider = document.getElementById('volume');
    const bassValue = document.getElementById('bass-value');
    const trebleValue = document.getElementById('treble-value');
    const volumeValue = document.getElementById('volume-value');

    // Initialize volume to middle position (50)
    volumeSlider.value = 50;
    volumeValue.textContent = '50';

    // Update slider values when moved
    bassSlider.addEventListener('input', function() {
        bassValue.textContent = this.value;
    });

    trebleSlider.addEventListener('input', function() {
        trebleValue.textContent = this.value;
    });

    volumeSlider.addEventListener('input', function() {
        volumeValue.textContent = this.value;
    });
});