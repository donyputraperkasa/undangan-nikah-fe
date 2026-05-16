export default function BackgroundTexture() {
    return (
        <div
            className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
            style={{
                backgroundImage: "url('/images/paper-texture.jpg')",
            }}
        />
    );
}
