import Button from "../ui/Button";
import type { GoogleMapsButtonProps } from "@/types/invitation.type";

export default function GoogleMapsButton({
    link,
}: GoogleMapsButtonProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
        >
            <Button>
                Open Google Maps
            </Button>
        </a>
    );
}
