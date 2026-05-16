type SectionTitleProps = {
    subtitle?: string;
    title: string;
    description?: string;
};

export default function SectionTitle({
    subtitle,
    title,
    description,
}: SectionTitleProps) {
    return (
        <div className="text-center mb-14">
            {subtitle && (
                <p className="text-sm uppercase tracking-[0.3em] text-[#A67C52] mb-3">
                    {subtitle}
                </p>
            )}

            <h2
                className="
                    text-4xl
                    md:text-5xl
                    text-[#5B4B8A]
                    leading-tight
                "
            >
                {title}
            </h2>

            {description && (
                <p className="max-w-2xl mx-auto mt-5 text-[#3B2F2F]/70 leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}