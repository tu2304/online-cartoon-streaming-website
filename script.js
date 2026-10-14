function changeVideo(videoUrl, title, description) {
    // Thay đổi nguồn video của thẻ iframe
    document.getElementById('main-video').src = videoUrl;
    // Thay đổi tiêu đề và mô tả tương ứng
    document.getElementById('video-title').innerText = title;
    document.getElementById('video-desc').innerText = description;
}
