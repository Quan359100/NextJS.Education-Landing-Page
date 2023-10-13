import Link from "next/link"
export default function VideoCard (videoId) {
    return (
        <>
            <iframe 
            width="560" 
            height="560" 
            //src="https://www.youtube.com/embed/txMAy0Ww2S8?si=5bpiRLWrxYgBYYZS" 
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
        </>
    )
  };
  