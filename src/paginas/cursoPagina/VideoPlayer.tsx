

interface VideoPlayerProps {
  videoUrl: string | undefined | null;
}

function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  if (!videoUrl) {
    return null;
  }
  return (
    <iframe
      width="560"
      height="315"
      src={videoUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

export default VideoPlayer;