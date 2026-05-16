import Button from "../ui/Button";

type GoogleMapsButtonProps = {
    link: string;
};

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
