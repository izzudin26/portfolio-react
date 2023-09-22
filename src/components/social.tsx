import { TSocial } from "../data/social";

export default function SocialIcon({ icon, url }: TSocial) {
  return (
    <a href={url} target="_blank">
      <img src={icon} className="h-8" />
    </a>
  );
}
